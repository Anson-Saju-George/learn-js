const URL = "https://catfact.ninja/fact";
const factPara = document.getElementById("fact");
const btn = document.getElementById("fetchFact");

const getFacts = async () => {
  console.log("getting data .....");
  let response = await fetch(URL);
  console.log(response); // JSON format
  let data = await response.json();
  factPara.innerText = data.fact;
};
btn.addEventListener("click", getFacts);
