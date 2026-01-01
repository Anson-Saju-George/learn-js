console.log("Module 6: 26 - Dealing with Promises in JavaScript");
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
        // resolve("Promise resolved successfully!"); // Uncomment this line to simulate success
        reject("Promise rejected with an error!"); // Uncomment this line to simulate failure
    });
};

let promise = getPromise();
promise.then((message) => {
    console.log("Success:", message);
}).catch((error) => {
    console.log("Error:", error);
}).finally(() => {
    console.log("Promise has been settled (either fulfilled or rejected).");
});

// Output will depend on whether resolve or reject is called in the getPromise function.