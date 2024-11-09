const items = [1, 2, 3, 4, 5, 5];
const items2 = [1, 1, 1, 1, 1, 1];
let items3 = [2, 2, 2, 2, 2, 2];

// What .reduce() Does?
// Iterates over each element in an array.
// Accumulates a single value based on the logic provided in the callback function.
// Returns that accumulated value after completing the loop.
// Does not create a new array, but instead reduces the array to a single value (number, string, object, etc.).
// The initial value of the accumulator can be specified (optional).

function sum(items, startingValue) {
  let count = 0;
  count = count + startingValue;
  for (let i = 1; i < items.length; i++) {
    count = count + items[i];
  }
  return count;
}

function reduce(elements, sum, startingValue) {
  let total = sum(elements, startingValue);
  return total;
}
let answer = reduce(items, sum, items[0]);
console.log(answer); //20

let answer1 = reduce(items2, sum, items2[0]);
console.log(answer1); //6

let answer3 = reduce(items3, sum, items3[0]);
console.log(answer3); //12
