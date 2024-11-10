let matchesData = require("./matches.json");
let deliveriesData = require("./deliveries.json");
const fs = require("fs"); // Module to read/write files
const path = require("path"); // Module to work with file paths



const outputFolder = path.join(__dirname, "output");

// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder); // Make directory for output if it doesn't exist
}

//1. Number of matches played per year for all the years in IPL.

let matchesMap = {};

for (const key in matchesData) {
  if (matchesData.hasOwnProperty(key)) {
    let eachMatch = matchesData[key];
    let year = eachMatch.season;

    if (matchesMap[year] == undefined) {
      matchesMap[year] = 0; // Initialize if not present
    }
    matchesMap[year] = matchesMap[year] + 1; // Increment the count
  }
}

console.log(matchesMap);

fs.writeFileSync(
  path.join(outputFolder, "1.matchesPerYearAllSeasons"),
  JSON.stringify(matchesMap, null, 4)
);
