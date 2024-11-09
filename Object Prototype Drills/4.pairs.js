// Explanation
// The pairs function should:

// Accept an object as a parameter.
// Convert each property of the object into an array where the first element is the key and the second element is the value.
// Return an array of these [key, value] pairs.
// Constraints:
// No use of built-in methods like Object.entries, Object.keys, or Object.values.
// No external libraries.
// Only standard for loops are allowed.


function pairs(obj) {
    const result = [];
    
    // Loop through the object's properties
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // Add each [key, value] pair to the result array
        result.push([key, obj[key]]);
      }
    }
    
    return result;
  }
  
  // Testing the function with the provided object
  const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };
  console.log(pairs(testObject)); 
  // Expected output: [["name", "Bruce Wayne"], ["age", 36], ["location", "Gotham"]]
  