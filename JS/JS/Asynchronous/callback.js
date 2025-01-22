function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched from server.");
        callback();  // Callback is called after fetching data
    }, 2000);
}

function processData(callback) {
    setTimeout(() => {
        console.log("Data is being processed.");
        callback();  // after processing data
    }, 1000);
}

function displayData() {
    console.log("Data is displayed on the screen.");
}

// Chain of callbacks (callback hell)
fetchData(() => {
    processData(() => {
        displayData();
    });
});
