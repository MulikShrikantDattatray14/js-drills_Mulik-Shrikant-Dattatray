/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
       and rejects after 2 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Program complete" if the promise fulfills
    6. Print out "Program failure" if the promise rejects

    HINT: Use setTimeout for the delay
*/

console.log("Program started");

function problem2(input) {
  return new Promise((resolve, reject) => {
    // Delay resolution or rejection
    if (input) {
      // Reject after 2 seconds
      console.log("Program in progress...");
      setTimeout(() => {
        reject("Program failure");
      }, 2000);
    } else {
      // Resolve after 3 seconds
      console.log("Program in progress...");
      setTimeout(() => {
        resolve("Program complete");
      }, 3000);
    }
  });
}

let input = true; // Set to false to test the resolve scenario
let promise = problem2(input);

// Log the promise object itself while it is pending
console.log(promise);

promise
  .then((data) => console.log(data)) // Output on resolution
  .catch((err) => console.log(err)); // Output on rejection
