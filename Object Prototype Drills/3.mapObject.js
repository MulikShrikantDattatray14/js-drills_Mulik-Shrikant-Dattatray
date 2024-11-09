// Explanation
// The mapObject function should:

// Accept an object and a callback function as parameters.
// Apply the callback function to each value of the object's properties.
// Return a new object with the transformed values while keeping the original keys.
// Constraints:
// No use of built-in methods like Object.keys, Object.values, etc.
// No use of external libraries.
// Only standard for loops are allowed.

function mapObject(obj, cb) {
  const result = {};

  // Loop through the object's properties
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Apply the callback function to the value and store it in the new object

      result[key] = cb(obj[key], key, obj);
      console.log(result);
    }
  }

  return result;
}

const cb = function (value, key, obj) {
  if (typeof value === "string") return value + "!";
  if (typeof value === "number") return value * 2;
  return value;
};

// Testing the function with the provided object
const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

// Example callback: Append "!" to each string value, double the numbers
const transformed = mapObject(testObject, cb);

console.log(transformed);
// Expected output: { name: "Bruce Wayne!", age: 72, location: "Gotham!" }
