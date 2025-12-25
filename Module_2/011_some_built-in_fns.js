console.log("Module 2 - JavaScript Arrays");

"abc".split(""); // ['a', 'b', 'c']

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);

console.log("abc".charAt(1)); // 'b'
console.log("abc".toUpperCase()); // 'ABC'

fruits.push("Date");
console.log("Pushed 'Date'", fruits);
fruits.pop();
console.log("Popped last element", fruits);
fruits.unshift("Elderberry");
console.log("Unshifted 'Elderberry'", fruits);
fruits.shift();
console.log("Shifted first element", fruits);
console.log("Length of fruits array:", fruits.length);
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit at index", i, "is", fruits[i]);
}
