import React from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/todo";

function App() {
  return (
    <>
      <h1>Learn About Redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;

// You use @reduxjs/toolkit to build and manage your Redux data store efficiently.

// You use react-redux to connect your React components to that Redux data store so they can read and update the data.
