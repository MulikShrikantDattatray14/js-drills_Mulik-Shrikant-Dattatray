let matchesData = require("./matches.json");
let deliveriesData = require("./deliveries.json");
const fs = require("fs"); // Module to read/write files
const path = require("path"); // Module to work with file paths

const outputFolder = path.join(__dirname, "output");

// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder); // Make directory for output if it doesn't exist
}

// 2. Number of matches won per team per year in IPL.

let matchesWonPerTeam = {}; // This should be initialized outside the loop

for (const key in matchesData) {
  if (matchesData.hasOwnProperty(key)) {
    let eachMatch = matchesData[key]; // Get each match
    let eachYear = eachMatch.season; // Get the year of the match

    // Ensure there's an object to hold the match count for each year
    if (matchesWonPerTeam[eachYear] == undefined) {
      matchesWonPerTeam[eachYear] = {}; // Initialize the year in matchesWonPerTeam if not already
    }

    // Now check the 'winner' field in the match data
    if (eachMatch.winner !== undefined) {
      let winningTeam = eachMatch.winner; // Get the team that won the match

      // If the winning team does not exist in the current year's object, initialize with 0 wins
      if (matchesWonPerTeam[eachYear][winningTeam] == undefined) {
        matchesWonPerTeam[eachYear][winningTeam] = 0;
      }

      // Increment the win count for the winning team for this year
      matchesWonPerTeam[eachYear][winningTeam]++;
    }
  }
}

console.log(matchesWonPerTeam);


fs.writeFileSync(
  path.join(outputFolder, "2.matchesWonPerTeamPerYear"),
  JSON.stringify(matchesWonPerTeam, null, 4)
);