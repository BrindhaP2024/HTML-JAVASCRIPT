
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const button = document.getElementById('clickMeButton');

outer.addEventListener('click',function(event){
    console.log("Outer div clicked(bubbling phase)");
    },false);

inner.addEventListener('click',function(event){
    console.log("Inner div clicked");
    
},false);// 'false' means this listener is in the bubbling phase


button.addEventListener('click', function(event) {
    console.log("Button clicked (Bubbling Phase)");
    // Stop the event from bubbling up
    event.stopPropagation(); 
}, false);

// outer.addEventListener('click', function(event) {
//     console.log("Outer div clicked (Bubbling Phase)");
// }, false);  
// Event listener for the inner div (captures the event)
// inner.addEventListener('click', function(event) {
//     console.log("Inner div clicked (Bubbling Phase)");
// }, false);


