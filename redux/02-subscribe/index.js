import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const Add = "Add";
const Minus = "Minus";

// reducer = modifier (return으로 나의 data를 바꿔준다)
// reducer 만이 유일하게 data를 변경할 수 있다.
// 1. (count = 0) : current state가 첫번째 인자(count)이며, undefined 인 경우 기본값 0을 갖는다.
// 2. action : countModifier과 소통하기 위한 방법
const countModifier = (count = 0, action) => {
  console.log(count);
  switch (action.type) {
    case Add:
      return count + 1;
    case Minus:
      return count - 1;
    default:
      return count;
  }
};

// store 생성
const countStore = createStore(countModifier);

// countStore에 변화가 생길때마다 subscribe가 감지해서 onChange 함수 실행 -> number html의 innerText 값 업데이트
const onChange = () => {
  number.innerText = countStore.getState();
};

// subscribe : store 안에 있는 변화들을 알 수 있게 해줌
countStore.subscribe(onChange);

// action은 object여야함
add.addEventListener("click", () => countStore.dispatch({ type: Add }));
minus.addEventListener("click", () => countStore.dispatch({ type: Minus }));
