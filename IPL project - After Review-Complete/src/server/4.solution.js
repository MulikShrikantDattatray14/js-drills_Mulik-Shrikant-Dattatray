let matchesData = require("../../src/data/matches.json");
let deliveriesData = require("../../src/data/deliveries.json");
const fs = require("fs"); // Module to read/write files
const path = require("path"); // Module to work with file paths

const outputFolder = path.join("../../src/public", "output");

// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder); // Make directory for output if it doesn't exist
}

//4. Top 10 economical bowlers in the year 2015

//Economy Rate= Total Runs Conceded/Total Overs Bowled

// Function to calculate Top 10 Economical Bowlers in 2015
exports.Top10EconomicalBowlersIn2015 = function () {
  // Step 1: Filter matches played in the year 2015 - for lookup
  const matches2015 = matchesData.reduce((acc, match) => {
    if (match.season === "2015") {
      acc[match.id] = match;
    }
    return acc;
  }, {});

  // Step 2: Create a map to store bowler stats (runs conceded and overs bowled)
  const bowlerStats = {};

  // Step 3: Process each delivery and calculate bowler stats
  deliveriesData.forEach((delivery) => {
    // Check if the delivery belongs to a match in 2015
    if (matches2015[delivery.match_id]) {
      const bowler = delivery.bowler;
      const runsConceded = parseInt(delivery.total_runs);

      // Parse the over and ball to calculate the exact overs bowled
      const over = parseInt(delivery.over); // Over number 
      const ball = parseInt(delivery.ball); // Ball number (used to track extras or partial overs)

      const extraBallsBowled = ball > 6 ? ball-6 : 0; // Handling for extra balls if more than 6 balls are provided in a delivery

      // Initialize bowler stats if not already done
      if (bowlerStats[bowler] == undefined) {
        bowlerStats[bowler] = {
          runsConceded: 0,
          oversBowled: new Set(),
          extraBowlsBowled: 0,
        };
      }

      // Add the runs conceded for this delivery
      bowlerStats[bowler].runsConceded += runsConceded;

      // Add the over to the Set for this bowler (Set automatically handles duplicates)
      bowlerStats[bowler].oversBowled.add(over); // Store only unique overs

      // Track extra balls if they exist
      bowlerStats[bowler].extraBowlsBowled += extraBallsBowled;
    }
  });

  // Step 4: Calculate economy rate for each bowler
  const economyRates = Object.keys(bowlerStats).map((bowler) => {
    const { runsConceded, oversBowled, extraBowlsBowled } = bowlerStats[bowler];

    // Calculate total balls bowled by the bowler
    const totalBallsBowledByBowler = oversBowled.size * 6 + extraBowlsBowled; // Number of balls bowled
    const totalOvers = totalBallsBowledByBowler / 6; // Convert balls to overs

    // Economy rate calculation (runs / overs)
    const economyRate = totalOvers > 0 ? runsConceded / totalOvers : Infinity;

    return { bowler, economyRate };
  });

  // Step 5: Sort bowlers by economy rate in ascending order and take the top 10
  const topBowlers = economyRates
    .sort((a, b) => a.economyRate - b.economyRate) // Sort by economy rate (lowest first)
    .slice(0, 10); // Take the top 10 bowlers

  // Return the top 10 economical bowlers
  return topBowlers;
};

// Example usage:
// console.log(exports.Top10EconomicalBowlersIn2015());

// Example usage:
exports.Top10EconomicalBowlersIn2015;

//Total Time Complexity: O(m + n + b log b), where m is the number of matches, n is the number of deliveries, and b is the number of bowlers.

//Total Space Complexity: O(m + b) where m is the number of matches and b is the number of bowlers.
