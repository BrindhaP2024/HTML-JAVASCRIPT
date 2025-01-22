// Mouse events
const mouseButton = document.getElementById('mouseBtn');
mouseButton.addEventListener('click', () => console.log('Button clicked'));
mouseButton.addEventListener('dblclick', () => console.log('Button double clicked'));
mouseButton.addEventListener('mouseover', () => console.log('Mouse over the button'));
mouseButton.addEventListener('mouseout', () => console.log('Mouse left the button'));

// Keyboard events
const keyboardInput = document.getElementById('keyboardInput');
keyboardInput.addEventListener('keydown', (event) => console.log(`Key down: ${event.key}`));
keyboardInput.addEventListener('keyup', (event) => console.log(`Key up: ${event.key}`));

// Form events
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); //helps to prevent from the default behavior of an event from occurring
    console.log('Form submitted');
});
form.addEventListener('change', (event) => console.log(`Field changed: ${event.target.name}`));
form.addEventListener('input', (event) => console.log(`Input value: ${event.target.value}`));

// Window events
window.addEventListener('load', () => console.log('Page loaded'));
window.addEventListener('resize', () => console.log('Window resized'));
window.addEventListener('scroll', () => console.log('Page scrolled'));

// Media events
// const video = document.getElementById('video');
// video.addEventListener('play', () => console.log('Video started playing'));
// video.addEventListener('pause', () => console.log('Video paused'));
// video.addEventListener('ended', () => console.log('Video ended'));
