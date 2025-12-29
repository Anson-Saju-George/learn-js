console.log("");
console.log("DOM Manipulation Examples");

// Here we will manipulate DOM elements by changing their content, styles, and attributes.
// Using the same HTML structure as in the previous examples.
// With tagName, innerText, innerHTML, textContent, and style properties.

const head = document.getElementById("heading");
console.log("Original heading Element:", head);
console.dir(head.innerHTML);
// 3 Changing text using innerText
head.innerText = "Hello DOM Manipulated!";
console.log("Updated heading Element (innerText):", head);
console.dir(head);
