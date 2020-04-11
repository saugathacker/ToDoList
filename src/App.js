import React, { Component } from "react";
import "./App.css";
import Cockpit from "./Cockpit";
import Input from "./Input";

class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  toogleShowWelcome = () => {
    const temp = this.state.showWelcome;

    this.setState({
      showWelcome: !temp,
    });
  };

  componentDidMount = async () => {
    const response = await fetch("http://10.0.0.156:8080/api/todos/");
    const json = await response.json();
    this.setState({ data: json });
  };

  addTaskHandler = (taskName, deadline) => {
    const date = new Date();

    const option = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
    };
  };

  render() {
    return (
      <div className="App">
        {this.state.data}
        <Cockpit />
        <br />
        <Input />
      </div>
    );
  }
}

export default App;
