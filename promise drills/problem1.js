/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    5. Print out "Program complete" when the promise completes after 3 seconds

    HINT: Use setTimeout for the delay
*/


console.log("Program started"); // Print "Program started"

function problem1() {
  return new Promise((resolve, reject) => {
    // This will log "Program in progress..." after 3 seconds
    setTimeout(() => {
      console.log("Program in progress...");
      resolve("Program complete"); // Resolve after 3 seconds
    }, 3000);
  });
}

const promise = problem1(); // Call problem1() once and store the Promise

console.log(promise); // Log the Promise object while it's pending

promise
  .then((data) => {
    console.log(data); // This will print "Program complete" after the promise resolves
  })
  .catch((err) => {
    console.log(err); // Handle any potential errors
  });
