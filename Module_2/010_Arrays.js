// Arrays in JavaScript are used to store multiple values in a single variable. They are ordered collections of items that can be of any data type, including numbers, strings, objects, and even other arrays.
// Here are some common operations you can perform with arrays in JavaScript:

// 1. Creating an Array
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

// 2. Accessing Array Elements
console.log(fruits[0]); // Output: 'Apple'
console.log(fruits[1]); // Output: 'Banana'

// 3. Adding Elements to an Array
fruits.push('Date');
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date']
fruits.unshift('Elderberry');
console.log(fruits); // Output: ['Elderberry', 'Apple', 'Banana', 'Cherry', 'Date']

// 4. Removing Elements from an Array
fruits.pop();
console.log(fruits); // Output: ['Elderberry', 'Apple', 'Banana', 'Cherry']
fruits.shift();
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

// 5. Finding the Length of an Array
console.log(fruits.length); // Output: 3

// 6. Looping Through an Array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output:
// 'Apple'
// 'Banana'
// 'Cherry'

// 7. Using Array Methods
let citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ['Banana', 'Cherry']

let index = fruits.indexOf('Banana');
console.log(index); // Output: 1
fruits.splice(index, 1);
console.log(fruits); // Output: ['Apple', 'Cherry']

// 8. Multidimensional Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // Output: 6


// 9. Reversing an Array
fruits.reverse();
console.log(fruits); // Output: ['Cherry', 'Apple']

// Removing duplicates from an array
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

// 10. Sorting an Array
fruits.sort();
console.log(fruits); // Output: ['Apple', 'Cherry']

// 11. Removing an element by value
let valueToRemove = 'Apple';
let valueIndex = fruits.indexOf(valueToRemove);
if (valueIndex !== -1) {
    fruits.splice(valueIndex, 1);
}
console.log(fruits); // Output: ['Cherry']

// 12. Removing an element by index
let indexToRemove = 0;
fruits.splice(indexToRemove, 1);
console.log(fruits); // Output: []

// 13. Merging Arrays
let vegetables = ['Carrot', 'Broccoli'];
let food = fruits.concat(vegetables);
console.log(food); // Output: ['Cherry', 'Carrot', 'Broccoli']

// 14. Finding an element
let foundFruit = food.find(item => item === 'Carrot');
console.log(foundFruit); // Output: 'Carrot'

// 15. Filtering an array
let longNamedFruits = food.filter(item => item.length > 5);
console.log(longNamedFruits); // Output: ['Broccoli']

// 16. Mapping an array
let upperCaseFruits = food.map(item => item.toUpperCase());
console.log(upperCaseFruits); // Output: ['CHERRY', 'CARROT', 'BROCCOLI']

// 17. Reducing an array
let numbersToReduce = [1, 2, 3, 4, 5];
let sum = numbersToReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15


// 18. Checking if all elements meet a condition
let allFruitsHaveE = food.every(item => item.includes('e'));
console.log(allFruitsHaveE); // Output: false

// 19. Checking if at least one element meets a condition
let someFruitsHaveO = food.some(item => item.includes('o'));
console.log(someFruitsHaveO); // Output: true

// 20. Converting an array to a string
let foodString = food.join(', ');
console.log(foodString); // Output: 'Cherry, Carrot, Broccoli'

// 21. Creating an array from a string
let stringToArray = foodString.split(', ');
console.log(stringToArray); // Output: ['Cherry', 'Carrot', 'Broccoli']

// 22. Filling an array with a static value
let filledArray = new Array(5).fill('Hello');
console.log(filledArray); // Output: ['Hello', 'Hello', 'Hello', 'Hello', 'Hello']

// 23. Finding the index of the last occurrence of an element
let lastIndex = food.lastIndexOf('Carrot');
console.log(lastIndex); // Output: 1

// 24. Creating an array from another array-like object
let arrayLike = {0: 'a', 1: 'b', 2: 'c', length: 3};
let newArray = Array.from(arrayLike);
console.log(newArray); // Output: ['a', 'b', 'c']

// 25. Flattening a nested array
let nestedArray = [1, [2, [3, 4]], 5];
let flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]

// 26. Checking if an array includes a certain element
let includesCherry = food.includes('Cherry');
console.log(includesCherry); // Output: true

