import React from "react";
import Task from "./Task";

const todoList = (props) => {
  return (
    <div className="todoList">
      {props.todos.map((task) => {
        return <Task title={task.title} key={task.id} />;
      })}
    </div>
  );
};
export default todoList;
