// DOM Attributes
console.log("");
console.log("DOM Attributes Examples");
// Here we will explore how to access and modify DOM attributes using JavaScript.
// Using the new HTML structure from the previous examples.
// With getAttribute, setAttribute, and style properties.
// Attributes
// • getAttribute( attr ) Ilto get the attribute value
// setAttribute( attr, value ) Ilto set the attribute val th
// Style
// • node-style

// HTML Structure:
// <div id="new-container" class="new-container" data-info="sampleData">
//   <h1 id="new-container-heading">DOM Attributes!</h1>
//   <p id="new-container-paragraph"></p>
//   <div id="new-container-nested">
//     <span id="new-container-span">This is a span inside nested div.</span>
//   </div>
// </div>

const newContainer = document.getElementById("new-container");
const newContainerHeading = document.getElementById("new-container-heading");
const newContainerParagraph = document.getElementById("new-container-paragraph");
const newContainerNested = document.getElementById("new-container-nested");
const newContainerSpan = document.getElementById("new-container-span");

// Accessing Attributes
const containerId = newContainer.getAttribute("id");
const containerClass = newContainer.getAttribute("class");
const containerDataInfo = newContainer.getAttribute("data-info");
console.log("Container ID:", containerId);
console.log("Container Class:", containerClass);
console.log("Container Data Info:", containerDataInfo);

// Modifying Attributes
newContainer.setAttribute("data-info", "updatedData");
const updatedDataInfo = newContainer.getAttribute("data-info");
console.log("Updated Container Data Info:", updatedDataInfo);

// Styling Elements
newContainerHeading.style.color = "blue";
newContainerHeading.style.fontSize = "2em";
newContainerParagraph.style.color = "green";
newContainerParagraph.style.fontStyle = "italic";
newContainerNested.style.border = "2px solid black";
newContainerNested.style.padding = "10px";
newContainerSpan.style.backgroundColor = "yellow";
newContainerSpan.style.fontWeight = "bold";

console.log("DOM Attributes manipulation completed.");
