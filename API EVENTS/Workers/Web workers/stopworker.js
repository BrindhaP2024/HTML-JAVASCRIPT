const worker = new Worker('worker.js');

worker.onmessage = function (e) {
    console.log('Worker result:', e.data);
    worker.terminate();  
};

worker.postMessage(10);
