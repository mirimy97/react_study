import { createStore } from "redux";

const formTag = document.getElementById("input");
const inputTag = document.querySelector("input");
const ulTag = document.querySelector("ul");

const Add = "Add";
const Delete = "Delete";

const toDoModifier = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case Add:
      console.log("add 실행");
      return [...state, { text: action.text, id: Date.now() }];
    case Delete:
      console.log("delete 실행");
      const newState = state.filter((s) => s.id !== action.id);
      return newState;
    default:
      return state;
  }
};

const toDoStore = createStore(toDoModifier);

const deleteToDo = (e) => {
  console.log("deleteToDO 실행");
  console.log(e.target.parentNode.id);
  const id = parseInt(e.target.parentNode.id);
  toDoStore.dispatch({ type: Delete, id: id });
};

const onChange = () => {
  console.log("change 실행");
  const toDos = toDoStore.getState();
  ulTag.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "DEL";
    button.addEventListener("click", deleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(button);
    ulTag.appendChild(li);
  });
};

toDoStore.subscribe(onChange);

const onSubmit = (e) => {
  e.preventDefault();
  // console.log(inputTag.value);
  const toDO = inputTag.value;
  inputTag.value = "";
  toDoStore.dispatch({ type: Add, text: toDO });
  console.log(toDoStore.getState());
};

formTag.addEventListener("submit", onSubmit);
