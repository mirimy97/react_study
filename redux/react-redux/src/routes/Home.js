import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  console.log(toDos);
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
  }
  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
    </div>
  );
}

// Redux store에서 state를 받아옴 -> return 하는 것이component의 props에 추가된다
function mapStateToProps(state, ownProps) {
  console.log(state, ownProps);
  return { toDos: state };
}

// connect : components들을 store에 연결시키는 역할
// 2개의 argu 가짐 -> state, dispatch
export default connect(mapStateToProps)(Home);
