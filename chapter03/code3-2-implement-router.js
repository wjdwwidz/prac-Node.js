//localhost:3000/user 과 localhost:3000/feed라는 두 가지 URL 이 있다고 가정하고 두 요청에 대해 다른 응답을 주는 코드를 작성한다
const http = require("http");
const url = require("url"); //url 모듈을 로딩하고 변수에 할당

http
  .createServer((req, res) => {
    const path = url.parse(req.url, true).pathname; //패스명 할당
    res.setHeader("Content-Type", "text/html");

    if (path === "/user") {
      res.end("[user] name : andy, age:30");
    } else if (path == "/feed") {
      res.end(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>
        `);
    } else {
      res.statusCode = 404;
      res.end("404 page not found");
    }
  })
  .listen("3000", () => console.log("라우터를 만들어보자!"));
