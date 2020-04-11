import React from "react";
import "./App.css";
const input = () => {
  return (
    <div className="input">
      <p>Enter your task</p>
      <input type="text" placeholder="Enter your task" name="title" size="40" />
      <p>Enter deadline</p>
      <input type="datetime-local" name="deadline"></input>
      <br />
      <br />
      <button>Add</button>
    </div>
  );
};
export default input;
