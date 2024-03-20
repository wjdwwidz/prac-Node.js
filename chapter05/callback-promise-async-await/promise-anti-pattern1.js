function myWork(work) {
  return new Promise((resolve, reject) => {
    if (work === "done") {
      resolve("게임 가능");
    } else {
      reject(new Error("게임 불가능"));
    }
  });
}

//콜백과 다를 바가 없는 경우
myWork("done").then(
  function (value) {
    console.log(value);
  },
  function (err) {
    console.error(err);
  }
);

//좋은 예시
myWork("doing")
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
