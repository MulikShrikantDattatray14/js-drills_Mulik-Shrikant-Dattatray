let matchesData = require("../../src/data/matches.json");
let deliveriesData = require("../../src/data/deliveries.json");
const fs = require("fs"); // Module to read/write files
const path = require("path"); // Module to work with file paths

//1. Number of matches played per year for all the years in IPL.

exports.matchesPerYearAllSeasons = function () {
  //Object.values(array) on an array will return the array's elements (which are the objects themselves in your case).
  //reduce() iterate over each match object in matchesData.
  return Object.values(matchesData).reduce((matchesMap, match) => {
    const year = match.season;

    // Initialize year if not already present in the accumulator
    if (matchesMap[year] == undefined) {
      matchesMap[year] = 0;
    }

    // Increment the count of matches for the current year
    matchesMap[year] += 1;

    return matchesMap;
  }, {}); // Initialize the accumulator as an empty object
};

//Time Complexity: O(n), where n is the number of match objects in matchesData.
//Space Complexity: O(n + k), where n is the number of match objects, and k is the number of unique years in the data.
