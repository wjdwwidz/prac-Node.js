const MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://wjdwwidz:nodewjdwwidz@cluster0.5fd3khr.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true });

async function main() {
  try {
    //접속 : connect()
    await client.connect();
    console.log("MongoDB 접속 성공");

    const collection = client.db("test").collection("person");
    //추가 : insertOne
    await collection.insertOne({ name: "Andy", age: 30 });
    console.log("문서 추가 완료");

    //찾기 : find
    const documents = await collection.find({ name: "Andy" }).toArray();
    console.log("찾은 문서:", documents);

    // //갱신 : updateOne
    await collection.updateOne({ name: "Andy" }, { $set: { age: 31 } });
    console.log("문서 업데이트");

    const updatedDocuments = await collection.find({ name: "Andy" }).toArray();
    console.log("갱신된 문서:", updatedDocuments);

    //문서 삭제 : deleteOne
    await collection.deleteOne({ name: "Andy" });
    console.log("문서 삭제");

    //연결 끊기
    await client.close();
  } catch (err) {
    console.error(err);
  }
}
main();
