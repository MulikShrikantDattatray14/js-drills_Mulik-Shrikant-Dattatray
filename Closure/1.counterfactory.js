// To implement the counterFactory function, you need to create an object with two methods, increment and decrement, which will manipulate a counter variable. This counter variable should be enclosed in the closure so that it is accessible and updated only through these methods.





function counterFactory() {
  // Declare a counter variable in closure scope
  let counter = 0;

  // Return an object with two methods: increment and decrement
  return {
    increment: function() {
      counter++;
      return counter;
    },
    decrement: function() {
      counter--;
      return counter;
    }
  };
}


const counter = counterFactory();
console.log(counter.increment()); // Expected output: 1
console.log(counter.increment()); // Expected output: 2
console.log(counter.decrement()); // Expected output: 1
console.log(counter.decrement()); // Expected output: 0
console.log(counter.increment()); // Expected output: 1
console.log(counter.increment()); // Expected output: 2

