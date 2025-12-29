// DOM Navigation and Hierarchy
// The Document Object Model (DOM) represents the structure of an HTML document as a tree of nodes.
// Each node corresponds to an element, attribute, or piece of text in the document.
// Understanding the hierarchy and relationships between these nodes is crucial for effective DOM manipulation.

console.log("");
console.log("DOM Hierarchy Examples");
// Example HTML structure:
// <div id="container">
//   <h1 id="heading">Hello World</h1>
//   <p class="subheading">Welcome to the DOM tutorial.</p>
//   <p class="subheading">Let's learn about DOM hierarchy.</p>
// <div class="content">
//   <p>This is some content inside a div.</p>
// </div>
// </div>
// This is a demonstration of navigating the DOM hierarchy by accessing parent, child, first, last, and sibling nodes.
const container = document.getElementById("container");
console.log("Container Element:", container);
console.dir(container);

// Accessing child nodes
const childNodes = container.childNodes;
console.log("Child Nodes of Container:", childNodes);
console.dir(childNodes);

// Accessing first and last child
const firstChild = container.firstChild;
console.log("First Child of Container:", firstChild);
console.dir(firstChild);
const lastChild = container.lastChild;
console.log("Last Child of Container:", lastChild);
console.dir(lastChild);

// Accessing parent node
const title = document.getElementById("heading");
const parentOfHeading = title.parentNode;
console.log("Parent of Heading:", parentOfHeading);
console.dir(parentOfHeading);

// Accessing sibling nodes
const firstParagraph = document.querySelector("p.subheading");
const nextSibling = firstParagraph.nextSibling;
console.log("Next Sibling of First Paragraph:", nextSibling);
console.dir(nextSibling);
const previousSibling = firstParagraph.previousSibling;
console.log("Previous Sibling of First Paragraph:", previousSibling);
console.dir(previousSibling);
console.log("");
