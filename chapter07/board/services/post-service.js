const paginator = require("../utils/paginator");
const { ObjectId } = require("mongodb");

const projectionOption = {
  projection: {
    password: 0,
    "comments.password": 0,
  },
};

async function getDetailPost(collection, id) {
  return await collection.findOneAndUpdate(
    { _id: ObjectId(id) },
    { $inc: { hits: 1 } },
    projectionOption
  );
}

async function writePost(collection, post) {
  post.hits = 0;
  post.createdDt = new Date().toISOString();
  return await collection.insertOne(post);
}

async function list(collection, page, search) {
  //title이 search 와 일치하는지 확인
  const query = { title: new RegExp(search, "i") };

  const perPage = 10; //한 페이지에 보여줄 게시물 수
  const skip = (page - 1) * perPage;

  //생성일 역순으로 정렬
  const cursor = collection.find(
    query,
    { limit: perPage, skip: skip }.sort({ createdDt: -1 })
  );

  const totalCount = await collection.count(query); //전체 게시물 수
  const posts = await cursor.toArray();

  //페이지네이터 생성
  const paginatorObj = paginator({ totalCount, page, perPage });
  return [posts, paginatorObj];
}
module.exports = {
  writePost,
  list,
  getDetailPost,
};
