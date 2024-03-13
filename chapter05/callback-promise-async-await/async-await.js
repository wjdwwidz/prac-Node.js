async function myName() {
  return "Andy";
}

async function showName() {
  const name = await myName();
  //await 은 Promise 객체인 myName()함수의 실행이 끝나길 기다린다.
  //출력 결과에서 pending은 console.log(showName())의 결괏값이다.
  //showName()도 async가 붙어있으니 Promise이다

  console.log(name); //=> Andy출력
}
console.log(showName()); //=> Promise { <pending> } 출력
// showName(); => Andy 출력
