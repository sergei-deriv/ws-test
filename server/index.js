const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8073 });

wss.on('connection', ws => {
    console.log('Server has connected!');

    ws.on('close', () => {
        console.log('Server has disconnected');
    });

    ws.on('message', data => {
        console.log('The client sent this message: ' + data);

        ws.send('You wrote me this: ' + data);
    })
})