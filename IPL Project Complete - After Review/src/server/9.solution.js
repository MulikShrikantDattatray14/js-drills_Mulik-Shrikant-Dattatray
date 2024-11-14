let matchesData = require("../../src/data/matches.json");
let deliveriesData = require("../../src/data/deliveries.json");
const fs = require("fs"); // Module to read/write files
const path = require("path"); // Module to work with file paths

const outputFolder = path.join("../../src/public", "output");

// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder); // Make directory for output if it doesn't exist
}

//9.Find the bowler with the best economy in super overs

// Helper function to calculate economy rate
function economyRate(Total_Runs_given, Total_Balls_superover) {
  let Total_Overs_Bowled = Total_Balls_superover / 6;
  return Total_Overs_Bowled === 0 ? 0 : Total_Runs_given / Total_Overs_Bowled; // Prevent division by zero
}

// Main function to find the bowler with the best economy rate in super overs
exports.BowlerBestEonomySuperOver = function () {
  // Step 1: Accumulate bowler data using reduce()
  const BestEconomySuperOver = deliveriesData.reduce((acc, delivery) => {
    const isSuperOver = Number(delivery.is_super_over);
    if (isSuperOver) {
      const bowler = delivery.bowler;
      const totalRuns = Number(delivery.total_runs);

      if (acc[bowler] == undefined) {
        acc[bowler] = {
          TotalRuns: 0,
          ballsInsuperOver: 0,
        };
      }

      acc[bowler].TotalRuns += totalRuns;
      acc[bowler].ballsInsuperOver++;
    }
    return acc;
  }, {});

  // Step 2: Calculate economy rates after accumulation
  const economyRates = Object.keys(BestEconomySuperOver).map((bowler) => {
    const { TotalRuns, ballsInsuperOver } = BestEconomySuperOver[bowler];
    const EcoRateEach = economyRate(TotalRuns, ballsInsuperOver);
    return { bowler, EcoRateEach };
  });

  // Step 3: Sort bowlers by their economy rate in ascending order (lowest economy rate first)
  economyRates.sort((a, b) => a.EcoRateEach - b.EcoRateEach);
  // console.log(economyRates);
  // Step 4: Return the bowler with the best economy rate
  if (economyRates.length > 0) {
    const topBowler = economyRates[0];
    return { [topBowler.bowler]: topBowler.EcoRateEach }; //The square brackets are used to dynamically set the property name of the object based on the value of topBowler.bowler.
  }
  return {};
};

// Time Complexity:
// O(n + m), where:
//  n is the number of deliveries in deliveriesData
// m is the number of unique bowlers
