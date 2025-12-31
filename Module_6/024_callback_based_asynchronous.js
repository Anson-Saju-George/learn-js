function getData(dataId, getNextData) {
  // simulate async work (2 seconds)
  setTimeout(() => {
    console.log("data", dataId);

    // call the next step AFTER this finishes
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

// start the async chain
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4, () => {
        console.log("done");
      });
    });
  });
});

// start another async chain
getData(4);
// This code demonstrates callback-based asynchronous programming in JavaScript. It defines a function getData that simulates fetching data asynchronously using setTimeout.
// After fetching each piece of data, it calls the next function in the chain via a callback,
// resulting in sequential asynchronous operations.
