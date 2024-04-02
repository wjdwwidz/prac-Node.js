async function myName() {
  return "Andy";
}

//showName()도 async가 붙어있으니 Promise이다
async function showName() {
  const name = await myName();
  //await 은 Promise 객체인 myName()함수의 실행이 끝나길 기다린다.

  console.log(name); //=> Andy출력
}

console.log(showName()); //=> Promise { <pending> } 출력

// async function consoleAfterAll() {
//   console.log(await showName());
// }
// consoleAfterAll(); //=> undefined 출력

// showName(); => Andy 출력

function waitOneSecond(msg) {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(`${msg}`), 1000);
  });
}

async function countOneToTen() {
  for (let x of [...Array(10).keys()]) {
    //0부터 9까지의 루프를 순회
    let result = await waitOneSecond(`${x + 1}초 대기 중...`);
    console.log(result);
  }
  console.log("완료");
}

countOneToTen();

for (let x of [...Array(10).keys()]) {
  console.log(x);
}
