document.addEventListener('DOMContentLoaded', () => {
    const pointerArea = document.getElementById('pointerArea');
    const log = document.getElementById('log');

    // Pointer events
    pointerArea.addEventListener('pointerdown', (event) => {
        log.textContent = `Pointer down: ${event.pointerType}`;
    });

    pointerArea.addEventListener('pointerup', (event) => {
        log.textContent = `Pointer up: ${event.pointerType}`;
    });

    pointerArea.addEventListener('pointermove', (event) => {
        log.textContent = `Pointer move at X: ${event.clientX}, Y: ${event.clientY}`;
    });

    pointerArea.addEventListener('pointerenter', () => {
        log.textContent = 'Pointer entered the area';
    });

    pointerArea.addEventListener('pointerleave', () => {
        log.textContent = 'Pointer left the area';
    });

    // Mouse wheel event (scroll)
    pointerArea.addEventListener('wheel', (event) => {
        log.textContent = `Wheel scrolled: Delta Y = ${event.deltaY}`;
    });
});
