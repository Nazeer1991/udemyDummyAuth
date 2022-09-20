import { StrictMode, useState, useRef } from "react";
import { createRoot } from "react-dom/client";
//import App from "./App";
const App = () => {
  const [myNum, setMyNum] = useState(0);

  const inputOne = useRef();
  const inputTwo = useRef();

  const getNumBox = () => {
    console.log("hello");
    console.log(inputOne.current);
    inputOne.current.style.width = "300px";
  };
  const getTextBox = () => {
    console.log("world");
    console.log(inputTwo.current);
  };
  return (
    <>
      <h2>Nazeer</h2>
      <input
        ref={inputOne}
        value={myNum}
        style={{ width: "100px" }}
        type="number"
        onChange={(e) => setMyNum(e.target.value)}
      />
      <input ref={inputTwo} value={myNum} type="text" />
      <h3>Value is :{myNum}</h3>
      <button onClick={() => getNumBox()}>Rupees</button>
      <button onClick={() => getTextBox()}>Dollars</button>
    </>
  );
};
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
