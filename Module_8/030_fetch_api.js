const URL = "https://jsonplaceholder.typicode.com/posts/1";

console.log("Before fetch call");
fetch(URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data fetched successfully:", data);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  })
  .finally(() => {
    console.log("Fetch operation completed");
  });

console.log("After fetch call");
