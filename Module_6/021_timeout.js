// Example using setTimeout
console.log("Start");
setTimeout(() => {
  console.log("This message is shown after 2 seconds");
}, 2000); // Delay for 2 seconds is implemented. It is non-blocking and runs after the main thread is free.
console.log("End");
