const square = document.getElementById('square');
const keyframes = [
    { transform: 'translateX(0px)' },
    { transform: 'translateX(300px)' }
];
const options = {
    duration: 2000,
    iterations: Infinity,
    direction: 'alternate',
    easing: 'ease-in-out'
};
const animation = new Animation(new KeyframeEffect(square, keyframes, options), document.timeline); //Constructor

// Play/Pause button
document.getElementById('playPause').addEventListener('click', () => {
    if (animation.playState === 'running') {
        animation.pause();
    } else {
        animation.play();
    }
});

// Reverse button
document.getElementById('reverse').addEventListener('click', () => {
    animation.reverse();
});

// Finish button
document.getElementById('finish').addEventListener('click', () => {
    animation.finish();
});

// Cancel button
document.getElementById('cancel').addEventListener('click', () => {
    animation.cancel();
});

// Set Time button
document.getElementById('setTime').addEventListener('click', () => {
    animation.currentTime = 1000; // Set current time to 1 second
});

// Start the animation
animation.play();