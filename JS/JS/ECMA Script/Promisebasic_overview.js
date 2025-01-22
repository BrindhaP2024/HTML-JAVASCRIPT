function demonstratePromises() {
    // Creating a promise
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Promise 1 resolved!"), 1000);
    });

    // Handling promise states
    promise1
        .then(result => {
            console.log(result); 
            return "Data from promise 1";
        })
        .catch(error => {
            console.error(error);
        })
        .finally(() => {
            console.log("Promise 1 settled (either resolved or rejected).");
        });

    // Chaining promises
    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Promise 2 resolved!"), 2000);
    });

    promise2
        .then(result => {
            console.log(result); 
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve("Chained promise resolved!"), 1000);
            });
        })
        .then(chainedResult => {
            console.log(chainedResult); 
        })
        .catch(error => {
            console.error(error);
        });

    // Using Promise.all
    let promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Promise 3 resolved!"), 1500);
    });

    let promise4 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Promise 4 resolved!"), 2500);
    });

    Promise.all([promise1, promise3, promise4])
        .then(results => {
            console.log("Promise.all results:", results); 
        })
        .catch(error => {
            console.error(error);
        });

    // Using Promise.race
    let promise5 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Promise 5 resolved first!"), 500);
    });

    let promise6 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Promise 6 resolved!"), 1000);
    });

    Promise.race([promise5, promise6])
        .then(result => {
            console.log("Promise.race result:", result); // "Promise 5 resolved first!"
        })
        .catch(error => {
            console.error(error);
        });
}

demonstratePromises();
