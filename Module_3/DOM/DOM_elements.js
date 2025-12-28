// Elements
// Append and delete elements in the DOM

// Create a new div element
const newDiv = document.createElement("div");
newDiv.id = "myNewDiv";
newDiv.className = "my-class";
newDiv.textContent = "Hello, I am a new div element!";

// Append the new div to the body
document.body.appendChild(newDiv);
console.log("New div appended:", newDiv);

// Create a new paragraph element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph inside the div.";

// Append the paragraph to the new div
newDiv.appendChild(newParagraph);
console.log("New paragraph appended to div:", newParagraph);

// Remove the paragraph after 4 seconds
setTimeout(() => {
  newDiv.removeChild(newParagraph);
  console.log("Paragraph removed from div:", newParagraph);
}, 4000);

// Remove the div after 8 seconds
setTimeout(() => {
  document.body.removeChild(newDiv);
  console.log("Div removed from body:", newDiv);
}, 8000);
// Note: The timeouts are used here to demonstrate the removal of elements after a delay.
