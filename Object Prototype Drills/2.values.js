// Explanation :
// The values function should extract all the values of an object's own properties and return them as an array. We should:

// Ignore functions (i.e., only include non-function properties).
// Not use any built-in methods like Object.values.
// Only use a simple for loop.
// Constraints:
// No built-in Object methods (like Object.values).
// No external libraries.
// Only standard for loops allowed (no for...in, for...of, etc.).



function values(obj) {
    const result = [];
    
    // Loop through the object's properties
    for (let key in obj) {
        //When extracting values from an object, sometimes the object might contain methods (i.e., properties that are functions).
      if (obj.hasOwnProperty(key) && typeof obj[key] !== 'function') {
        result.push(obj[key]);
      }
    }
    
    return result;
  }
  
  // Testing the function with the provided object
  const testObject = { 
    name: "Bruce Wayne", 
    age: 36, 
    location: "Gotham", 
    greet: function() { return "Hello!"; }
  };
  
  console.log(values(testObject)); 
  // Expected output: ["Bruce Wayne", 36, "Gotham"]
  