const fs = require("fs");
const path = require("path");

// Function to read a file
function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        return reject("Error reading file " + filePath + ": " + err);
      }
      resolve(data);
    });
  });
}

// Function to write to a file
function writeFile(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        return reject("Error writing to file " + filePath + ": " + err);
      }
      resolve("File written: " + filePath);
    });
  });
}

// Function to append to a file
function appendToFile(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.appendFile(filePath, content, (err) => {
      if (err) {
        return reject("Error appending to file " + filePath + ": " + err);
      }
      resolve("Appended to file: " + filePath);
    });
  });
}

// Function to delete a file
function deleteFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        return reject("Error deleting file " + filePath + ": " + err);
      }
      resolve("File deleted: " + filePath);
    });
  });
}
// Promise.all is used to run multiple promises concurrently (in parallel) and wait for all of them to complete. It takes an array of promises and returns a new promise that resolves when all the promises inside the array have resolved.

// If all promises resolve successfully, Promise.all resolves with an array of their results.
// If any one of the promises rejects, Promise.all immediately rejects with that first error.

// Step 1: Read lipsum.txt
readFile("lipsum.txt")
  .then((data) => {
    // Step 2: Convert to uppercase and write to uppertext.txt
    const upperText = data.toUpperCase();
    return writeFile("uppertext.txt", upperText);
  })
  .then(() => {
    // Step 3: Append uppertext.txt to filenames.txt
    return appendToFile("filenames.txt", "uppertext.txt\n");
  })
  .then(() => {
    // Step 4: Read uppertext.txt, convert to lowercase, split into sentences, and write to lowertext.txt
    return readFile("uppertext.txt");
  })
  .then((data) => {
    const lowerText = data.toLowerCase();
    const sentences = lowerText
      .split(".")
      .map((sentence) => sentence.trim())
      .filter(Boolean);
    return writeFile("lowertext.txt", sentences.join(".\n"));
  })
  .then(() => {
    // Step 5: Append lowertext.txt to filenames.txt
    return appendToFile("filenames.txt", "lowertext.txt\n");
  })
  .then(() => {
    // Step 6: Read lowertext.txt, sort content, and write to sorted.txt
    return readFile("lowertext.txt");
  })
  .then((data) => {
    const sortedSentences = data.split("\n").sort().join("\n");
    return writeFile("sorted.txt", sortedSentences);
  })
  .then(() => {
    // Step 7: Append sorted.txt to filenames.txt
    return appendToFile("filenames.txt", "sorted.txt\n");
  })
  .then(() => {
    // Step 8: Read filenames.txt and delete the listed files
    return readFile("filenames.txt");
  })
  .then((data) => {
    const filenames = data.split("\n").filter(Boolean);
    const deletionPromises = filenames.map((filename) => deleteFile(filename));
    return Promise.all(deletionPromises);
  })
  .then(() => {
    console.log("All files deleted successfully.");
  })
  .catch((err) => {
    console.error("Error:", err);
  });
