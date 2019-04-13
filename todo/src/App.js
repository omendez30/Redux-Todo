import React, { Component } from "react";
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoForm />
        <ToDoList />
      </div>
    );
  }
}

export default App;
