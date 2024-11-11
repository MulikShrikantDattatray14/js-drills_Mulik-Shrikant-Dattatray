let matchesData = require("./matches.json");
let deliveriesData = require("./deliveries.json");
const fs = require("fs"); // Module to read/write files
const path = require("path"); // Module to work with file paths

//9.Find the bowler with the best economy in super overs

const outputFolder = path.join(__dirname, "output");

// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder); // Make directory for output if it doesn't exist
}
function economyRate(Total_Runs_given, Total_Balls_superover) {
 let Total_Overs_Bowled= Total_Balls_superover/6

  let EcoRate = Total_Runs_given / Total_Overs_Bowled;
  return Number(EcoRate);
}
const BestEconomySuperOver = {};

for (const key in deliveriesData) {
  let each = deliveriesData[key];
  let IssuperOver = Number(each.is_super_over);

  if (IssuperOver) {
    let TotalRuns = Number(each.total_runs);
    let bowler = each.bowler;

    if (BestEconomySuperOver[bowler] == undefined) {
      BestEconomySuperOver[bowler] = { TotalRuns: 0, ballsInsuperOver: 0,EcoRateEach:0 };
    }
    BestEconomySuperOver[bowler].TotalRuns =
      BestEconomySuperOver[bowler].TotalRuns + TotalRuns;

    BestEconomySuperOver[bowler].ballsInsuperOver++;
    BestEconomySuperOver[bowler].EcoRateEach=economyRate(BestEconomySuperOver[bowler].TotalRuns,BestEconomySuperOver[bowler].ballsInsuperOver)
  }
}
//console.log(BestEconomySuperOver);
// Step 1: Convert object to an array of key-value pairs
const entries = Object.entries(BestEconomySuperOver);

// Step 2: Sort the array based on EcoRateEach
entries.sort((a, b) => a[1].EcoRateEach - b[1].EcoRateEach);

// Step 3: Convert the sorted array back into an object and get the top one
const TopBowlerInSuperOver = Object.fromEntries(entries.slice(0,1));

//console.log(TopBowlerInSuperOver);


fs.writeFileSync(
  path.join(outputFolder, "9.BowlerBestEonomySuperOver"),
  JSON.stringify(TopBowlerInSuperOver, null, 4)
);
