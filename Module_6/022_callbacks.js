function sum(a, b) {
  console.log("Sum:", a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(5, 10, sum); // Sum: 15

// calling calculator and passing sum as callback
calculator(1, 2, (a, b) => {
  console.log("Sum via callback w/ passed function:", a + b);
}); // output: 3
