const csv = require('csvtojson');
const fs = require('fs');

// Define file paths
const file1 = 'deliveries.csv';
const file2 = 'matches.csv';

// Function to convert a CSV file to JSON
const convertCSVToJSON = (filePath) => {
  return csv().fromFile(filePath);
};

// Use Promise.all() to convert both CSV files in parallel
Promise.all([convertCSVToJSON(file1), convertCSVToJSON(file2)])
  .then(([jsonData1, jsonData2]) => {
    // jsonData1 and jsonData2 are the results for each CSV file
    console.log('First CSV Data:', jsonData1);
    console.log('Second CSV Data:', jsonData2);

    // Optionally, write the JSON data to output files
    fs.writeFileSync('deliveries.json', JSON.stringify(jsonData1, null, 2));
    fs.writeFileSync('matches.json', JSON.stringify(jsonData2, null, 2));
  })
  .catch((error) => {
    console.error('Error during CSV to JSON conversion:', error);
  });

