//To implement cacheFunction, we need to create a function that invokes the provided callback (cb) and caches the results for each unique set of arguments. If the function is invoked again with the same arguments, it should return the cached result instead of invoking the callback again.

function cacheFunction(cb) {
  const cache = {}; // Cache to store results

  return function(...args) {
    const key = JSON.stringify(args); // Create a JSON string key from arguments

    // Check if the result for these arguments is already cached
    if (cache[key] !== undefined) {
      console.log("Returning cached result");
      return cache[key]; // Return cached result if it exists
    } else {
      console.log("Calculating...");
      const result = cb(...args); // Call the function if no cached result
      cache[key] = result; // Store the result in the cache
      return result;
    }
  };
}

// Example callback function
function add(a, b) {
  return a + b;
}

// Create a cached version of the add function
const cachedAdd = cacheFunction(add);

console.log(cachedAdd(2, 3)); // Expected output: "Calculating..." then 5
console.log(cachedAdd(2, 3)); // Expected output: "Returning cached result" then 5
console.log(cachedAdd(4, 5)); // Expected output: "Calculating..." then 9
console.log(cachedAdd(2, 3)); // Expected output: "Returning cached result" then 5


