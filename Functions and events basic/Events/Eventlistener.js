document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('addbtn');
    const rmv = document.getElementById('rmv');
    const foodList = document.getElementById('food-list');

    const foods = ["Biryani", "Samosa", "Pani Puri", "Paneer Butter Masala", "Dosa"];
    let foodIndex = 0;


    function handleClick() {
        if (foodIndex < foods.length) {
            const listItem = document.createElement('li');
            listItem.textContent = foods[foodIndex]; 
            foodList.appendChild(listItem);
            foodIndex++; 
        } else {
            alert("All food items have been added!");
        }
    }

    // Function to remove the last food item
    function removeFoodItem() {
        const lastItem = foodList.lastElementChild; // Get the last item in the list
        if (lastItem) {
            foodList.removeChild(lastItem); // Remove the last item
            foodIndex--; // Decrease the food index to reflect the removed item
        } else {
            alert("No items to remove!");
        }
    }

    // Add event listener for "Click to add" button
    btn.addEventListener('click', handleClick);

    // Add event listener for "Click to remove" button
    rmv.addEventListener('click', removeFoodItem);
});
