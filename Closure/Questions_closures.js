//A closure is a function that remembers and can access variables from the scope in which it was created, even after that scope has finished executing.


function outer() {
  let name = 'Shrikant';
  return function inner() {
    console.log(name);  // inner() has access to 'name' from outer() even after outer() has finished
  };
}

let greet = outer();
greet();  // Output: 'Shrikant'

//In this example, inner()forms a closure by remembering the `name` variable from `outer()`, even though `outer()` has already finished execution.

function createCounter() {
  let count = 0;  // This variable is "closed over" by the inner functions

  return {
    increment: function() {
      count++;
      console.log(count);  // Increment count and display
    },
    decrement: function() {
      count--;
      console.log(count);  // Decrement count and display
    }
  };
}

const counter = createCounter();
counter.increment();  // Output: 1
counter.increment();  // Output: 2
counter.decrement();  // Output: 1




function counterFactory() {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
}

function limitFunctionCallCount(cb, n) {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // Returning null is acceptable if cb can't be returned
}

function cacheFunction(cb) {
  // Should return a function that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
}
