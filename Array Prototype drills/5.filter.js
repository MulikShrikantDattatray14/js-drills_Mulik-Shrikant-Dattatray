const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.
const items2 = [1, 2, 20, 15, 234];
const items3 = [123, 345, 345, 12, 123, 23, 2, 34];

// What .filter() Does?
// Iterates over each element in an array.
// Filters elements based on a condition provided in the callback function.
// Returns a new array containing only the elements that satisfy the condition.
// Does not modify the original array.
// If no elements match, it returns an empty array.

function filterout(items) {
  let newArray = [];//Does not modify the original array.
  for (let i = 0; i < items.length; i++) {
    if (items[i] <= 18) {
      // Returns a new array containing only the elements that satisfy the condition.
      // Does not modify the original array.
      newArray.push(items[i]);
    }
  }

  return newArray; //// If no elements match, it returns an empty array.
}

function filter(elements, cb) {
  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test

  let ele = cb(elements);
  return ele;
}

let answer = filter(items, filterout);
console.log(answer); //[ 1, 2, 3, 4, 5, 5 ]

let answer2 = filter(items2, filterout);
console.log(answer2); //[ 1, 2, 15 ]

let answer3 = filter(items3, filterout);
console.log(answer3); //[ 12, 2 ]
