let matchesData = require("./matches.json");
let deliveriesData = require("./deliveries.json");
const fs = require("fs"); // Module to read/write files
const path = require("path"); // Module to work with file paths

const outputFolder = path.join(__dirname, "output");

// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder); // Make directory for output if it doesn't exist
}

//Find a player who has won the highest number of Player of the Match awards for each seasons

let playerOfTheMatchEachSeason = {};

for (const key in matchesData) {
  let season = matchesData[key].season;
  let playerOfMatch = matchesData[key].player_of_match;

  // Ensure there's an object to hold the match count for each year
  if (playerOfTheMatchEachSeason[season] == undefined) {
    playerOfTheMatchEachSeason[season] = {}; // Initialize the year in matchesWonPerTeam if not already
  }

  // If the winning team does not exist in the current year's object, initialize with 0 wins
  if (playerOfTheMatchEachSeason[season][playerOfMatch] == undefined) {
    playerOfTheMatchEachSeason[season][playerOfMatch] = 0;
  }

  // Increment the win count for the winning team for this year
  playerOfTheMatchEachSeason[season][playerOfMatch]++;
}
// Find the player with the highest awards for each season
let highestPlayerOfTheMatchPerSeason = {};

for (const season in playerOfTheMatchEachSeason) {
  let maxAwards = 0;
  let topPlayer = "";

  for (const player in playerOfTheMatchEachSeason[season]) {
    let awards = playerOfTheMatchEachSeason[season][player];
    if (awards > maxAwards) {
      maxAwards = awards;
      topPlayer = player;
    }
  }

  highestPlayerOfTheMatchPerSeason[season] = {
    player: topPlayer,
    awards: maxAwards,
  };
}

console.log(highestPlayerOfTheMatchPerSeason);


fs.writeFileSync(
  path.join(outputFolder, "6.highestNoOfPlayerOfMatchPerSeason"),
  JSON.stringify(highestPlayerOfTheMatchPerSeason, null, 4)
);
