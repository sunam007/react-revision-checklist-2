import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      {/*  <Mobile></Mobile> */}
      <Todos></Todos>
    </div>
  );
}

function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  console.log(todos);

  return (
    <div>
      {todos.map((todo) => (
        <Tasks title={todo.title} status={todo.completed + ""}></Tasks>
      ))}
    </div>
  );
}

function Tasks(props) {
  return (
    <div>
      <h3>Task: {props.title}</h3>
      <h3>Status: {props.status}</h3>
    </div>
  );
}

/* function Mobile() {
  const [percentage, setPercentage] = useState(100);
  const percentageDown = () => {
    if (percentage === 0) {
      return 0;
    } else {
      setPercentage(percentage - 10);
    }
  };

  return (
    <div>
      <h2>Battery Percentage: {percentage} %</h2>
      <button onClick={percentageDown}>battery down</button>
    </div>
  );
} */

export default App;
