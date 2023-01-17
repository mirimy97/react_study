import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// reducer = modifier (return으로 나의 data를 바꿔준다)
// reducer 만이 유일하게 data를 변경할 수 있다.
// 1. (count = 0) : current state가 첫번째 인자(count)이며, undefined 인 경우 기본값 0을 갖는다.
// 2. action : countModifier과 소통하기 위한 방법
const countModifier = (count = 0, action) => {
  if (action.type === "Add") {
    return count + 1;
  } else if (action.type === "Minus") {
    return count - 1;
  } else {
    return count;
  }
};

// store 생성
const countStore = createStore(countModifier);

console.log(countStore.getState()); // 0

// .dispatch : countModifier에 action을 보내는 방법 (커뮤니케이트)
countStore.dispatch({ type: "Add" }); // +1
countStore.dispatch({ type: "Add" }); // +1
countStore.dispatch({ type: "Add" }); // +1
countStore.dispatch({ type: "Add" }); // +1
countStore.dispatch({ type: "Add" }); // +1
countStore.dispatch({ type: "Minus" }); // -1

console.log(countStore.getState()); // 4

// // state 생성
// let count = 0;
// number.innerText = count;

// // state 수정
// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count = count + 1;
//   updateText();
// };
// const handleMinus = () => {
//   count = count - 1;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
