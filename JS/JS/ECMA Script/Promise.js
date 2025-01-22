let promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => resolve("Success!"), 1000);
  });
  
  promise.then(result => {
    console.log(result);
  }).catch(error => {
    console.error(error);
  });
  