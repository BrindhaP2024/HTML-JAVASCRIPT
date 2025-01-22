// self.onmessage = function(e) {
//     console.log('Message received from main thread:', e.data);
//     // Perform computation or any other task
//     const result = e.data * 2;  // For example, doubling the received value
//     self.postMessage(result);  // Send the result back to the main thread
//   };
  
// worker.js
self.onmessage = function(e) {
  const number = e.data;
  console.log('Worker received task to work:', number);
  const result = number * 12;  // Doubling the number as the task
  self.postMessage(result);    // Send the result back to the main thread
};





// Sample check

// self.onmessage = function(e) {
//   const number = e.data;
//   console.log('Worker received number:', number);
  
//   // Perform computation
//   const result = number * 20;
  
//   // Send the result back to the main thread
//   self.postMessage(result);
// };
