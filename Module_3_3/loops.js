// for loop
for (let i = 0; i < 3; i++) {
    console.log('for loop:', i);
}

// while loop
let j = 0;
while (j < 3) {
    console.log('while loop:', j);
    j++;
}

// do...while loop
let k = 0;
do {
    console.log('do...while loop:', k);
    k++;
} while (k < 3);

// for...of loop
const nums = [10, 20, 30];
for (const num of nums) {
    console.log('for...of loop:', num);
}

// for...in loop
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log('for...in loop:', key, obj[key]);
    }
}

// Array forEach loop
nums.forEach((num, idx) => {
    console.log('forEach loop:', idx, num);
});

// Array map
nums.map((num, idx) => {
    console.log('map:', idx, num);
    return num * 2;
});

// Array filter
nums.filter((num, idx) => {
    console.log('filter:', idx, num);
    return num > 15;
});

// Array reduce
nums.reduce((acc, num, idx) => {
    console.log('reduce:', idx, num, acc);
    return acc + num;
}, 0);

// Object.keys with forEach
Object.keys(obj).forEach(key => {
    console.log('Object.keys forEach:', key, obj[key]);
});

// Object.values with forEach
Object.values(obj).forEach(value => {
    console.log('Object.values forEach:', value);
});

// Object.entries with forEach
Object.entries(obj).forEach(([key, value]) => {
    console.log('Object.entries forEach:', key, value);
});

// Array using for loop with entries()
const arr = [1, 2, 3, 4];
for (let [i, value] of arr.entries()) {
    console.log('for loop with entries:', i, value);
}
for (let [i, value] of arr.entries()) {
    console.log(i, value);
}





