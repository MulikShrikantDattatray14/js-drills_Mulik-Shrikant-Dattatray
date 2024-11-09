// Explanation
// The invert function should:

// Accept an object as a parameter.
// Return a new object where keys have become values and values have become keys.
// Assume that all values in the object are unique and serializable to strings (meaning they can safely be used as keys).
// Constraints:
// No use of built-in methods like Object.entries, Object.keys, or Object.values.
// No external libraries.
// Only standard for loops are allowed.

function invert(obj) {
    const result = {};
    
    // Loop through the object's properties
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // Assign the value as the key and the key as the value in the new object
        result[obj[key]] = key;
      }
    }
    
    return result;
  }
  
  // Testing the function with the provided object
  const testObject = { name: "Bruce Wayne", age: "36", location: "Gotham" };
  console.log(invert(testObject)); 
  // Expected output: { "Bruce Wayne": "name", "36": "age", "Gotham": "location" }
  