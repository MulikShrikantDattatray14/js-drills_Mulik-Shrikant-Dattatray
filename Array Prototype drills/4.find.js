const items = [1, 2, 3, 4, 5, 5];
const items2 = [12, 18, 19, 20];
const items3 = [200, 340, 3, 245];
const items4 = [200, 340, 300, 245];
// What .find() Does?
// Iterates over each element in an array.
// Finds the first element that satisfies a given condition.
// Returns that element as soon as the condition is met.
// Returns undefined if no element satisfies the condition.
// Stops immediately when it finds the first match (more efficient than methods like .filter() for a single result).

function search(elements) {
  for (let i = 0; i < elements.length; i++) {//// Iterates over each element in an array.
    if (elements[i] <= 18) {
      //// If `cb` returns `true` then return that element.
      // Finds the first element that satisfies a given condition.
      // Returns that element as soon as the condition is met.
      return elements[i];
    }
  }
  return undefined; //// Return `undefined` if no elements pass the truth test.
}

function find(elements, cb) {
  let ele = cb(elements);
  return ele;
}

let answer = find(items, search);
console.log(answer); //1

let answer2 = find(items2, search);
console.log(answer2); //12

let answer3 = find(items3, search);
console.log(answer3); //3


let answer4 = find(items4, search);
console.log(answer4); //undefined