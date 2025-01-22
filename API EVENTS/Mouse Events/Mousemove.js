document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('mouseButton');
    const log = document.getElementById('mouseLog');

    button.addEventListener('mousedown', () => {
        log.textContent = 'Mouse button pressed!';
        console.log('Mouse button pressed!');
    });

    button.addEventListener('mouseup', () => {
        log.textContent = 'Mouse button released!';
        console.log('Mouse button released!');
    });

    button.addEventListener('mouseenter', () => {
        log.textContent = 'Mouse entered the button!';
        console.log('Mouse entered the button!');
    });

    button.addEventListener('mouseleave', () => {
        log.textContent = 'Mouse left the button!';
        console.log('Mouse left the button!');
    });
});
