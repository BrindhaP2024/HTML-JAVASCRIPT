// promises.js

// Helper function to simulate asynchronous operations
const createPromise = (id, delay, shouldReject = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`Promise ${id} rejected`);
      } else {
        resolve(`Promise ${id} resolved`);
      }
    }, delay);
  });
};

// Creating an array of promises
const promises = [
  createPromise(1, 1000),
  createPromise(2, 2000),
  createPromise(3, 3000, true), // This one will reject
  createPromise(4, 4000),
  createPromise(5, 500)
];

// Promise.all()
Promise.all(promises)
  .then(results => {
    console.log("Promise.all() results:", results);
  })
  .catch(error => {
    console.error("Promise.all() error:", error);
  });

// Promise.allSettled()
Promise.allSettled(promises)
  .then(results => {
    console.log("Promise.allSettled() results:", results);
  });

//race()
Promise.race(promises)
  .then(result => {
    console.log("Promise.race() result:", result);
  })
  .catch(error => {
    console.error("Promise.race() error:", error);
  });

// Async/Await with Promise.all()
const asyncFunction = async () => {
  try {
    const results = await Promise.all(promises);
    console.log("Async/Await results:", results);
  } catch (error) {
    console.error("Async/Await error:", error);
  }
};

asyncFunction();
