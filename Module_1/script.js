// This is a simple JavaScript line that logs a message to the console.
console.log("Hello, World!");

console.error("This is an error message.");

console.warn("This is a warning message.");

console.info("This is an informational message.");

console.debug("This is a debug message.");

console.trace("This is a trace message.");

console.assert(false, "This is an assertion message.");
console.assert(true, "This is an assertion message.");

console.table([{name: "Alice", age: 30}, {name: "Bob", age: 25}]);

console.time("Timer");
for (let i = 0; i < 10000000; i++) {
    // Simulating a time-consuming task
    let temp = i * i;
}
console.timeEnd("Timer");

console.group("Grouped Messages");
console.log("This is a message inside the group.");
console.log("Another message inside the group.");
console.groupEnd();
