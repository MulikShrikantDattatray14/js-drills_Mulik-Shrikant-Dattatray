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

const BestEconomySuperOver = {};


for (const key in deliveriesData) {
  let each = deliveriesData[key];
  let IssuperOver = Number(each.is_super_over);

  if (IssuperOver) {
    let TotalRuns = each.total_runs;
    let bowler = each.bowler;

   
    if (BestEconomySuperOver[bowler] == undefined) {
      BestEconomySuperOver[bowler] = { TotalRuns: TotalRuns }; 
    }
  }
}
console.log(BestEconomySuperOver);
const sortedData = Object.entries(BestEconomySuperOver)
  .sort((a, b) => parseInt(a[1].TotalRuns) - parseInt(b[1].TotalRuns)).slice(0, 3)  // Sort based on TotalRuns
  .map(([name, stats]) => ({ name, ...stats })); 

console.log(sortedData);

fs.writeFileSync(
  path.join(outputFolder, "9.BowlerBestEonomySuperOver"),
  JSON.stringify(sortedData, null, 4)
);
