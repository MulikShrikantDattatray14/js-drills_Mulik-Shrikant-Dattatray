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

fs.writeFileSync(
    path.join(outputFolder, "8.HIghestDismissalBatsmenByBowler"),
    JSON.stringify(highestDismissal, null, 4)
  );