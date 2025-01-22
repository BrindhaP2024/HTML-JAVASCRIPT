window.addEventListener('unhandledrejection', (event) => {
    console.log('Unhandled promise rejection:', event.reason);
});

window.addEventListener('rejectionhandled', (event) => {
    console.log('Promise rejection handled:', event.reason);
});

const myPromise = Promise.reject('Something went wrong');

setTimeout(() => {
    myPromise.catch((error) => {
        console.log('Rejection handled:', error);
    });
}, 3000);
