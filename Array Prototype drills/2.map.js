const items = [1, 2, 3, 4, 5, 5];
const items2=[2,2,2,2,2];
let items3=[3,3,3,3]
// What .map() Does?:
// Iterates over each element in an array.
// Transforms each element using the provided function.
// Returns a new array with the transformed elements.
// Does not modify the original array.
// Can be used to chain further operations since it returns an array.

function cube(num) {
  return num * num * num;
}


function map(elements, cb) {
  let newArray = [];// new array
  for (let i = 0; i < elements.length; i++) {
    let num = elements[i]; // iterate over each element
    let value = cb(num); //Transforms each element using the provided function.
    newArray.push(value); // creates a new array -Does not modify the original array.
  }
  return (newArray); //Can be used to chain further operations since it returns an array.
}

let answer = map(items, cube);
console.log(answer) // [ 1, 8, 27, 64, 125, 125 ]


let answer2 = map(items2, cube);
console.log(answer2) // [ 8, 8, 8, 8, 8 ]

let answer3= map(items3, cube);
console.log(answer3) // [ 27, 27, 27, 27 ]