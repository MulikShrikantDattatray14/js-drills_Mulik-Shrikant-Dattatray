/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Step 1 complete" when the first promise fulfills
    6. Have the first promise return another new Promise that will
       fulfill after 3 seconds with the message: "Step 2 Complete"

    7. Print out the message from the second promise after it
       fulfills ("Step 2 Complete")

    HINT: Use setTimeout for the delay
*/

console.log("Program started");

function problem3() {
  return new Promise((resolve, reject) => {
    console.log("Program in progress...");
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

let promise = problem3();
console.log(promise); // This will print the pending promise initially

promise
  .then(() => {
    console.log("Step 1 complete");

    // Return a new promise that will resolve after 3 seconds
    return problem3();
  })
  .then(() => {
    console.log("Step 2 complete");
    console.log("Both promises got resolved");
  })
  .catch((err) => console.log(err));
