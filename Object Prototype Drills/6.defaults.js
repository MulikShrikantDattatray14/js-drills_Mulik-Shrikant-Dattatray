// Explanation
// The defaults function should:

// Accept two parameters:
// obj - the target object to fill with default properties.
// defaultProps - an object containing default values.
// If a property is missing or undefined in the target object, it should be assigned the corresponding value from defaultProps.
// Return the modified obj with the default values filled in.
// Constraints:
// No use of built-in methods like Object.assign.
// No external libraries.
// Only standard for loops are allowed.


function defaults(obj, defaultProps) {
    // Loop through the properties of the defaultProps object
    for (let key in defaultProps) {
      if (defaultProps.hasOwnProperty(key)) {
        // Only assign the default value if the property is missing or undefined in obj
        if (obj[key] === undefined) {
          obj[key] = defaultProps[key];
        }
      }
    }
    
    return obj;
  }
  
  // Testing the function with the provided objects
  const testObject = { name: "Bruce Wayne", age: 36 };
  const defaultProps = { age: 40, location: "Gotham", profession: "Detective" };
  
  console.log(defaults(testObject, defaultProps));
  // Expected output: { name: "Bruce Wayne", age: 36, location: "Gotham", profession: "Detective" }
  