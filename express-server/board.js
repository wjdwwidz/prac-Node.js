const express = require("express");
const app = express();
let posts = [];

//req.body를 사용려면 JSON 미들웨어를 사용해야 한다
//사용하지 않으면 undefined로 반환
app.use(express.json());

//POST 요청시 컨텐트 타입이 application/x-www-form-urlencoded로
//전달되면 req.body에 파싱된 데이터를 넣어준다
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json(posts);
});

//게시글 리스트에 새로운 게시글 정보 추가
app.post("/posts", (req, res) => {
  const { title, name, text } = req.body;
  posts.push({ id: posts.length + 1, title, name, text, createdDt: Date() });
  res.json({ title, name, text });
});

//app.delete에 설정한 path정보에서 id 값을 가져옴
app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  const filteredPosts = posts.filter((post) => post.id !== +id);
  const isLengthChanged = posts.length !== filteredPosts.length;
  posts = filteredPosts;
  if (isLengthChanged) {
    res.json("OK"); //posts의 데이터 개수가 변경되었으면 삭제 성공
    return;
  }
  res.json("NOT CHANGED"); //변경되지 않음
});

app.listen(3000, () => {
  console.log("welcome posts START!");
});
