let person = {
    name: 'Anson Saju George',
    age: 21,
    isAdult: true,
    favouriteColor: 'blue',
    selectedColor: null,
    undefinedVariable: undefined
};

let newPerson = new Object();
let anotherPerson = {};
let personCopy = Object.assign({}, person);

console.log("Name: " + person.name);
console.log("Age: " + person.age);
console.log("Is adult: " + person.isAdult);
console.log("Favourite color: " + person.favouriteColor);
console.log("Selected color: " + person.selectedColor);
console.log("Undefined variable: " + person.undefinedVariable);

person.nullVariable = null;
person['age'] = 22;
console.log("Updated Age: " + person.age);

let selectedColors = ['red', 'green', 'blue'];
console.log("Selected Colors: " + selectedColors);
console.log(selectedColors);
console.log("Selected color: " + selectedColors[0]);
console.log("Selected color by the person: " + person.selectedColor);
selectedColors[1] = 5;
console.log("Updated Selected Colors: " + selectedColors);
console.log(selectedColors.push("yellow"));
console.log("Final Selected Colors: " + selectedColors.length);
console.log("Updated Selected Colors: " + selectedColors);
