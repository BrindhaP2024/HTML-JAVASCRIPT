const receiverChannel = new BroadcastChannel('test_channel');
receiverChannel.onmessage = (event) => {
console.log(`Received: ${event.data}`);
};
