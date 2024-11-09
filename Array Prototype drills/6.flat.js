const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'
const nestedArray1 = [
  [1],
  [[[[[[3], [3]]]]]],
  [[[[[[[[[[[[[[[45]]]]]]]]]]]]]]],
];


// What .flat() Does?
// Flattens a nested array (removes one level of nesting).
// Recursively flattens nested arrays if the depth is specified (default depth is 1).
// Returns a new array with all elements flattened.
// Does not modify the original array (creates a shallow copy).
// Can flatten arrays to any depth if specified using the depth parameter.

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap the elements at the left and right pointers
    [arr[left], arr[right]] = [arr[right], arr[left]];

    // Move the pointers towards the center
    left++;
    right--;
  }
  return arr;
}

function flatten(elements) {
  const stack = [...elements]; // Copy the original array into a stack
  const result = [];

  while (stack.length > 0) {
    const item = stack.pop(); // Get the last item

    if (Array.isArray(item)) {
      // If it's an array, push its elements back into the stack
      // note :
      //The spreading (...) operation is the key reason why the brackets around the elements decrease with each iteration in the stack-based solution.
      stack.push(...item);
    } else {
      // If it's not an array, add it to the result
      result.push(item);
    }
  }

  // Reverse to restore the original order
  let orginalorder = reverseArray(result);
  return orginalorder;
}

// Test the function

let answer = flatten(nestedArray);
console.log(answer);
// Output: [1, 2, 3, 4]

let answer1 = flatten(nestedArray1);
console.log(answer1);
// Output:[ 1, 3, 3, 45 ]
