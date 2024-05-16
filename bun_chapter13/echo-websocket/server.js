const Websocket = require('ws');
const server = new Websocket.Server({port:3000});

server.on('connection', ws => {
    ws.send('[서버 접속 완료!]');

    ws.on('message',message => {
       we.send(`서버로부터 응답 : ${message}`);
    });

    ws.on('close',()=>{
        console.log('클라이언트 접속 해제');
    });
});