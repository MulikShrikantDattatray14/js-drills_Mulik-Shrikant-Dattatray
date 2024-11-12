let matchesData = require("../../src/data/matches.json");
let deliveriesData = require("../../src/data/deliveries.json");
const fs = require("fs"); // Module to read/write files
const path = require("path"); // Module to work with file paths

const outputFolder = path.join("../../src/public", "output");

// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder); // Make directory for output if it doesn't exist
}

// 2. Number of matches won per team per year in IPL.


exports.matchesWonPerTeamPerYear = function () {
  return Object.values(matchesData).reduce((matchesWonPerTeam, eachMatch) => {
    const eachYear = eachMatch.season; // Get the year of the match

    // Ensure there's an object to hold the match count for each year
    if (matchesWonPerTeam[eachYear] == undefined) {
      matchesWonPerTeam[eachYear] = {}; // Initialize the year if not present
    }

    // Now check the 'winner' field in the match data
    if (eachMatch.winner) {
      const winningTeam = eachMatch.winner; // Get the team that won the match

      // If the winning team does not exist in the current year's object, initialize with 0 wins
      if (matchesWonPerTeam[eachYear][winningTeam]== undefined) {
        matchesWonPerTeam[eachYear][winningTeam] = 0;
      }

      // Increment the win count for the winning team for this year
      matchesWonPerTeam[eachYear][winningTeam]++;
    }

    return matchesWonPerTeam; // Return the accumulator after processing each match
  }, {}); // Initialize the accumulator as an empty object
};


//Time Complexity: O(n), where n is the number of match objects in matchesData.
//Space Complexity: O(n), where n is the number of match objects in matchesData, because in the worst case, there could be one entry for each match in the final accumulator object. The actual space complexity depends on the number of unique years and teams but will still generally be O(n) in practice.