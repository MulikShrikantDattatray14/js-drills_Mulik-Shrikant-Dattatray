let matchesData = require("./matches.json");
let deliveriesData = require("./deliveries.json");
const fs = require("fs"); // Module to read/write files
const path = require("path"); // Module to work with file paths

const outputFolder = path.join(__dirname, "output");

// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder); // Make directory for output if it doesn't exist
}

//4. Top 10 economical bowlers in the year 2015

//Economy Rate= Total Runs Conceded/Total Overs Bowled

function economyRate(Total_Runs_given, Total_Overs_Bowled) {
  let EcoRate = Total_Runs_given / Total_Overs_Bowled;
  return Number(EcoRate);
}
let bowlerRuns = {};

for (const key in matchesData) {
  let each = matchesData[key];
  let year = each.season;

  if (year == "2015") {
    let id2015 = each.id;

    for (const ele in deliveriesData) {
      let eachDeliveryDetails = deliveriesData[ele];
      let matchId = eachDeliveryDetails.match_id;

      if (id2015 == matchId) {
        let bowler = eachDeliveryDetails.bowler;
        let runs = Number(eachDeliveryDetails.total_runs);
        let over = Number(eachDeliveryDetails.over);
        // console.log(bowler, runs, over);

        if (bowlerRuns[bowler] == undefined) {
          bowlerRuns[bowler] = {
            runs_given: 0,
            eachOvers: new Set(),
            totalOvers: 0,
            economyRateeach: 0,
          }; // Initialize if not present
        }

        bowlerRuns[bowler].runs_given += runs; // Add runs to the existing runs_given
        bowlerRuns[bowler].eachOvers.add(over);
        bowlerRuns[bowler].totalOvers = bowlerRuns[bowler].eachOvers.size;
        bowlerRuns[bowler].economyRateeach = economyRate(
          bowlerRuns[bowler].runs_given,
          bowlerRuns[bowler].totalOvers
        );
      }
    }
  }
}
//console.log(bowlerRuns);
const sortedData = Object.entries(bowlerRuns)
  .sort((a, b) => a[1].economyRateeach - b[1].economyRateeach)
  .map(([name, economyRateeach]) => ({ name, ...economyRateeach }));

const top10Bowlers = sortedData.slice(0, 10).map((bowler) => ({
  name: bowler.name,
  economyRateeach: bowler.economyRateeach,
}));

console.log(top10Bowlers);


fs.writeFileSync(
  path.join(outputFolder, "4.Top10EconomicalBowlersIn2015"),
  JSON.stringify(top10Bowlers, null, 4)
);
