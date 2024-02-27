const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  //응답의 헤더 설정 == text를 html 로 해석
  res.end("OK");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
