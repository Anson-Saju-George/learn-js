/* =========================================================
   ANONYMOUS FUNCTIONS & CALLBACKS — COMPLETE NOTES
   Language : JavaScript
   Purpose  : Learn how functions are used as values
========================================================= */

console.log("========== ANONYMOUS FUNCTIONS & CALLBACKS ==========\n");

/* ---------------------------------------------------------
1. ANONYMOUS FUNCTION
---------------------------------------------------------
An anonymous function is a function WITHOUT a name.
It cannot exist alone — it must be:
- assigned to a variable
- passed as an argument
--------------------------------------------------------- */

const greet = function () {
  console.log("Hello from an anonymous function");
};

greet(); // calling the function
console.log("\n");

/* ---------------------------------------------------------
2. FUNCTION EXPRESSION VS FUNCTION DECLARATION
--------------------------------------------------------- */

// Function Declaration (named)
function sayHi() {
  console.log("Hi from function declaration");
}

// Function Expression (anonymous)
const sayHello = function () {
  console.log("Hello from function expression");
};

sayHi();
sayHello();
console.log("\n");

/* ---------------------------------------------------------
3. FUNCTIONS AS VALUES
---------------------------------------------------------
In JavaScript, functions are FIRST-CLASS citizens.
They can be:
- stored in variables
- passed as arguments
- returned from other functions
--------------------------------------------------------- */

const print = function (msg) {
  console.log("Message:", msg);
};

print("Functions are values");
console.log("\n");

/* ---------------------------------------------------------
4. CALLBACK FUNCTION (CORE CONCEPT)
---------------------------------------------------------
A callback is a function passed into another function
and executed LATER.
--------------------------------------------------------- */

function processUser(name, callback) {
  console.log("Processing user:", name);
  callback(); // executing the callback
}

processUser("Anson", function () {
  console.log("Welcome callback executed");
});
console.log("\n");

/* ---------------------------------------------------------
5. CALLBACK WITH DATA
---------------------------------------------------------
Callbacks can receive data from the parent function.
--------------------------------------------------------- */

function add(a, b, callback) {
  const result = a + b;
  callback(result);
}

add(10, 20, function (sum) {
  console.log("Sum received from callback:", sum);
});
console.log("\n");

/* ---------------------------------------------------------
6. ARROW FUNCTIONS (MODERN ANONYMOUS FUNCTIONS)
--------------------------------------------------------- */

const multiply = (a, b) => {
  return a * b;
};

console.log("Multiply result:", multiply(4, 5));
console.log("\n");

/* ---------------------------------------------------------
7. ARROW FUNCTION AS CALLBACK
--------------------------------------------------------- */

[1, 2, 3].forEach((num) => {
  console.log("Number from forEach callback:", num);
});
console.log("\n");

/* ---------------------------------------------------------
8. CALLBACK VS RETURN
---------------------------------------------------------
Return → immediate result
Callback → delayed / controlled execution
--------------------------------------------------------- */

function squareReturn(n) {
  return n * n;
}

function squareCallback(n, callback) {
  callback(n * n);
}

console.log("Return value:", squareReturn(5));

squareCallback(5, function (value) {
  console.log("Callback value:", value);
});
console.log("\n");

/* ---------------------------------------------------------
9. PASSING FUNCTION REFERENCE (IMPORTANT)
--------------------------------------------------------- */

function sayDone() {
  console.log("Done!");
}

// ❌ WRONG: sayDone()
// ✅ RIGHT: sayDone

setTimeout(sayDone, 1000);
console.log("Waiting 1 second...\n");

/* ---------------------------------------------------------
10. ANONYMOUS CALLBACK WITH setTimeout
--------------------------------------------------------- */

setTimeout(function () {
  console.log("Executed after 2 seconds (anonymous callback)");
}, 2000);

/* ---------------------------------------------------------
11. CALLBACK HELL (WHY PROMISES EXIST)
--------------------------------------------------------- */

function task1(cb) {
  setTimeout(() => {
    console.log("Task 1 done");
    cb();
  }, 500);
}

function task2(cb) {
  setTimeout(() => {
    console.log("Task 2 done");
    cb();
  }, 500);
}

function task3(cb) {
  setTimeout(() => {
    console.log("Task 3 done");
    cb();
  }, 500);
}

task1(function () {
  task2(function () {
    task3(function () {
      console.log("Callback hell example complete");
    });
  });
});

/* ---------------------------------------------------------
12. WHEN TO USE ANONYMOUS vs NAMED FUNCTIONS
---------------------------------------------------------
Anonymous → one-time use
Named     → reusable logic
--------------------------------------------------------- */

function reusableLogger(msg) {
  console.log("Reusable:", msg);
}

reusableLogger("Named function example");

console.log("\n========== END OF NOTES ==========");
