console.log("========== JAVASCRIPT FUNCTIONS : COMPLETE NOTES ==========\n");

/* --------------------------------------------------
1. BASIC FUNCTION DECLARATION
-------------------------------------------------- */
console.log("1. Function Declaration");

function sayHello() {
  console.log("Function sayHello() executed → Hello!");
}

sayHello();
console.log("\n");

/* --------------------------------------------------
2. FUNCTION WITH PARAMETERS
-------------------------------------------------- */
console.log("2. Function With Parameters");

function greet(name) {
  console.log("Parameter received → name =", name);
  console.log("Output → Hello, " + name);
}

greet("Anson");
console.log("\n");

/* --------------------------------------------------
3. FUNCTION WITH RETURN VALUE
-------------------------------------------------- */
console.log("3. Function With Return Value");

function add(a, b) {
  console.log("Adding a =", a, "and b =", b);
  return a + b;
}

let sum = add(10, 20);
console.log("Returned value →", sum);
console.log("\n");

/* --------------------------------------------------
4. FUNCTION EXPRESSION
-------------------------------------------------- */
console.log("4. Function Expression");

const multiply = function (x, y) {
  return x * y;
};

console.log("multiply(4, 5) →", multiply(4, 5));
console.log("\n");

/* --------------------------------------------------
5. ARROW FUNCTION
-------------------------------------------------- */
console.log("5. Arrow Function");

const subtract = (a, b) => {
  return a - b;
};

console.log("subtract(10, 3) →", subtract(10, 3));
console.log("\n");

/* --------------------------------------------------
6. SHORT ARROW FUNCTION (IMPLICIT RETURN)
-------------------------------------------------- */
console.log("6. Arrow Function (Implicit Return)");

const square = (n) => n * n;

console.log("square(6) →", square(6));
console.log("\n");

/* --------------------------------------------------
7. CALLBACK FUNCTION (IMPORTANT)
-------------------------------------------------- */
console.log("7. Callback Function");

function processUser(name, callback) {
  console.log("Processing user →", name);
  callback(name);
}

function welcome(user) {
  console.log("Welcome,", user);
}

processUser("Anson", welcome);
console.log("\n");

/* --------------------------------------------------
8. FUNCTION CALLING ANOTHER FUNCTION
-------------------------------------------------- */
console.log("8. Function Calling Another Function");

function abc() {
  console.log("abc() executed → hello");
}

function myFunc(fn) {
  console.log("myFunc received a function");
  fn(); // calling the function passed
}

myFunc(abc);
console.log("\n");

/* --------------------------------------------------
9. RETURNING A FUNCTION
-------------------------------------------------- */
console.log("9. Function Returning Another Function");

function outer() {
  return function inner() {
    console.log("Inner function executed");
  };
}

const innerFunc = outer();
innerFunc();
console.log("\n");

/* --------------------------------------------------
10. VOWEL COUNTER (FIXED VERSION)
-------------------------------------------------- */
console.log("10. Vowel Counter (Correct Logic)");

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    // ❗ for...of, NOT for...in
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const text = "Hello World";
console.log("Input String →", text);
console.log("Vowel Count →", countVowels(text));
console.log("\n");

/* --------------------------------------------------
11. ARROW FUNCTION USING OTHER FUNCTION
-------------------------------------------------- */
console.log("11. Arrow Function Using Another Function");

const vowelCounter = (str) => {
  console.log("Counting vowels in →", str);
  console.log("Result →", countVowels(str));
};

vowelCounter("JavaScript");
console.log("\n");

/* --------------------------------------------------
12. DEFAULT PARAMETERS
-------------------------------------------------- */
console.log("12. Default Parameters");

function power(base, exponent = 2) {
  return base ** exponent;
}

console.log("power(5) →", power(5));
console.log("power(5, 3) →", power(5, 3));
console.log("\n");

/* --------------------------------------------------
13. FUNCTION SCOPE
-------------------------------------------------- */
console.log("13. Function Scope");

function scopeTest() {
  let secret = "I exist only inside this function";
  console.log(secret);
}

scopeTest();
// console.log(secret); ❌ ReferenceError
console.log("\n");

/* --------------------------------------------------
14. PURE VS IMPURE FUNCTION
-------------------------------------------------- */
console.log("14. Pure vs Impure Function");

let globalCount = 0;

function impureAdd() {
  globalCount++;
}

function pureAdd(a, b) {
  return a + b;
}

impureAdd();
console.log("Impure function modified globalCount →", globalCount);
console.log("Pure function result →", pureAdd(2, 3));

console.log("\n========== END OF FUNCTIONS NOTES ==========");
