import React from "react";
import "./App.css";
const input = (props) => {
  return (
    <div className="Input">
      <form onSubmit={props.addTodo}>
        <label>Enter your task: </label>
        <input type="text" onChange={props.changeHandler} value={props.task} />
        <br />
        <br />
        <label>Enter your dealine: </label>
        <input type="datetime-local"></input>
        <br />
        <br />
        <input type="submit" value="Add Task" />
      </form>
    </div>
  );
};

export default input;
