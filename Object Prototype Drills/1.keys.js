// Explanation :
// The keys function is meant to extract all the property names (keys) of the given object and return them as an array of strings.

// Constraints:
// No built-in Object methods (like Object.keys).
// No external libraries.
// Only for loops are allowed (no for...in, for...of, or other loops).

function keys(obj) {
    const result = [];
    
    // Loop through the object's properties using a standard for loop
    for (let key in obj) {
        
      if (obj.hasOwnProperty(key)) {
        result.push(key);
      }
    }
    
    return result;
  }
  
  // Testing the function with the provided object
  const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };
  console.log(keys(testObject)); 
  // Expected output: ["name", "age", "location"]
  