console.log("Module 6: 25 - Promises in JavaScript");
// Promises are a modern way to handle asynchronous operations in JavaScript
// They help avoid "callback hell" and make code more readable
// A Promise represents a value that may be available now, later, or never
// A Promise can be in one of three states: pending, fulfilled, or rejected

// It has 2 handlers: resolve (for success) and reject (for failure)
// resolve: called when the async operation is successful
// reject: called when the async operation fails

// Creating a Promise
let state = true; // change to false to test rejection
let promise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation using setTimeout
  setTimeout(() => {
    if (state) {
      resolve("Success!"); // indicate success
    } else {
      reject("Error!"); // indicate failure
    }
  }, 2000);
});
// Consuming a Promise
promise.then(
  (value) => {
    // on success
    console.log("Promise resolved with value:", value);
  },
  (error) => {
    // on failure
    console.log("Promise rejected with error:", error);
  }
);

// Creating a function that returns a Promise
function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    // simulate async work (2 seconds)
    setTimeout(() => {
      console.log("data", dataId);
      if (getNextData) {
        getNextData();
      }
      resolve("SUCCESS!"); // indicate success - resolve(dataId); would also work
    }, 1000);
  });
}

console.log("End of Module 6: 25");
// Promise has 3 states: pending, fulfilled, rejected

// Promise objects has 3 main methods: then, catch, finally
// then: to handle success
// catch: to handle failure
// finally: to execute code regardless of the outcome

// In console use the following to test the function:
// > result = getData(123);
// > result // returns a Promise object
