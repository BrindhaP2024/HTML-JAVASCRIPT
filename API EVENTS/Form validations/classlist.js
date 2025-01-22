const div = document.getElementById('myDiv');

function addClass() {
    div.classList.add('new-class');
    div.style.fontSize = '20px';
    div.style.color = 'blue';
    div.style.fontFamily = "'Arial', sans-serif";
    console.log("Class 'new-class' added");
}

function removeClass() {
    div.classList.remove('highlight');
    div.style.fontSize = '16px';
    div.style.color = 'black';
    div.style.fontFamily = 'sans-serif';
    console.log("Class 'highlight' removed");
}

function toggleClass() {
    div.classList.toggle('active');
    if (div.classList.contains('active')) {
        div.style.color = 'green';
        div.style.fontFamily = "'Arial', sans-serif";
    } else {
        div.style.color = 'black';
        div.style.fontFamily = 'sans-serif';
    }
    console.log("Class 'active' toggled");
}

function checkClass() {
    if (div.classList.contains('highlight')) {
        div.style.fontSize = '22px';
        div.style.color = 'red';
        div.style.fontFamily = "'Courier New', monospace";
        console.log("Div has 'highlight' class.");
    } else {
        div.style.fontSize = '16px';
        div.style.color = 'black';
        div.style.fontFamily = 'sans-serif';
        console.log("Div does not have 'highlight' class.");
    }
}

function replaceClass() {
    div.classList.replace('highlight', 'replaced');
    div.style.fontSize = '18px';
    div.style.color = 'purple';
    div.style.fontFamily = "'Courier New', monospace";
    console.log("Class 'highlight' replaced with 'replaced'");
}

function logClassCount() {
    console.log(`Total classes: ${div.classList.length}`);
}