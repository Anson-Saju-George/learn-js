class Person {
  constructor(name) {
    this.species = "Homo sapiens";
    this.name = name;
  }

  eat() {
    console.log("eat");
  }

  sleep() {
    console.log("sleep");
  }

  work() {
    console.log("do nothing");
  }
}

class Engineer extends Person {
    constructor(name, branch){
        super(name); // Invoke parents class before using 'this' keyword in child class
        this.branch = branch;
    }
  work() {
    console.log("solve problems & builds something");
  }
}

class Doctor extends Person {
    work() {
    console.log("treat people");
  }
}


// creating objects
let p1 = new Person();
let e1 = new Engineer();

// using methods
p1.work(); // do nothing
e1.work(); // solve problems, build something
e1.eat();  // eat (inherited)
