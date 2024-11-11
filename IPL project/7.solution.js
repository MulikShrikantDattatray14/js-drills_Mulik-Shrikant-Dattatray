let matchesData = require("./matches.json");
let deliveriesData = require("./deliveries.json");
const fs = require("fs"); // Module to read/write files
const path = require("path"); // Module to work with file paths
//7.Find the strike rate of a batsman for each season

const outputFolder = path.join(__dirname, "output");

// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder); // Make directory for output if it doesn't exist
}

//Strike Rate=( Total Runs Scored/Balls Faced)*100;
function BatsmenStrikeRate(Total_Runs_Scored, Balls_Faced) {
  let StrikeRate = parseFloat(Total_Runs_Scored / Balls_Faced) * 100;
  return StrikeRate;
}
let strikeRateEachSeason = {};

for (const key in matchesData) {
  let each = matchesData[key];
  let matchId = each.id;
  let season = each.season;

  for (const ele in deliveriesData) {
    let every = deliveriesData[ele];
    let matchDelId = every.match_id;

    if (matchDelId == matchId) {
      let batsmanRuns = Number(every.batsman_runs);
      let batsman = every.batsman;
      let ball = every.ball;
     
      if (strikeRateEachSeason[season] == undefined) {
        strikeRateEachSeason[season] = {}; 
      }

      
      if (strikeRateEachSeason[season][batsman] == undefined) {
        strikeRateEachSeason[season][batsman] = {
          runs: 0,
          nthballs: [],
          totalBallFaced: 0,
          StrikeRateEach: 0,
        };
      }

      strikeRateEachSeason[season][batsman].runs =
        strikeRateEachSeason[season][batsman].runs + batsmanRuns;
      strikeRateEachSeason[season][batsman].nthballs.push(ball);
      strikeRateEachSeason[season][batsman].totalBallFaced =
        strikeRateEachSeason[season][batsman].nthballs.length;

      strikeRateEachSeason[season][batsman].StrikeRateEach = BatsmenStrikeRate(
        strikeRateEachSeason[season][batsman].runs,
        strikeRateEachSeason[season][batsman].totalBallFaced
      );
    }
  }
}




fs.writeFileSync(
  path.join(outputFolder, "7.batsmanStrikeRatePerSeason"),
  JSON.stringify(strikeRateEachSeason, null, 4)
);

