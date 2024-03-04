const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.set({ "Content-Type": "text/html; charset=utf-8" });
  res.end("헬로 Express");
});

app.listen(port, () => {
  console.log(`익스프레스로 라우터 리팩토링하기`);
});

//기존 urlMap으로 매핑 관리하던 부분이 없어지고 app.get 함수에 등록하도록 변경
app.get("/", (_, res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

function user(req, res) {
  const user = url.parse(req.url, true).query;
  res.json(`[user] name : ${user.name} , age: ${user.age}`);
}

function feed(req, res) {
  res.json(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>
        `);
}
