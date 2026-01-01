console.log("Module 6: 26 - Dealing with Promises in JavaScript");
console.log();
// There are 3 states of a Promise:
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

// There are 3 main methods to handle => Promises:
// 1. .then(): Used to handle the fulfilled state of a Promise.
// 2. .catch(): Used to handle the rejected state of a Promise.
// 3. .finally(): Used to execute code after the Promise is settled, regardless of its outcome.

// Example of creating and handling a Promise in JavaScript

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("Promise is in pending state...");

    // Simulating an asynchronous operation using setTimeout
    setTimeout(() => {
      // Simulating success or failure
      resolve("Promise resolved successfully!"); // Uncomment this line to simulate success
      // reject("Promise rejected with an error!"); // Uncomment this line to simulate failure
    }, 1000);
  });
};

let promise = getPromise();
promise
  .then((message) => {
    console.log("Success:(then)", message);
  })
  .catch((error) => {
    console.log("Error:(catch)", error);
  })
  .finally(() => {
    console.log(
      "Status:(Finally) Promise has been settled (either fulfilled or rejected)."
    );
  });
console.log(promise); // This will log a Promise in pending state
// Alternatively, using async/await syntax to handle Promises

console.log("Using async/await syntax:");
console.log(promise); // This will log a Promise in pending state
// Output will depend on whether resolve or reject is called in the getPromise function.
setTimeout(() => {
  console.log("Promise after 5 seconds:", promise);
}, 5000);

setTimeout(() => {
  console.log("Promise after 8 seconds:", promise);
  promise
    .then((value) => {
      console.log("Promise fulfilled with value:", value);
    })
    .catch((reason) => {
      console.log("Promise rejected with reason:", reason);
    });
}, 8000);
