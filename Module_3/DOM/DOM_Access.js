// We can accesss and manipulate DOM elements using various methods provided by the Document Object Model (DOM) API.
// Here are some common ways to select and manipulate DOM elements:
// 1. Selecting elements by ID
// 2. Selecting elements by class name
// 3. Selecting elements by tag name
// 4. Using query selectors
// 5. Creating and appending new elements
// 6. Modifying element attributes and styles
// 7. Removing elements

// 1. Selecting elements by ID
const elementById = document.getElementById("heading");
console.log(elementById);
console.dir(elementById);

// 2. Selecting elements by class name
const elementsByClassName = document.getElementsByClassName("subheading");
console.log(elementsByClassName);
console.dir(elementsByClassName);

// 3. Selecting elements by tag name
const elementsByTagName = document.getElementsByTagName("p");
console.log(elementsByTagName);
console.dir(elementsByTagName);