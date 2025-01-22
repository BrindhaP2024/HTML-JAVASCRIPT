// Get the elements from the DOM
const box = document.getElementById('box');
const animateBtn = document.getElementById('animateBtn');
const hoverBtn = document.getElementById('hoverBtn');

animateBtn.addEventListener('click', function() {

    box.style.width = '200px';            
    box.style.height = '200px';           
    box.style.backgroundColor = 'red';
});

hoverBtn.addEventListener('click', function() {
    box.classList.toggle('hovered');
});
