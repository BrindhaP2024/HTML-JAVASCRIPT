
function calculateSum(num1, num2) {
    return num1 + num2;
}
function displaySum() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = calculateSum(num1, num2); // Call function to calculate the sum
        document.getElementById("result").textContent = "Sum: " + sum;
    } else {
        document.getElementById("result").textContent = "Please enter valid numbers.";
    }
}

document.getElementById("calculateButton").addEventListener("click", displaySum);
