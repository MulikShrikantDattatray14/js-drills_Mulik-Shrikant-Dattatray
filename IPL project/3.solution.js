let matchesData = require("./matches.json");
let deliveriesData = require("./deliveries.json");
const fs = require("fs"); // Module to read/write files
const path = require("path"); // Module to work with file paths

const outputFolder = path.join(__dirname, "output");

// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder); // Make directory for output if it doesn't exist
}

//3.Extra runs conceded per team in the year 2016 i.e "Extra runs given by each team in 2016."
// using for in loop
let matchesIn2016 = {}; // This should be initialized outside the loop

for (const key in matchesData) {
  let each = matchesData[key];

  let year = each.season;

  if (year == "2016") {
    let id2016 = each.id;

    for (const ele in deliveriesData) {
      let eachDeliveryDetails = deliveriesData[ele];
      let matchId = eachDeliveryDetails.match_id;

      if (id2016 == matchId) {
        let bowlingTeam = eachDeliveryDetails.bowling_team;

        if (matchesIn2016[bowlingTeam] == undefined) {
          matchesIn2016[bowlingTeam] = 0;
        }
        matchesIn2016[bowlingTeam] =
          matchesIn2016[bowlingTeam] +
          parseInt(eachDeliveryDetails.extra_runs, 10);
      }
    }
  }
}
console.log(matchesIn2016);



fs.writeFileSync(
  path.join(outputFolder, "3.extraRunsConcededPerTeamIn2016"),
  JSON.stringify(matchesIn2016, null, 4)
);



// 3. Extra runs conceded per team in the year 2016 i.e "Extra runs given by each team in 2016."
// using for of loop
// let matchesIn2016 = {}; // This should be initialized outside the loop

// for (const match of matchesData) {
//   // Iterate over the matchesData array
//   let year = match.season;

//   if (year == "2016") {
//     let matchId = match.id;

//     for (const delivery of deliveriesData) {
//       // Iterate over the deliveriesData array
//       let matchIdFromDelivery = delivery.match_id;

//       if (matchId === matchIdFromDelivery) {
//         // console.log(matchId, matchIdFromDelivery);
//         let bowlingTeam = delivery.bowling_team;

//         // Initialize the team if it doesn't exist in the object
//         if (matchesIn2016[bowlingTeam] === undefined) {
//           matchesIn2016[bowlingTeam] = 0;
//         }

//         // Add extra runs to the team's count
//         matchesIn2016[bowlingTeam] =
//           matchesIn2016[bowlingTeam] + delivery.extra_runs;
//       }
//     }
//   }
// }

// Uncomment to check the result
// console.log(matchesIn2016);
