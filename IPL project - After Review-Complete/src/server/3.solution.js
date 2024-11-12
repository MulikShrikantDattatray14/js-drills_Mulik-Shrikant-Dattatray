let matchesData = require("../../src/data/matches.json");
let deliveriesData = require("../../src/data/deliveries.json");
const fs = require("fs"); // Module to read/write files
const path = require("path"); // Module to work with file paths

const outputFolder = path.join("../../src/public", "output");

// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder); // Make directory for output if it doesn't exist
}

//3.Extra runs conceded per team in the year 2016 i.e "Extra runs given by each team in 2016."
// using for in loop

// why use HOF? - modern JavaScript engines are optimized for map, reduce, and filter
exports.extraRunsConcededPerTeamIn2016 = function () {
  // Step 1: Filter matches for 2016 using filter HOF-We only filter the matches once for the year 2016 using filter, which is O(n), where n is the total number of matches. This is optimal because filtering the array is necessary to narrow down the relevant matches.
  const matches2016 = matchesData.filter((match) => match.season === "2016");

  // Step 2: Create a map of deliveries by match_id using reduce HOF - We use reduce to build the deliveriesMap in a single pass, where each key is a match_id and the value is an array of deliveries for that match. This is done in O(m) time, where m is the total number of deliveries. This is an efficient solution since we are accessing deliveries using the map with constant time complexity O(1) for lookups.
  const deliveriesMap = deliveriesData.reduce((map, delivery) => {
    const matchId = delivery.match_id;
    if (map[matchId] == undefined) {
      map[matchId] = [];
    }
    map[matchId].push(delivery);
    return map;
  }, {});

  // Step 3: Calculate extra runs for each bowling team using reduce HOF-For each match, we access its deliveries in constant time O(1) using the map, and then we sum up the extra_runs in O(d), where d is the average number of deliveries per match. This is optimal because we're iterating over each delivery only once and accumulating the runs.
  const extraRunsByTeam = matches2016.reduce((acc, match) => {
    // Get deliveries for this match
    const deliveries = deliveriesMap[match.id];

    // Accumulate extra runs for each bowling team
    deliveries.forEach((delivery) => {
      const bowlingTeam = delivery.bowling_team;
      const extraRuns = Number(delivery.extra_runs);

      // Initialize if not already present, then accumulate
      if (acc[bowlingTeam] == undefined) {
        acc[bowlingTeam] = 0;
      }
      acc[bowlingTeam] += extraRuns;
    });

    return acc;
  }, {});

  // Step 4: Return the result
  return extraRunsByTeam;
};

// Example usage:
exports.extraRunsConcededPerTeamIn2016();

// Final Conclusion:
//overall time complexity is O(n + m), which is linear with respect to the number of matches and deliveries, and it is optimal.
// overall space complexity is O(m + n_2016 + t)