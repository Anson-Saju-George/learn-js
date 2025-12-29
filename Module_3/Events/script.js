let btn1 = document.getElementById("event-button");

btn1.onclick = () => {
  console.log("Button clicked!");
  let a = 0;
  a++;
  console.log("Button was clicked:", a, "time(s)");
};

let div = document.querySelector("div");
div.onmouseover = () => {
  console.log("Mouse over the div!");
}

btn2 = document.getElementById("event-button-2");
btn2.addEventListener("click", (e) => {
    console.log("Button 2 clicked!", e);
});