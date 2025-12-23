// Comment: Added a simple console log for demonstration
// This is my first code in JavaScript module
console.log("Hello world! \nThis world is beautiful.\nLet's learn JavaScript.");
console.log("JavaScript is fun and powerful!");
const message = "Keep learning and practicing.";
console.log(message);
farewell = "Goodbye!"; // Implicit global variable
console.log(farewell);
console.log("");
let name = "Anson";
console.log("My name is " + name + ".");
let age = 21;
console.log("I am " + age + " years old.");
let isApproved = true;
console.log("Am I approved? " + isApproved);
let firstName = "Anson Saju";
let lastName = "George";
console.log("Full name: " + firstName + " " + lastName);
let selectedColor = null;
console.log("Selected color: " + selectedColor);

console.log("");

// Object
let person = {
    name: 'Anson',
    firstName: 'Anson Saju',
    lastName: 'George',
    age: 21,
    selectedColor: 'Blue'
}

console.log("Person Object:", person);
console.log("");
console.log("Name of person:", person.name);
console.log("");

// Array
let colors = ['Red', 'Green', 'Blue'];
console.log("Colors Array:", colors);
console.log("First color:", colors[0]);
console.log("Second color:", colors[1]);
console.log("Third color:", colors[2]);
console.log("Total colors:", colors.length);
console.log("");


// Function
function greet(name, lastName) {
    console.log("Hello " + name + " " + lastName + "!");
}

function square(number) {
    return number * number;
}

greet("Anson", "George");
greet(firstName, lastName);

console.log("Square of 2:", square(2));
console.log("Square of 3:", square(3));
console.log("Square of 4:", square(4));
console.log("");


// Loops to demonstrate iteration
for (let i = 1; i <= 3; i++) {
    console.log("Iteration number: " + i);
}

for (let color of colors) {
    console.log("Color: " + color);
}

Type = typeof age;
console.log("Type of age variable:", Type);
console.log(typeof person);

console.log(typeof greet);
console.log(person.age);
console.log(person.age instanceof Number);
console.log(colors instanceof Array);
console.log(farewell instanceof String);
console.log(person['firstName']);
console.log(person.firstName);
console.log(colors[1]);