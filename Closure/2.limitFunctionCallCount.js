//To implement limitFunctionCallCount, we need to return a function that can invoke the provided callback (cb) up to a certain number of times (n). After n calls, it should stop invoking the callback and return null or simply do nothing.


function limitFunctionCallCount(cb, n) {
  // Track the number of times the callback has been called
  let callCount = 0;

  // Return a function that invokes cb if the count is less than n
  return function(...args) { // Use the spread operator to capture arguments
    if (callCount < n) {
      callCount++; // Increment the call count
      return cb(...args); // Invoke the callback with the given arguments
    } else {
      return null; // Stop invoking after `n` calls
    }
  };
}
// Example callback function
function sayHello() {
  console.log("Hello Shrikant!");
}
// Testing the limitFunctionCallCount function
const limitedSayHello = limitFunctionCallCount(sayHello, 3);

limitedSayHello(); // Expected output: "Hello!"
limitedSayHello(); // Expected output: "Hello!"
limitedSayHello(); // Expected output: "Hello!"
limitedSayHello(); // Expected output: null
limitedSayHello(); // Expected output: null

