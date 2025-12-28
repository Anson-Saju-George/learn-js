// Elements
// Append and delete elements in the DOM

// Create a new div element
const newDiv = document.createElement("div");
newDiv.id = "myNewDiv";
newDiv.className = "my-class";
newDiv.textContent = "Hello, I am a new div element!";
newDiv.style.border = "2px solid black";
newDiv.style.padding = "10px";
newDiv.style.margin = "10px";
newDiv.style.color = "green";

// Append the new div to the body
document.body.appendChild(newDiv);
console.log("New div appended:", newDiv);

// Create a new paragraph element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph inside the div.";
newParagraph.style.color = "blue";

// Append the paragraph to the new div
newDiv.appendChild(newParagraph);
console.log("New paragraph appended to div:", newParagraph);

// Remove the paragraph after 8 seconds
setTimeout(() => {
  newDiv.removeChild(newParagraph);
  console.log("Paragraph removed from div:", newParagraph);
}, 8000);

// Remove the div after 4 seconds
setTimeout(() => {
  document.body.removeChild(newDiv);
  console.log("Div removed from body:", newDiv);
}, 4000);
// Note: The timeouts are used here to demonstrate the removal of elements after a delay.
// In a real application, you might remove elements based on user actions or other events.
// Now a button to add and remove elements dynamically
const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle New Div";
toggleButton.style.marginTop = "20px";
toggleButton.style.textAlign = "center";
// center the button
toggleButton.style.display = "block";
toggleButton.style.marginLeft = "auto";
toggleButton.style.marginRight = "auto";
toggleButton.style.marginBottom = "20px";

document.body.appendChild(toggleButton);
let isDivAdded = false;

toggleButton.addEventListener("click", () => {
  if (!isDivAdded) {
    document.body.appendChild(newDiv);
    isDivAdded = true;
    console.log("New div added to body via button.");
  } else {
    document.body.removeChild(newDiv);
    isDivAdded = false;
    console.log("New div removed from body via button.");
  }
});

// This code demonstrates how to create, append, and remove DOM elements dynamically using JavaScript.

// Now let implement node.append(), node.prepend() node.before() and node.after()

const anotherDiv = document.createElement("div");
anotherDiv.id = "anotherDiv";
anotherDiv.className = "another-class";
anotherDiv.textContent = "I am another div element!";
anotherDiv.style.border = "2px dashed red";
anotherDiv.style.padding = "10px";
anotherDiv.style.margin = "10px";
anotherDiv.style.color = "purple";

// Append the anotherDiv to the body
document.body.appendChild(anotherDiv);
console.log("Another div appended:", anotherDiv);
// Use prepend to add a new paragraph at the beginning of anotherDiv
const prependedParagraph = document.createElement("p");
prependedParagraph.textContent = "This paragraph is prepended to anotherDiv.";
prependedParagraph.style.color = "orange";
anotherDiv.prepend(prependedParagraph);
console.log("Prepended paragraph to anotherDiv:", prependedParagraph);
// Use before to add a new paragraph before anotherDiv
const beforeParagraph = document.createElement("p");
beforeParagraph.textContent = "This paragraph is added before anotherDiv.";
beforeParagraph.style.color = "brown";
anotherDiv.before(beforeParagraph);
console.log("Paragraph added before anotherDiv:", beforeParagraph);
// Use after to add a new paragraph after anotherDiv
const afterParagraph = document.createElement("p");
afterParagraph.textContent = "This paragraph is added after anotherDiv.";
afterParagraph.style.color = "pink";
anotherDiv.after(afterParagraph);
console.log("Paragraph added after anotherDiv:", afterParagraph);
// Use append to add a new paragraph at the end of anotherDiv
const appendedParagraph = document.createElement("p");
appendedParagraph.textContent = "This paragraph is appended to anotherDiv.";
appendedParagraph.style.color = "cyan";
anotherDiv.append(appendedParagraph);
console.log("Appended paragraph to anotherDiv:", appendedParagraph);
// This code demonstrates the use of node.append(), node.prepend(), node.before(), and node.after() methods to manipulate DOM elements.
// Style the new div element
newDiv.style.border = "2px solid black";
newDiv.style.padding = "10px";
newDiv.style.margin = "10px";
newDiv.style.color = "green";
// Style the another div element
anotherDiv.style.border = "2px dashed red";
anotherDiv.style.padding = "10px";
anotherDiv.style.margin = "10px";
anotherDiv.style.color = "purple";
// Create a new paragraph element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph inside the div.";
newParagraph.style.color = "blue";
// Append the paragraph to the new div
newDiv.append(newParagraph);
console.log("Appended new paragraph to newDiv:", newParagraph);
// Remove the paragraph after 8 seconds
// setTimeout(() => {
//   newDiv.removeChild(newParagraph);
//   console.log("Paragraph removed from div:", newParagraph);
// }, 8000);

// Few more are element.cloneNode() and node.replaceChild() and node.remove()
