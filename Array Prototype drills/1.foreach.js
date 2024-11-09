const items = [1, 2, 3, 4, 5, 5];
const items2=[2,2,2,2,2];
 const items3=[3,3,3,3]

// What .forEach() Does?:
// 1. Iterates over each element in an array.
// 2. Executes a provided function for each element.
// 3. Cannot stop or break the loop (unlike for loops).
// 4. Does not return a new array (always returns undefined).
// 5. Can modify the original array if elements are updated within the loop.

function square(num) {
  return num * num;
}



function each(elements, cb) {
  for (let i = 0; i < elements.length; i++) {
    let num = elements[i];
    elements[i] = cb(num);
  }
  return elements;
}


let answer=each(items, square)
console.log(answer)//[ 1, 4, 9, 16, 25, 25 ]


let answer2=each(items2, square)
console.log(answer2)//[ 4, 4, 4, 4, 4 ]

let answer3=each(items3, square)
console.log(answer3)//[ 9, 9, 9, 9 ]