// 27. Creating an array with a specific length and values
let specificArray = Array.from({length: 5}, (_, index) => index * 2);
console.log(specificArray); // Output: [0, 2, 4, 6, 8]

// 28. Finding the maximum value in an array
let maxNumber = Math.max(...numbersToReduce);
console.log(maxNumber); // Output: 5

// 29. Finding the minimum value in an array
let minNumber = Math.min(...numbersToReduce);
console.log(minNumber); // Output: 1

// 30. Shuffling an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let shuffledFood = shuffleArray([...food]);
console.log(shuffledFood); // Output: Shuffled array of food items

// 31. Creating a range of numbers
function createRange(start, end) {
    let range = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}
let numberRange = createRange(1, 10);
console.log(numberRange); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 32. Finding the average of numbers in an array
let average = numbersToReduce.reduce((acc, val) => acc + val, 0) / numbersToReduce.length;
console.log(average); // Output: 3

// 33. Creating an array of unique values from two arrays
let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
let uniqueCombined = [...new Set([...array1, ...array2])];
console.log(uniqueCombined); // Output: [1, 2, 3, 4, 5]

// 34. Finding common elements between two arrays
let commonElements = array1.filter(value => array2.includes(value));
console.log(commonElements); // Output: [3]

// 35. Creating an array of objects
let objectArray = fruits.map((fruit, index) => ({id: index + 1, name: fruit}));
console.log(objectArray);
// Output: [{id: 1, name: 'Cherry'}, {id: 2, name: 'Carrot'}, {id: 3, name: 'Broccoli'}]

// 36. Grouping array elements by a property
let groupedByLength = food.reduce((acc, item) => {
    let length = item.length;
    if (!acc[length]) {
        acc[length] = [];
    }
    acc[length].push(item);
    return acc;
}, {});
console.log(groupedByLength);
// Output: {6: ['Cherry', 'Carrot'], 8: ['Broccoli']}


// 37. Creating a frequency map of array elements
let frequencyMap = numbersToReduce.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});
console.log(frequencyMap);
// Output: {1: 1, 2: 1, 3: 1, 4: 1, 5: 1}

// 38. Zipping two arrays together
function zipArrays(arr1, arr2) {
    let zipped = [];
    let length = Math.min(arr1.length, arr2.length);
    for (let i = 0; i < length; i++) {
        zipped.push([arr1[i], arr2[i]]);
    }
    return zipped;
}

let zippedArray = zipArrays(['a', 'b', 'c'], [1, 2, 3]);
console.log(zippedArray); // Output: [['a', 1], ['b', 2], ['c', 3]]

// 39. Unzipping an array of pairs
function unzipArray(pairs) {
    let arr1 = [];
    let arr2 = [];
    for (let [first, second] of pairs) {
        arr1.push(first);
        arr2.push(second);
    }
    return [arr1, arr2];
}

// 40. Shift and Unshift Multiple Elements
function shiftMultiple(arr, count) {
    return arr.splice(0, count);
}
function unshiftMultiple(arr, elements) {
    arr.splice(0, 0, ...elements);
    return arr.length;
}
let sampleArray = [1, 2, 3, 4, 5];
let shiftedElements = shiftMultiple(sampleArray, 2);
console.log(shiftedElements); // Output: [1, 2]
let newLength = unshiftMultiple(sampleArray, [0, -1]);
console.log(sampleArray); // Output: [0, -1, 3, 4, 5]

// Arrays are versatile and powerful, making them a fundamental part of JavaScript programming.


// Demonstration of push, unshift, pop, replace, and shift methods
// Push adds an element to the end of the array
let colors = ['Red', 'Green', 'Blue'];
colors.push('Yellow');
console.log(colors); // Output: ['Red', 'Green', 'Blue', 'Yellow']
// Unshift adds an element to the beginning of the array
colors.unshift('Purple');
console.log(colors); // Output: ['Purple', 'Red', 'Green', 'Blue', 'Yellow']
// Pop removes the last element from the array
colors.pop();
console.log(colors); // Output: ['Purple', 'Red', 'Green', 'Blue']
// Replace an element at a specific index
colors[1] = 'Orange';
console.log(colors); // Output: ['Purple', 'Orange', 'Green', 'Blue']
// Shift removes the first element from the array
colors.shift();
console.log(colors); // Output: ['Orange', 'Green', 'Blue']

// This code demonstrates the basic operations that can be performed on arrays in JavaScript.
