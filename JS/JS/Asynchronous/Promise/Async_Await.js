
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data fetched");
            resolve();
        }, 1000);
    });
}

async function processData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data processed");
            resolve();
        }, 1000);
    });
}

function displayData() {
    console.log("Data displayed");
}

async function handleData() {
    await fetchData();  // Execution pauses here until fetchData resolves
    await processData();  // Execution pauses here until processData resolves

    displayData();
}

handleData().catch((error) => {
    console.error("An error occurred:", error);
});
