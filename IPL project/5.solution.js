let matchesData = require("./matches.json");
let deliveriesData = require("./deliveries.json");
const fs = require("fs"); // Module to read/write files
const path = require("path"); // Module to work with file paths

const outputFolder = path.join(__dirname, "output");

// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder); // Make directory for output if it doesn't exist
}

//5. Find the number of times each team won the toss and also won the match

let tossMatchWon = {};

for (const key in matchesData) {
  let each = matchesData[key];
  if (each.toss_winner === each.winner) {

    if(tossMatchWon[each.toss_winner]==undefined){
        tossMatchWon[each.toss_winner]=0;
    }
    tossMatchWon[each.toss_winner]=tossMatchWon[each.toss_winner]+1;
  }
}
console.log(tossMatchWon)

fs.writeFileSync(
  path.join(outputFolder, "5.wonTossWonMatch"),
  JSON.stringify(tossMatchWon, null, 4)
);
