import React, { Component } from "react";
import "./App.css";
import Cockpit from "./Cockpit";
import Input from "./Input";
import TodoList from "./TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      deadline: "",
      completed: false,
      data: [],
      toDos: [],
    };
  }

  toogleShowWelcome = () => {
    const temp = this.state.showWelcome;

    this.setState({
      showWelcome: !temp,
    });
  };

  // componentDidMount = async () => {
  //   const response = await fetch("http://10.0.0.156:8080/api/todos/");
  //   const json = await response.json();
  //   this.setState({ data: json });
  //   // console.log(this.state.data);
  //   let todos = [];
  //   this.state.data.map((task) => {
  //     todos.push(task);
  //   });

  //   this.setState({
  //     toDos: todos,
  //   });
  // };

  // addTaskHandler = (taskName, deadline) => {
  //   // const date = new Date();
  //   // const option = {
  //   //   method: "POST",
  //   //   header: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   // };

  // };

  addTaskHandler = (event) => {
    event.preventDefault();
    const rid = Math.random();
    const todo = {
      id: rid,
      title: this.state.task,
    };

    console.log(todo);

    let toDos = [...this.state.toDos, todo];

    this.setState({
      toDos,
      task: "",
    });
  };

  changeHandler = (event) => {
    let task = event.target.value;
    this.setState({
      task,
    });
  };

  render() {
    return (
      <div className="App">
        <Cockpit />
        <br />
        {/* <form>
          <label onSubmit={this.addTaskHandler}>Enter your task: </label>
          <input
            type="text"
            onChange={this.changeHandler}
            value={this.state.task}
          />
        </form> */}
        <Input
          addTodo={this.addTaskHandler}
          changeHandler={this.changeHandler}
          task={this.state.task}
        />
        <TodoList todos={this.state.toDos} />
        {/* {console.log(this.state.toDos)} */}
      </div>
    );
  }
}

export default App;
