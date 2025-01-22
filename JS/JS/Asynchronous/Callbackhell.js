// Callback function to be executed after cooking
function startCooking(callback) {
    setTimeout(() => {
        console.log("Cooking started...");
        callback(); 
    }, 2000);
}

function addIngredients(callback) {
    setTimeout(() => {
        console.log("Ingredients added.");
        callback(); 
    }, 5000);
}

function finishCooking() {
    console.log("Food is ready!");
}

// Calling the functions with callbacks
startCooking(() => {
    addIngredients(() => {
        finishCooking();
    });
});
