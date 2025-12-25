function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let idx in str) {
        if (vowels.indexOf(str[idx]) != -1) {
            count++;
        }
    }
    return count;
}

const greet = (name) => console.log("Hello, " + name + "!");

const counterForVowels = (str) => {
    let vowelCount = countVowels(str);
    console.log("Number of vowels in '" + str + "':", vowelCount);
    // return vowelCount; // Uncommenting this line will return the count or else its undefined
}

console.log("Module 2 - JavaScript Functions");
console.log(countVowels("Hello World")); // 3
x = counterForVowels("Hello World");
console.log(x); // undefined
console.log(countVowels("JavaScript Functions")); // 6
greet("Alice"); // Hello, Alice!
