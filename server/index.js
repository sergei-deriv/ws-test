const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8073 });

wss.on('connection', ws => {
    console.log('Server has connected!');

    ws.on('close', () => {
        console.log('Server has disconnected');
    });
})