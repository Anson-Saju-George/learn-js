console.log("");
console.log("DOM Manipulation Examples");

// Here we will manipulate DOM elements by changing their content, styles, and attributes.
// Using the same HTML structure as in the previous examples.
// With tagName, innerText, innerHTML, textContent, and style properties.

const heading = document.getElementById("heading");
console.log("Original Heading Element:", heading);
console.dir(heading.innerHTML);
// 3 Changing text using innerText
heading.innerText = "Hello DOM Manipulated!";
console.log("Updated Heading Element (innerText):", heading);
console.dir(heading);
