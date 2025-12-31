class ToyotaCar {
  constructor(brand) {
    console.log("New object created!");
    this.brand = brand;
  }

  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }
}

// creating objects (instances)
let fortuner = new ToyotaCar("Fortuner");
let lexus = new ToyotaCar("Lexus");

// using methods
fortuner.start(); // start
lexus.stop(); // stop
console.log("Fortuner: ",fortuner.brand); // Fortuner
console.log("Lexus: ",lexus.brand); // Lexus