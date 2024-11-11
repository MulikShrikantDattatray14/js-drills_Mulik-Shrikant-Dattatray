let matchesData = require("./matches.json");
let deliveriesData = require("./deliveries.json");
const fs = require("fs"); // Module to read/write files
const path = require("path"); // Module to work with file paths

//Find the highest number of times one player has been dismissed by another player

const outputFolder = path.join(__dirname, "output");
const highestDismissal = {};
// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder); // Make directory for output if it doesn't exist
}

for (const key in deliveriesData) {
  let each = deliveriesData[key];
  let dismissed = each.dismissal_kind;
  let batsmen = each.batsman;
  let bowler = each.bowler;
  if (dismissed !== "") {
    if (highestDismissal[batsmen] == undefined) {
      highestDismissal[batsmen] = {};
    }

    if (highestDismissal[batsmen][bowler] == undefined) {
      highestDismissal[batsmen][bowler] = 0;
    }

    highestDismissal[batsmen][bowler]++;
  }
}
//console.log(highestDismissal);

// Step 2: Find the bowler who dismissed each batsman the most times
const topDismissals = {};
for (const batsman in highestDismissal) {
  let bowlers = highestDismissal[batsman];
  let maxDismissals = 0;
  let topBowler = "";

  for (const bowler in bowlers) {
    if (bowlers[bowler] > maxDismissals) {
      maxDismissals = bowlers[bowler];
      topBowler = bowler;
    }
  }

  // Store the result
  topDismissals[batsman] = {
    Bowler: topBowler,
    Dismissals: maxDismissals,
  };
}


//console.log(topDismissals);
const sortedTopDismissals = Object.entries(topDismissals)
  .sort((a, b) => b[1].Dismissals - a[1].Dismissals) // Sort in descending order by dismissals
  


//console.log(sortedTopDismissals);
fs.writeFileSync(
  path.join(outputFolder, "8.HIghestDismissalBatsmenByBowler"),
  JSON.stringify(sortedTopDismissals, null, 4)
);
