//Q1. Create an application in ReactJS to implement component life cycle

import React from "react";

const Todo = () => {
  let tasks = 0;

  function counttasks() {
    if (tasks === 0) {
      return "No task available";
    } else {
      return `Task: ${tasks}`;
    }
  }

  function handleClick() {
    tasks += 1;
    console.log("Task no: ", tasks);
  }

  return (
    <div>
      <h1>{counttasks()}</h1>
      <p>WTLAB MCA Sem I</p>
      <button onClick={handleClick} className="btn" value="addtask">
        Add Task
      </button>
    </div>
  );
};

export default Todo;
