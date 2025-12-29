const button = document.getElementById("toggleBtn");
const body = document.body;

button.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  // Update button text
  if (body.classList.contains("dark")) {
    button.textContent = "Switch to Light Mode";
  } else {
    button.textContent = "Switch to Dark Mode";
  }
});
