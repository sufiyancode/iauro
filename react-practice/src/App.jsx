import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import "./App.css";
import { useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

function App() {
  // const [car, setCar] = useState({
  //   Make: "BMW",
  //   Model: "S1",
  //   Color: "yellow",
  // });
  // useState Hook
  const [value, setValue] = useState(0);
  const [number, setNumber] = useState(0);
  // const count = useRef(0);
  // useRef Hook
  const inputElement = useRef(0);
  const [count, setCount] = useState(0);

  // Reducer Hook
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase": {
        return { count: state.count + 1 };
      }
      case "decrease": {
        return { count: state.count - 1 };
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   count.current = count.current + 1;
  // });

  // function handleChange() {
  //   setCar((prev) => {
  //     return { ...prev, Color: "red" };
  //   });
  // }

  // function handleChangeColor() {
  //   inputElement.current.style.background = "yellow";
  //   console.log(inputElement.current);
  // }

  // function cubeNum(num) {
  //   console.log("cubeNUm run!");
  //   return num ** 3;
  // }
  // const result = useMemo(() => cubeNum(number), [number]);

  // useCallback hook
  const newFunc = useCallback(() => {}, []);
  return (
    <>
      {/* <Header newFunc={newFunc} />
      <h1>{count} </h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click here</button>
      <Profile />
      <Footer /> */}
      <button onClick={() => dispatch({ type: "decrease" })}>-</button>
      <h1>Count {state.count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>+</button>
      <input
        type="text"
        onChange={(e) => dispatch({ type: "input", payload: e.target.value })}
      />
      {/* <p>The component is rendered {count.current} times</p>

      <input type="text" ref={inputElement} />
      <button onClick={() => handleChangeColor()}>click</button>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2>{result}</h2> */}
      {/* <h1>
        The Car is from {car.Make} {car.Model} {car.Color}
      </h1>
      <button onClick={() => handleChange()}>Change</button> */}
    </>
  );
}

export default App;
