let matchesData = require("../../src/data/matches.json");
let deliveriesData = require("../../src/data/deliveries.json");
const fs = require("fs"); // Module to read/write files
const path = require("path"); // Module to work with file paths
//7.Find the strike rate of a batsman for each season

const outputFolder = path.join("../../src/public", "output");

// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder); // Make directory for output if it doesn't exist
}

// 7.Find the strike rate of a batsman for each season

// Helper function to calculate strike rate
function BatsmenStrikeRate(Total_Runs_Scored, Balls_Faced) {
  return Balls_Faced === 0 ? 0 : (Total_Runs_Scored / Balls_Faced) * 100;
}

exports.batsmanStrikeRatePerSeason = function () {
  // Initialize an accumulator for the results
  const strikeRateEachSeason = {};

  // Preprocess deliveries into a map by match_id for faster lookup
  const deliveriesByMatchId = deliveriesData.reduce((acc, delivery) => {
    if (acc[delivery.match_id] == undefined) {
      acc[delivery.match_id] = [];
    }
    acc[delivery.match_id].push(delivery);
    return acc;
  }, {});

  // Iterate over each match in matchesData
  matchesData.forEach((match) => {
    const { id: matchId, season } = match;

    // Only process if deliveries are available for this match
    const deliveries = deliveriesByMatchId[matchId];
    if (deliveries) {
      // Initialize the season object if not present
      if (strikeRateEachSeason[season] == undefined) {
        strikeRateEachSeason[season] = {};
      }

      // Iterate over all deliveries of the current match
      deliveries.forEach((delivery) => {
        const {
          batsman_runs: runs,
          batsman,
          wide_runs,
          noball_runs,
        } = delivery;

        // Initialize batsman data if not present
        if (strikeRateEachSeason[season][batsman]==undefined) {
          strikeRateEachSeason[season][batsman] = { runs: 0, ballsFaced: 0 };
        }

        // Add runs for batsman
        strikeRateEachSeason[season][batsman].runs += Number(runs);

        // Increment balls faced only if it's not a wide or no-ball
        if (wide_runs === "0" && noball_runs === "0") {
          strikeRateEachSeason[season][batsman].ballsFaced += 1;
        }
      });
    }
  });

  // Calculate strike rate for each batsman in each season
  for (let season in strikeRateEachSeason) {
    for (let batsman in strikeRateEachSeason[season]) {
      const { runs, ballsFaced } = strikeRateEachSeason[season][batsman];
      strikeRateEachSeason[season][batsman].StrikeRateEach = BatsmenStrikeRate(
        runs,
        ballsFaced
      );
    }
  }

  return strikeRateEachSeason;
};

// Time Complexity: O(M + N + S * B).

// M is the number of matches.
// N is the number of deliveries.
// S is the number of seasons.
// B is the number of batsmen.

