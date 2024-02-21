import http from "k6/http";

//100명이 10초동안 계속 요청을 보내는 상황
export const options = {
  //테스트 옵션
  vus: 100, //vertual user 수 (가상 유저)
  duration: "10s",
};

export default function () {
  http.get("http://localhost:8000"); //테스트에 사용할 함수 지정
}
