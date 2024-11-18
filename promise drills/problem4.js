/*
    1. Create a Promise that resolves with the number 10 after
       3 seconds
    2. Create another Promise that resolves with the number
       20 after 5 seconds

    How can we log out the sum (30) of these two resolved values
    once, after BOTH promises successfully fulfill?

    HINT: Use Google/Documentation to help find an answer
    HINT2: You can Google for something like:
           "resolve 2 promises at the same time javascript"
*/


function problem4a() {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve(10); // Resolving with the number 10 after 3 seconds
     }, 3000);
   });
 }
 
 function problem4b() {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve(20); // Resolving with the number 20 after 5 seconds
     }, 5000);
   });
 }
 
 let promise1 = problem4a();
 let promise2 = problem4b();
 
 Promise.all([promise1, promise2])
   .then((data) => {
     let result = data.reduce((acc, item) => acc + item, 0); // Accumulate the values and sum them
     console.log(result); // Output: 30
   })
   .catch((err) => console.log(err));
 