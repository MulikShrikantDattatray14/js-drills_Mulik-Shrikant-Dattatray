/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 5 seconds with the
       value {data: "Hello, friend!", error: null}
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Create a first Promise chain using the promise above and
       Print out the resolved value when the first promise fulfills
    6. Have this first promise return another new Promise that will
       fulfill after 2 seconds with the message:
       "First promise chain complete!"
    7. Print out the message from the above promise after it
       fulfills ("First promise chain complete!")

    8. Create a second Promise chain using the first promise above and
       Print out the resolved value when the second promise fulfills
    9. Have this second promise return another new Promise that will
       fulfill after 10 seconds with the message:
       "Second promise chain complete!"
   10. Print out the message from the above promise after it
       fulfills ("Second promise chain complete!")

    HINT: Use setTimeout for the delay
    HINT2: This will be using the same promise two times:
           const myPromise = new Promise(...) // step 2
           myPromise.then(...).then(...) // steps 5-7
           myPromise.then(...).then(...) // steps 8-10

    BONUS: WHY does it work this way?
*/


console.log("Program started");

function problem5a(delay, value) {
  return new Promise((resolve, reject) => {
    console.log("Program in progress...");  // Log when promise is pending
    setTimeout(() => {
      resolve(value); // Resolving with the passed value after `delay` time
    }, delay);
  });
}

function problem5b(delay, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value); // Resolving with the passed value after `delay` time
    }, delay);
  });
}

// Step 3: Log out promise while it's pending
console.log('Initial promise pending...');

// Step 2: Create the initial promise (resolves in 5 seconds with a specific value)
const myPromise = problem5a(5000, { data: "Hello, friend!", error: null });
console.log(myPromise)
// **First Promise Chain:**
myPromise
  .then((data) => {
    // Step 5: Log resolved value from the first promise
    console.log(data);
    return problem5b(2000, "First promise chain complete!"); // Return another promise after 2s
  })
  .then((data) => {
    // Step 7: Log resolved value from the second promise in the first chain
    console.log(data);
  })
  .catch((err) => {
    console.log("Error in first chain:", err);
  });

// **Second Promise Chain:**
myPromise
  .then((data) => {
    // Step 8: Log resolved value from the first promise again (in second chain)
    console.log(data);
    return problem5b(10000, "Second promise chain complete!"); // Return another promise after 10s
  })
  .then((data) => {
    // Step 10: Log resolved value from the second promise in the second chain
    console.log(data);
  })
  .catch((err) => {
    console.log("Error in second chain:", err);
  });
