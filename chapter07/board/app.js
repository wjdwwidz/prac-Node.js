const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const mongodbConnection = require("./configs/mongodb-connection");

app.engine("handlebars", handlebars.create({helpers: require("./configs/handlebars-helpers"),}).engine); 
//핸들바 생성 및 엔진 반환
app.set("view engine", "handlebars"); //웹페이지 로드시 사용할 템플릿 엔진 설정 
app.set("views", __dirname + "/views"); //뷰 디렉터리를 views로 설정 


// 라우팅 설정
app.get("/", (req,res)=>{
	res.render("home",{title:"테스트 게시판"});
});
app.get("/write",(req,res)=>{
	res.render("write",{title:"테스트 게시판"});
});
app.get("/detail/:id",async(req,res)=>{
	res.render("detail",{
		title:"테스트 게시판",
	});
});


let collection;
app.listen(3000, async()=>{
	console.log("http://localhost:3000 Server Start");
	const mongoClient = await mongodbConnection();
	collection = mongoClient.db('board').collection("post");
	//db()를 통해 데이터베이스 선택, collection("post") 를 사용해 컬렉션을 선택
	console.log(`MongoDB Connected`);
});