//Create an application to implement class and functional component in ReactJS

import React, { useState } from "react";

const Todo = () => {
  // Todo is a component
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const tasks = ["task1", "task2", "task3"]; // This is an array

  // Handle button click to increment the count
  function handleClick() {
    setCount(count + 1);
  }

  // Handle input change to update state
  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      <h1>{count}</h1>
      <input type="text" onChange={handleChange} placeholder="Enter task" />
      <p>Add the task you need</p>
      <button onClick={handleClick} className="btn" value="addtask">
        Add Task
      </button>
      <h1>{input}</h1>
      <h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </h2>
    </div>
  );
};

export default Todo;
