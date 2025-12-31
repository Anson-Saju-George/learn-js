let variable = "Module 6: 20";
export default variable;

console.log("Module 6: 20 - Asynchronous JavaScript");
// Asynchronous JavaScript allows non-blocking operations
// Common asynchronous operations include:
// - setTimeout and setInterval
// - Promises
// - async/await
// - AJAX calls (fetch API)

// Example using setTimeout
console.log("Start");
setTimeout(() => {
  console.log("This message is shown after 2 seconds");
}, 2000); // Delay for 2 seconds is implemented. It is non-blocking and runs after the main thread is free.
console.log("End");

// Example using Callbacks
function sum(a, b) {
    console.log("Sum:", a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(5, 10, sum); // Sum: 15

