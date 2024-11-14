// Use `require()` to import modules in CommonJS
const { matchesPerYearAllSeasons } = require("../server/1.solution.js");
const { matchesWonPerTeamPerYear } = require("../server/2.solution.js");
const { extraRunsConcededPerTeamIn2016 } = require("../server/3.solution.js");
const { Top10EconomicalBowlersIn2015 } = require("../server/4.solution.js");
const { wonTossWonMatch } = require("../server/5.solution.js");
const { highestNoOfPlayerOfMatchPerSeason } = require("../server/6.solution.js");
const { batsmanStrikeRatePerSeason } = require("../server/7.solution.js");
const { HIghestDismissalBatsmenByBowler } = require("../server/8.solution.js");
const { BowlerBestEonomySuperOver } = require("../server/9.solution.js");
const fs = require("fs"); // Module to read/write files
const path = require("path"); // Module to work with file paths
// If you want to import a JSON file (e.g., `matches.json`), use require:
//const matches = require('../data/matches.json');  // This works directly without import assertions


//__dirname is a Node.js global variable that provides the absolute path of the directory where the current script is located.

const outputFolder = path.join('../../src/public', 'output');
// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder); // Make directory for output if it doesn't exist
}



let matchesMap = matchesPerYearAllSeasons();
fs.writeFileSync(
  path.join(outputFolder, "1.matchesPerYearAllSeasons.json"),
  JSON.stringify(matchesMap, null, 4)
);

let matchesWonPerTeam = matchesWonPerTeamPerYear();
fs.writeFileSync(
  path.join(outputFolder, "2.matchesWonPerTeamPerYear.json"),
  JSON.stringify(matchesWonPerTeam, null, 4)
);

let matchesIn2016 = extraRunsConcededPerTeamIn2016();

fs.writeFileSync(
  path.join(outputFolder, "3.extraRunsConcededPerTeamIn2016.json"),
  JSON.stringify(matchesIn2016, null, 4)
);

let top10Bowlers = Top10EconomicalBowlersIn2015();
fs.writeFileSync(
  path.join(outputFolder, "4.Top10EconomicalBowlersIn2015.json"),
  JSON.stringify(top10Bowlers, null, 4)
);

let tossMatchWon = wonTossWonMatch();
fs.writeFileSync(
  path.join(outputFolder, "5.wonTossWonMatch.json"),
  JSON.stringify(tossMatchWon, null, 4)
);

let highestPlayerOfTheMatchPerSeason = highestNoOfPlayerOfMatchPerSeason();
fs.writeFileSync(
  path.join(outputFolder, "6.highestNoOfPlayerOfMatchPerSeason.json"),
  JSON.stringify(highestPlayerOfTheMatchPerSeason, null, 4)
);

let strikeRateEachSeason = batsmanStrikeRatePerSeason();
fs.writeFileSync(
  path.join(outputFolder, "7.batsmanStrikeRatePerSeason.json"),
  JSON.stringify(strikeRateEachSeason, null, 4)
);

let sortedTopDismissals = HIghestDismissalBatsmenByBowler();
//console.log(sortedTopDismissals);
fs.writeFileSync(
  path.join(outputFolder, "8.HIghestDismissalBatsmenByBowler.json"),
  JSON.stringify(sortedTopDismissals, null, 4)
);

let TopBowlerInSuperOver = BowlerBestEonomySuperOver();

fs.writeFileSync(
  path.join(outputFolder, "9.BowlerBestEonomySuperOver.json"),
  JSON.stringify(TopBowlerInSuperOver, null, 4)
);
