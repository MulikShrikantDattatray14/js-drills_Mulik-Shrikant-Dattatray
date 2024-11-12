let matchesData = require("../../src/data/matches.json");
let deliveriesData = require("../../src/data/deliveries.json");
const fs = require("fs"); // Module to read/write files
const path = require("path"); // Module to work with file paths

//Find the highest number of times one player has been dismissed by another player

const outputFolder = path.join("../../src/public", "output");
const highestDismissal = {};
// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder); // Make directory for output if it doesn't exist
}

//8. Find the highest number of times one player has been dismissed by another player

exports.HIghestDismissalBatsmenByBowler = function () {
  // Step 1: Aggregate dismissals and track top dismissals in a single loop
  const dismissalsCount = {};

  deliveriesData.forEach((delivery) => {
    const { dismissal_kind, batsman, bowler } = delivery;

    // Only process valid dismissals
    if (dismissal_kind !== "") {
      // Initialize batsman's record if not present
      if (!dismissalsCount[batsman]) {
        dismissalsCount[batsman] = {};
      }

      // Initialize bowler's dismissal count for this batsman if not present
      if (!dismissalsCount[batsman][bowler]) {
        dismissalsCount[batsman][bowler] = 0;
      }

      // Increment the dismissal count
      dismissalsCount[batsman][bowler]++;
    }
  });

  // Step 2: Find the bowler with the most dismissals for each batsman
  const topDismissals = Object.entries(dismissalsCount).map(([batsman, bowlers]) => {
    let topBowler = { bowler: "", dismissals: 0 };

    // Loop through each bowler to check who dismissed the batsman the most
    for (let [bowler, dismissals] of Object.entries(bowlers)) {
      if (dismissals > topBowler.dismissals) {
        topBowler = { bowler, dismissals };
      }
    }

    // Return batsman's top bowler and the dismissal count
    return {
      batsman,
      bowler: topBowler.bowler,
      dismissals: topBowler.dismissals,
    };
  });

  // Step 3: Sort the results in descending order by number of dismissals
  topDismissals.sort((a, b) => b.dismissals - a.dismissals);

  return topDismissals;
};



// Complexity:
// Time Complexity:
// O(n): The main loop over deliveriesData is O(n), where n is the number of deliveries.
// O(m): The inner loop runs for each batsman’s bowlers, where m is the average number of bowlers each batsman has faced. This is generally much smaller than n, so it can be treated as O(m) for each batsman.
// O(k log k): The final sort step where k is the number of batsmen. This is O(k log k) but will typically not be large since k is usually much smaller than n.