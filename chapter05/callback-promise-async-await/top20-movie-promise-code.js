const axios = require("axios");

const url =
  "http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";

axios
  .get(url)
  .then((result) => {
    if (result.status != 200) {
      throw new Error("요청에 실패했습니다!");
    }
    if (result.data) {
      return result.data;
    }
    throw new Error("데이터 없습니다."); //data가 없으면 처리
  })
  .then((data) => {
    if (!data.articleList || data.articleList.size == 0) {
      throw new Error("데이터가 없습니다");
    }
    return data.articleList; //영화 리스트 반환
  })
  .then((articles) => {
    return articles.map((article, idx) => {
      //영화 리스트를 제목과 순위 정보로 분리
      return { title: article.title, rank: idx + 1 };
    });
  })
  .then((results) => {
    for (let movieInfo of results) {
      console.log(`[${movieInfo.rank}위] ${movieInfo.title}`);
    }
  })
  .catch((err) => {
    console.log("<<에러 발생>>");
    console.log(err);
  });
