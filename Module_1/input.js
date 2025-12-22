const prompt = require("prompt-sync")();

const NAME = prompt("What is your name? ");
console.log("Hello, " + NAME + "!");
console.log('This program takes in a name via console input and greets the user using prompt-sync library.');
console.log('Make sure to install prompt-sync using "npm install prompt-sync" before running this code.');
console.log('This demonstrates how to use external libraries in Node.js for handling user input.');
console.log('You can run this code in a Node.js environment.');
console.log(' ')
console.log(' ')
console.log(`Welcome to the JavaScript world.`);
console.log(`This is a test function defined below that shows variable hoisting in JavaScript`);
console.log(`Pay attention to how 'var' and 'let' behave differently inside the function.`);
console.log(`'var' declarations are hoisted and initialized with undefined, while 'let' declarations are hoisted but not initialized.`);
console.log(`Trying to access 'y' (declared with let) before its initialization will throw a ReferenceError.`);
console.log(`Let's call the test() function and observe the output:`);
console.log(`You will see that accessing 'x' before its declaration gives 'undefined',`);
console.log(`but accessing 'y' before its declaration throws an error.`);
console.log(`This demonstrates the difference between variable hoisting for 'var' and 'let'.`);

function test() {
    console.log("This is inside test function");
    console.log(x);
    try {
        console.log(y);
    } catch (error) {
        console.log("Error occurred: " + error.message);
    }
    var x = "test";
    let y = "test";
    console.log(x);
    console.log(y);
}
test();