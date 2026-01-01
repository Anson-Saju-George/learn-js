console.log("Module 6: 27 - Async/Await Example");

// Async/Await is syntactic sugar built on top of Promises
// It allows writing asynchronous code in a more synchronous fashion
// An async function always returns a Promise

// Example of an async programming using async/await

let count = 1;
function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Some data ${count} fetched from server!`);
      resolve(`Async Function ${count} Resolved!`);
      count++;
    }, 2000);
  });
}

console.log("Calling async function 1 has begun...");
let p1 = asyncFunc();
p1.then((value) => {
  console.log(value);
});

console.log("Calling async function 2 has begun...");
let p2 = asyncFunc();
p2.then((value) => {
  console.log(value);
  console.log("Calling async function 3 has begun...");
  let p3 = asyncFunc();
  p3.then((value) => {
    console.log(value);
  });
});
