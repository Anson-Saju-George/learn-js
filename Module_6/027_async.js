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

// This is known as "Promise Handling"
console.log("Calling async function 1 has begun...");
let p1 = asyncFunc();
p1.then((value) => {
  console.log(value);
});

// This is also known as "Promise Chaining"
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
// Another way of handling Promises using async/await syntax

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Data ${dataId} fetched from server!`);
      resolve(`Data ${dataId} Resolved!`);
    }, 2000);
  });
}

setTimeout(() => {
  console.log("Async after 5 seconds:");
  getData(1).then(getData(2).then(getData(3)));
}, 5000);

setTimeout(() => {
  console.log("Async after 8 seconds:");
  getData("10").then(getData("20")).then(getData("30")).then(getData("40"));
}, 8000);


