// Object definition in JavaScript
const obj = {
    name: "Jay",
    age: 30,
    occupation: "Developer",
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
        return "Hello";
    },
    career: {}
}
obj.career.title = "Software Engineer";
console.log(obj.career);
delete obj.career;

console.log(Object.values(obj));
console.log(Object.keys(obj));

console.log(obj.name); // Accessing property
console.log(obj.age); // Accessing property
console.log(obj.occupation); // Accessing property
console.log(obj.sayHello()); // Calling method


for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`);
    }
}

