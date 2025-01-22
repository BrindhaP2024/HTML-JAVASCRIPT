function prepareFood() {
    setTimeout(() => {
        console.log("Step 1: Start cooking...");
    }, 1000);

    setTimeout(() => {
        console.log("Step 2: Add ingredients.");
    }, 3000);

    setTimeout(() => {
        console.log("Step 3: Cooking for 10 minutes.");
    }, 8000);

    setTimeout(() => {
        console.log("Step 4: Food is ready!");
    }, 12000);
}

prepareFood();
