const fs = require("fs");
const path = require("path");

// Function to create a directory if it doesn't exist
function createDirectory(directoryPath) {
  return new Promise((resolve, reject) => {
    fs.mkdir(directoryPath, { recursive: true }, (err) => {
      if (err) reject("Error creating directory: " + err);
      else resolve("Directory created: " + directoryPath);
    });
  });
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
function createJsonFile(filePath) {
  return new Promise((resolve, reject) => {
    const jsonData = JSON.stringify(generateRandomJson(), null, 2);
    fs.writeFile(filePath, jsonData, (err) => {
      if (err) reject("Error creating file: " + filePath + ", " + err);
      else resolve("File created: " + filePath);
    });
  });
}

// Function to delete a file
function deleteFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) reject("Error deleting file: " + filePath + ", " + err);
      else resolve("Deleted: " + filePath);
    });
  });
}

// Function to delete all files in a directory simultaneously using Promise.all
function deleteAllFilesInDirectory(directoryPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        return reject("Error reading directory: " + err);
      }

      // If no files, resolve immediately
      if (files.length === 0) {
        return resolve("No files to delete.");
      }

      // Create an array of promises for each file deletion
      let promises = files.map((file) => {
        const filePath = path.join(directoryPath, file);
        return deleteFile(filePath)
          .then((result) => {
            console.log(result); // Log each successful deletion
          })
          .catch((err) => {
            console.error("Error deleting file: ", err);
          });
      });

      // Once all deletion promises are done, resolve the main promise
      Promise.all(promises)
        .then(() => resolve("All files deleted."))
        .catch((err) => reject(err));
    });
  });
}

// Main function to create and then delete JSON files
const directoryPath = path.join(__dirname, "random_json_files");
const numberOfFiles = 5;

createDirectory(directoryPath)
  .then(() => {
    console.log("Directory created:", directoryPath);

    // Create an array of promises for creating files
    let createFilePromises = [];
    for (let i = 0; i < numberOfFiles; i++) {
      const filePath = path.join(directoryPath, `file_${i + 1}.json`);
      createFilePromises.push(createJsonFile(filePath));
    }

    // Wait for all files to be created
    return Promise.all(createFilePromises);
  })
  .then((results) => {
    // Log the results of file creation
    results.forEach((result) => console.log(result));

    // Now delete all the files in the directory
    return deleteAllFilesInDirectory(directoryPath);
  })
  .then((deletionResults) => {
    // Log the results of file deletion
    console.log(deletionResults); // Log final message (e.g., "All files deleted.")
  })
  .catch((err) => {
    // Handle any errors that occur during the process
    console.error(err);
  });

