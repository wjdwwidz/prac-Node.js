//모듈을 읽어오는 함수(require)
const http = require("http");
let count = 0;

//createServer : 서버 인스턴스를 만드는 함수 , 인수로는 콜백 함수를 받아 해당 요청을 처리
const server = http.createServer((req, res) => {
  //콜백 함수는 요청 처리에 사용할 요청 객체(req)와 응답 객체(res)를 인수로 받는다.
  log(count);
  res.statusCode = 200; //결괏값 200;
  res.setHeader("Content-Type", "text/plain"); //헤더 설정 : text/html 이라면 html을 text로 해석한다는 뜻
  res.write("hello\n"); //응답으로 hello\n 을 보내준다

  setTimeout(() => {
    res.end("Node.js"); //2초 후 Node.js 출력
  }, 2000);
});

function log(count) {
  console.log((count += 1));
}

server.listen(8000, () => console.log("Hello Node.js"));
