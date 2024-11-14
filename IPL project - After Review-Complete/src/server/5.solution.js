let matchesData = require("../../src/data/matches.json");
let deliveriesData = require("../../src/data/deliveries.json");
const fs = require("fs"); // Module to read/write files
const path = require("path"); // Module to work with file paths

const outputFolder = path.join("../../src/public", "output");

// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder); // Make directory for output if it doesn't exist
}

//5. Find the number of times each team won the toss and also won the match

exports.wonTossWonMatch = function () {
  // Step 1: Filter matches where toss winner equals match winner
  const winningTossMatches = matchesData.filter(
    (match) => match.toss_winner === match.winner
  );

  // Step 2: Use reduce to accumulate the count of toss winners
  const tossMatchWon = winningTossMatches.reduce((accum, match) => {
    const tossWinner = match.toss_winner;

    // If tossWinner doesn't exist in the accumulator, initialize it
    if (accum[tossWinner] == undefined) {
      accum[tossWinner] = 0;
    }

    // Increment the count for the toss winner
    accum[tossWinner]++;
    return accum;
  }, {}); // Initialize the accumulator as an empty object

  // Step 3: Return the final result
  return tossMatchWon;
};

// Time Complexity:
// Filtering (filter()): O(m), where m is the number of matches in matchesData.
// Reducing (reduce()): O(m), where m is the number of matches in matchesData (specifically the ones that passed the filter).
// Overall Complexity: O(m), where m is the number of matches.
