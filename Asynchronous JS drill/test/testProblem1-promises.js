/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

//with promises - more readable

const fs = require("fs").promises; // Using the promise-based fs API
const path = require("path");

// Function to create a directory if it doesn't exist
async function createDirectory(directoryPath) {
  try {
    await fs.mkdir(directoryPath, { recursive: true });
    console.log("Directory created:", directoryPath);
  } catch (err) {
    console.error("Error creating directory:", err);
    throw err; // Propagate the error
  }
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
async function createJsonFile(filePath) {
  const jsonData = JSON.stringify(generateRandomJson(), null, 4);
  try {
    await fs.writeFile(filePath, jsonData);
    console.log(`File created: ${filePath}`);
  } catch (err) {
    console.error("Error creating file:", err);
    throw err; // Propagate the error
  }
}

// Function to delete a file
async function deleteFile(filePath) {
  try {
    await fs.unlink(filePath);
    console.log(`Deleted: ${filePath}`);
  } catch (err) {
    console.error("Error deleting file:", err);
    throw err; // Propagate the error
  }
}

// Function to delete all files in a directory
async function deleteAllFilesInDirectory(directoryPath) {
  try {
    const files = await fs.readdir(directoryPath);
    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      await deleteFile(filePath);
    }
    console.log("All files deleted.");
  } catch (err) {
    console.error("Error deleting files:", err);
    throw err; // Propagate the error
  }
}

// Main function
async function main() {
  const directoryPath = path.join(__dirname, "random_json_files");
  const numberOfFiles = 5;

  try {
    // Step 1: Create directory
    await createDirectory(directoryPath);

    // Step 2: Create 5 files
    for (let i = 0; i < numberOfFiles; i++) {
      const filePath = path.join(directoryPath, `file_${i + 1}.json`);
      await createJsonFile(filePath);
    }

    // Step 3: After creating all files, delete them
    await deleteAllFilesInDirectory(directoryPath);
  } catch (err) {
    console.error("Error in main process:", err);
  }
}

// Run the main function
main();

