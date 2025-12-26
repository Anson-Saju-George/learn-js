let arr = [5, 6, 2, 1, 101, 3];

const output = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});

console.log("The maximum value in the array is:", output);


let arr2 = [88, 90, 78, 99, 65, 77];

let target = arr2.filter((value) => {
    return value > 80;
});

console.log("Values greater than 80 are:", target);