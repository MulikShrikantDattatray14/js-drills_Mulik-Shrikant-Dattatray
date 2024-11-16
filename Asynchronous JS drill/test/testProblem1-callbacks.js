/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

// without promises - only callbacks

const fs = require("fs");
const path = require("path");

// Function to create a directory if it doesn't exist
function createDirectory(directoryPath, callback) {//The recursive: true option in fs.mkdir() ensures that all missing parent directories are created automatically. Without it, you would need to manually check and create each directory in the path.
  fs.mkdir(directoryPath, { recursive: true }, callback);
}

// Function to generate random JSON data
function generateRandomJson() {
  return {
    Name: `File_${Math.floor(Math.random() * 1000)}`,
    Age: Math.floor(Math.random() * 100),
    State: `State_${Math.floor(Math.random() * 10)}`,
    Country: `Country_${Math.floor(Math.random() * 10)}`,
    Work_Experience_Years: Math.floor(Math.random() * 10),
  };
}

// Function to write a random JSON file
function createJsonFile(filePath, callback) {
  const jsonData = JSON.stringify(generateRandomJson(), null, 2);
  fs.writeFile(filePath, jsonData, callback);
}

// Function to delete a file
function deleteFile(filePath, callback) {
  fs.unlink(filePath, callback); // deletes the specified file from the filesystem
}

// Function to delete all files in a directory
function deleteAllFilesInDirectory(directoryPath, callback) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return callback(err);
    }

    let filesDeleted = 0;
    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);
      deleteFile(filePath, (err) => {
        if (err) {
          return callback(err);
        }
        filesDeleted++;
        console.log(`Deleted: ${filePath}`);

        // If all files have been deleted, call the callback
        if (filesDeleted === files.length) {
          callback(null);
        }
      });
    });
  });
}

// Main function
const directoryPath = path.join(__dirname, "random_json_files");
const numberOfFiles = 5;

// Create directory and then create files
createDirectory(directoryPath, (err) => {
  if (err) {
    console.error("Error creating directory:", err);
    return;
  }
  console.log("Directory created:", directoryPath);

  let filesCreated = 0;

  // Create 5 files
  for (let i = 0; i < numberOfFiles; i++) {
    const filePath = path.join(directoryPath, `file_${i + 1}.json`);

    createJsonFile(filePath, (err) => {
      if (err) {
        console.error("Error creating file:", err);
        return;
      }

      console.log(`File created: ${filePath}`);
      filesCreated++;

      // If all files are created, start deletion
      if (filesCreated === numberOfFiles) {
        deleteAllFilesInDirectory(directoryPath, (err) => {
          if (err) {
            console.error("Error deleting files:", err);
            return;
          }
          console.log("All files deleted.");
        });
      }
    });
  }
});
