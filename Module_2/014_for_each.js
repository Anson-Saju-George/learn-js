console.log("========== forEach() : COMPLETE NOTES ==========\n");

/* --------------------------------------------------
1. WHAT forEach IS
-------------------------------------------------- */
console.log("1. What is forEach()?");

console.log("forEach() executes a function once for EACH element in an array.");
console.log(
  "It does NOT return a new array. Return value is always undefined.\n"
);

/* --------------------------------------------------
2. BASIC forEach
-------------------------------------------------- */
console.log("2. Basic forEach");

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
  console.log("Current value:", num);
});

console.log("\n");

/* --------------------------------------------------
3. forEach WITH ARROW FUNCTION
-------------------------------------------------- */
console.log("3. forEach with Arrow Function");

numbers.forEach((num) => {
  console.log("Number * 2 =", num * 2);
});

console.log("\n");

/* --------------------------------------------------
4. forEach PARAMETERS (value, index, array)
-------------------------------------------------- */
console.log("4. forEach Parameters");

numbers.forEach((value, index, array) => {
  console.log("Value:", value, "| Index:", index, "| Array:", array);
});

console.log("\n");

/* --------------------------------------------------
5. forEach DOES NOT RETURN
-------------------------------------------------- */
console.log("5. forEach Return Value");

const result = numbers.forEach((num) => num * 2);

console.log("Returned value from forEach →", result); // undefined
console.log("Original array unchanged →", numbers);
console.log("\n");

/* --------------------------------------------------
6. MODIFYING ARRAY USING forEach
-------------------------------------------------- */
console.log("6. Modifying Array Using forEach");

const nums = [10, 20, 30];

nums.forEach((value, index, arr) => {
  arr[index] = value * 3;
});

console.log("Modified array →", nums);
console.log("\n");

/* --------------------------------------------------
7. forEach VS map (IMPORTANT DIFFERENCE)
-------------------------------------------------- */
console.log("7. forEach vs map");

const mapped = numbers.map((num) => num * 2);

console.log("map() result →", mapped);
console.log("forEach() returns nothing → undefined");
console.log("\n");

/* --------------------------------------------------
8. forEach WITH STRINGS (COMMON TRAP)
-------------------------------------------------- */
console.log("8. forEach with Strings");

const name = "Anson";

// ❌ This will NOT work
// name.forEach(...)

// ✅ Convert to array first
[...name].forEach((char) => {
  console.log("Character:", char);
});

console.log("\n");

/* --------------------------------------------------
9. forEach WITH OBJECTS
-------------------------------------------------- */
console.log("9. forEach with Objects");

// Objects are NOT iterable with forEach
const user = {
  name: "Anson",
  age: 21,
  role: "Developer",
};

Object.entries(user).forEach(([key, value]) => {
  console.log(key, "→", value);
});

console.log("\n");

/* --------------------------------------------------
10. BREAK & CONTINUE (IMPOSSIBLE)
-------------------------------------------------- */
console.log("10. break / continue in forEach");

console.log("You CANNOT use break or continue inside forEach.");

console.log("Use for...of or normal for loop if you need control flow.\n");

/* --------------------------------------------------
11. forEach WITH FUNCTIONS (CALLBACK CONCEPT)
-------------------------------------------------- */
console.log("11. forEach as Callback Example");

function process(num) {
  console.log("Processing:", num);
}

numbers.forEach(process);

console.log("\n");

/* --------------------------------------------------
12. forEach REAL-WORLD EXAMPLES
-------------------------------------------------- */
console.log("12. Real-World Examples");

// Example 1: Sum values
let sum = 0;
numbers.forEach((num) => (sum += num));
console.log("Sum of numbers →", sum);

// Example 2: Count vowels
const text = "Hello World";
let vowelCount = 0;
const vowels = "aeiouAEIOU";

[...text].forEach((char) => {
  if (vowels.includes(char)) vowelCount++;
});

console.log("Vowel count →", vowelCount);

console.log("\n========== END OF forEach NOTES ==========");
