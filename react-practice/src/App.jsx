import { useCallback, useEffect, useMemo, useState } from "react";
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

  const [value, setValue] = useState(0);
  const [number, setNumber] = useState(0);
  // const count = useRef(0);
  const inputElement = useRef(0);
  const [count, setCount] = useState(0);

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

  const newFunc = useCallback(() => {}, []);
  return (
    <>
      <Header newFunc={newFunc} />
      <h1>{count} </h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click here</button>
      <Profile />
      <Footer />
      {/* <button onClick={() => setValue((prev) => prev - 1)}>-</button>
      <h1>Count {value}</h1>
      <button onClick={() => setValue((prev) => prev + 1)}>+</button>
      <p>The component is rendered {count.current} times</p>

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
