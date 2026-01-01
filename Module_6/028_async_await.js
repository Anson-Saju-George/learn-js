async function getData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data received:", data);
      resolve();
    }, 2000);
  });
}

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("API call completed!");
      resolve(200);
    }, 2000);
  });
}

// Using async-await to handle asynchronous operations sequentially
async function getWeatherData() {
  console.log("Fetching weather data...");
  conso9le.log("Getting data 1 from API");
  await getData("Weather 1");
  console.log("Getting data 2 from API");
  await getData("Weather 2");
  console.log("Getting data 3 from API");
  await getData("Weather 3");
  console.log("All weather data fetched!");
}

getWeatherData();
