function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Anson Saju George");
greet("Alice");
greet("Bob");
greet("Charlie");
greet(101);
greet(true);
greet(null);
greet(undefined);
greet({ key: "value" });
greet([1, 2, 3]);

function add(a, b) {
    return a + b;
}

console.log(add(5, 10));
console.log(add("Hello, ", "World!"));
console.log(add([1, 2], [3, 4]));
console.log(add([1, 2," "], [3, 4]));
console.log(add([1, 2,""], [3, 4]));



