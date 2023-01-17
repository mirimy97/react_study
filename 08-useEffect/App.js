import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  };
  // iRunOnlyOnce 함수는 처음 렌더링될 때 한 번만 실행하고, 다음부터는 state가 변경되더라도 실행되지 않음 ([] 안에 바라보고 있는 state가 없기 때문에)
  useEffect(iRunOnlyOnce, []);
  // 특정 키워드 - [keyword]가 변화할 때만 코드를 실행할거임
  // => counter가 변화하면 이 코드는 실행되지 않는다.
  useEffect(() => {
    if (keyword !== "" && keyword.length > 4) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
