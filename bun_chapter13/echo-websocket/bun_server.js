Bun.serve({
    fetch(req, server){
        if (server.upgrade(req)){
            return;
        }
        return new Response("Upgrade failed", {status : 500});
    },
    websocket : {
        open(ws) {
            ws.send('[Bun.Serve 접속 완료!]'); // 클라이언트에게 초기 메시지 전송
        },
        message(ws, message) {
            ws.send(`서버로부터 응답 : ${message}`); // 클라이언트로부터 받은 메시지를 그대로 되돌려 전송
        },
        close(ws) {
            console.log('클라이언트 접속 해제'); // 클라이언트 연결 해제 시 콘솔에 로그 출력
        }
    },
})