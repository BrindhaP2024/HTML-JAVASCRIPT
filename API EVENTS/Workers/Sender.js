const senderChannel = new BroadcastChannel('test_channel');
senderChannel.postMessage('Hello from sender');
