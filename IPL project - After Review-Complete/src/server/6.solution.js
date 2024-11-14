let matchesData = require("../../src/data/matches.json");
let deliveriesData = require("../../src/data/deliveries.json");
const fs = require("fs"); // Module to read/write files
const path = require("path"); // Module to work with file paths

const outputFolder = path.join("../../src/public", "output");

// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder); // Make directory for output if it doesn't exist
}

// 6.Find a player who has won the highest number of Player of the Match awards for each seasons

exports.highestNoOfPlayerOfMatchPerSeason = function () {
  // Step 1: Aggregate the count of Player of the Match awards per season using plain objects
  const playerOfTheMatchEachSeason = {};

  matchesData.forEach((match) => {
    const { season, player_of_match } = match;

    // Initialize the season in the accumulator object if not already present
    if (playerOfTheMatchEachSeason[season] == undefined) {
      playerOfTheMatchEachSeason[season] = {};
    }

    // Initialize player if not already present for the season
    if (playerOfTheMatchEachSeason[season][player_of_match] == undefined) {
      playerOfTheMatchEachSeason[season][player_of_match] = 0;
    }

    // Increment the count for the Player of the Match
    playerOfTheMatchEachSeason[season][player_of_match]++;
  });
  console.log(playerOfTheMatchEachSeason)
  // Step 2: Find the player with the highest number of Player of the Match awards per season
  const highestPlayerOfTheMatchPerSeason = {};

  // Iterate over each season to find the top player
  for (const season in playerOfTheMatchEachSeason) {
    const playersInSeason = playerOfTheMatchEachSeason[season];
    let topPlayer = { player: "", awards: 0 };

    // Iterate over the players in the season and find the one with the most awards
    for (const player in playersInSeason) {
      const awards = playersInSeason[player];
      if (awards > topPlayer.awards) {
        topPlayer = { player, awards };
      }
    }

    // Add the top player for the season to the result
    highestPlayerOfTheMatchPerSeason[season] = topPlayer;
  }

  // Return the final result with the top player of each season
  return highestPlayerOfTheMatchPerSeason;
};

// The time complexity : (O(M + S * P))
// M is the number of matches in matchesData
// S is the number of seasons
// P is the number of players in each season
