const prompt = require("prompt-sync")();
console.log("Starting switch case example...");
console.log("Expecting 3 as input.");
console.log("Enter a value (1-4):");
const value = prompt("=> ");
console.log("Value is:", value);
switch (parseInt(value)) {
    case 1:
        console.log("1 is not cool");
        break;
    case 2:
        console.log("2 is not cool");
        break;
    case 3:
        console.log("3 is cool!");
        break;
    case 4:
        console.log("4 is not cool");
        break;
    default:
        console.log("okay");
        break;
}