// Main.js

// Create a new Web Worker
const worker = new Worker('worker.js');  // Reference the correct worker script

// Select DOM elements
const numberInput = document.getElementById('numberInput');
const startButton = document.getElementById('startButton');
const resultDiv = document.getElementById('result');

// Event listener for the "Start Task" button
startButton.addEventListener('click', () => {
    const number = parseInt(numberInput.value);

    if (isNaN(number)) {
        resultDiv.textContent = 'Please enter a valid number.';
        return;
    }

    resultDiv.textContent = 'Processing...';  // Indicate that the worker is working

    // Send number to the worker
    worker.postMessage(number);
});

// Listen for messages from the worker
worker.onmessage = function (e) {
    const result = e.data;  // Get the result from the worker
    resultDiv.textContent = `Result: ${result}`;  // Display the result in the DOM
};

// Handle errors in the worker
worker.onerror = function (error) {
    console.error('Worker error:', error.message);
    resultDiv.textContent = 'Error occurred while processing the task.';
};
