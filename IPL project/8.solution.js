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
    // Ensure there's an object to hold the match count for each year
    if (highestDismissal[batsmen] == undefined) {
      highestDismissal[batsmen] = {}; // Initialize the year in matchesWonPerTeam if not already
    }

    // If the winning team does not exist in the current year's object, initialize with 0 wins
    if (highestDismissal[batsmen][bowler] == undefined) {
      highestDismissal[batsmen][bowler] = 0;
    }

    // Increment the win count for the winning team for this year
    highestDismissal[batsmen][bowler]++;
  }
}
//console.log(highestDismissal);
fs.writeFileSync(
    path.join(outputFolder, "8.HIghestDismissalBatsmenByBowler"),
    JSON.stringify(highestDismissal, null, 4)
  );