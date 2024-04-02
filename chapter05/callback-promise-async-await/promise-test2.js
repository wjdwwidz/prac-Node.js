const DB = [];

function saveDB(user) {
  //const oldDBSize = DB.length + 1; //실패 테스트용
  const oldDBSize = DB.length;
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    //콜백 대신 Promise 객체를 반환
    if (DB.length > oldDBSize) {
      resolve(user);
    } else {
      reject(new Error("Save DB Error!"));
    }
  });
}

function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => {
    //실패 처리 없음
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve) => {
    resolve(`success register ${user.name}`);
  });
}

function registerByPromise(user) {
  // 비동기 호출이지만 순서를 지켜서 실행
  const result = saveDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch((error) => new Error(error))
    // 성공, 실패 여부에 관계없이 실행
    .finally(() => console.log("완료!"));
  console.log(result);
  return result;
}

const myUser = { email: "andy@test.com", password: "1234", name: "Andy" };
// const reuslt = registerByPromise(myUser);
//결괏값이 Promise 객체이므로 then으로 처리
// reuslt.then(console.log);

const allResult = Promise.all([
  saveDB(myUser),
  sendEmail(myUser),
  getResult(myUser),
]);

allResult.then(console.log);
