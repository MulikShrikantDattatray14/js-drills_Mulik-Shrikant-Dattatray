/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/


// without use of promises - asycn/await

const fs = require("fs");
const path = require("path");

// Step 1: Read lipsum.txt
fs.readFile("lipsum.txt", "utf8", (err, data) => {
  if (err) {
    return console.error("Error reading lipsum.txt:", err);
  }
  //console.log(data);
  //console.log("===============================================================================================================================")
  // Step 2: Convert to uppercase and write to uppertext.txt

  const upperText = data.toUpperCase();
  //console.log(upperText);
  //console.log("===============================================================================================================================")
  fs.writeFile("uppertext.txt", upperText, (err) => {
    if (err) {
      return console.error("Error writing to uppertext.txt:", err);
    }
    console.log("uppertext.txt created.");

    // Step 3: Write the filename to filenames.txt
    fs.appendFile("filenames.txt", "uppertext.txt\n", (err) => {
      if (err) {
        return console.error("Error writing to filenames.txt:", err);
      }
      console.log("uppertext.txt added to filenames.txt.");

      // Step 4: Read uppertext.txt, convert to lowercase and split into sentences
      fs.readFile("uppertext.txt", "utf8", (err, data) => {
        if (err) {
          return console.error("Error reading uppertext.txt:", err);
        }

        const lowerText = data.toLowerCase();
        //console.log(lowerText);
        //console.log("===============================================================================================================================")
        const sentences = lowerText
          .split(".")
          .map((sentence) => sentence.trim())
          .filter(Boolean); // remove any empty strings ("") that may have been created from extra spaces or at the end of the split operation.
        //console.log(sentences);
        //console.log("===============================================================================================================================")
        fs.writeFile("lowertext.txt", sentences.join(".\n"), (err) => {
          if (err) {
            return console.error("Error writing to lowertext.txt:", err);
          }
          console.log("lowertext.txt created.");

          // Step 5: Write the filename to filenames.txt
          fs.appendFile("filenames.txt", "lowertext.txt\n", (err) => {
            if (err) {
              return console.error("Error writing to filenames.txt:", err);
            }
            console.log("lowertext.txt added to filenames.txt.");

            // Step 6: Read lowertext.txt, sort content and write to sorted.txt
            fs.readFile("lowertext.txt", "utf8", (err, data) => {
              if (err) {
                return console.error("Error reading lowertext.txt:", err);
              }

              const sortedSentences = data.split("\n").sort().join("\n");
              //console.log(sortedSentences);
              //console.log("===============================================================================================================================")
              fs.writeFile("sorted.txt", sortedSentences, (err) => {
                if (err) {
                  return console.error("Error writing to sorted.txt:", err);
                }
                console.log("sorted.txt created.");

                // Step 7: Write the filename to filenames.txt
                fs.appendFile("filenames.txt", "sorted.txt\n", (err) => {
                  if (err) {
                    return console.error(
                      "Error writing to filenames.txt:",
                      err
                    );
                  }
                  console.log("sorted.txt added to filenames.txt.");

                  // Step 8: Read filenames.txt and delete all the new files mentioned
                  fs.readFile("filenames.txt", "utf8", (err, data) => {
                    if (err) {
                      return console.error("Error reading filenames.txt:", err);
                    }

                    const filenames = data.split("\n").filter(Boolean);
                    //const filenames = data.split("\n")
                    //console.log(filenames);
                    filenames.forEach((filename) => {
                      fs.unlink(filename, (err) => {
                        if (err) {
                          console.error(`Error deleting ${filename}:`, err);
                        } else {
                          console.log(`${filename} deleted.`);
                        }
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
