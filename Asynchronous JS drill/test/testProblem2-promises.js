/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

//with promises

const fs = require("fs").promises;
const path = require("path");


async function processFiles() {
  try {
    // Step 1: Read lipsum.txt
    const data = await fs.readFile("lipsum.txt", "utf8");

    // Step 2: Convert to uppercase and write to uppertext.txt
    const upperText = data.toUpperCase();
    await fs.writeFile("uppertext.txt", upperText);
    console.log("uppertext.txt created.");

    // Step 3: Write uppertext.txt to filenames.txt
    await fs.appendFile("filenames.txt", "uppertext.txt\n");
    console.log("uppertext.txt added to filenames.txt.");

    // Step 4: Read uppertext.txt, convert to lowercase and split into sentences
    const lowerText = upperText.toLowerCase();
    const sentences = lowerText
      .split(".")
      .map((sentence) => sentence.trim())
      .filter(Boolean); // remove any empty strings
    await fs.writeFile("lowertext.txt", sentences.join(".\n"));
    console.log("lowertext.txt created.");

    // Step 5: Write the lowertext.txt to filenames.txt
    await fs.appendFile("filenames.txt", "lowertext.txt\n");
    console.log("lowertext.txt added to filenames.txt.");

    // Step 6: Read lowertext.txt, sort content and write to sorted.txt
    const sortedSentences = sentences.sort().join("\n");
    await fs.writeFile("sorted.txt", sortedSentences);
    console.log("sorted.txt created.");

    // Step 7: Write the sorted.txt to filenames.txt
    await fs.appendFile("filenames.txt", "sorted.txt\n");
    console.log("sorted.txt added to filenames.txt.");

    // Step 8: Read filenames.txt and delete all the new files mentioned
    const filenamesData = await fs.readFile("filenames.txt", "utf8");
    const filenames = filenamesData.split("\n").filter(Boolean);

    // Normal for loop to delete files
    for (let i = 0; i < filenames.length; i++) {
      const filename = filenames[i];
      try {
        await fs.unlink(filename);
        console.log(`${filename} deleted.`);
      } catch (err) {
        console.error(`Error deleting ${filename}:`, err);
      }
    }

    console.log("All files deleted successfully.");
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

// Run the process
processFiles();
