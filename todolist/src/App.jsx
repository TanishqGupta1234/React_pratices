import { useState } from "react";
import "./App.css";
import React from "react";
import { ToDoProvider } from "./Context/Content";
import { useEffect } from "react";
import { TodoForm } from "./Components";
import TodoItem from "./Components/todoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updatedToDo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevToDo) =>
        prevToDo.id === id ? { ...prevToDo, ...todo } : prevToDo
      )
    );
  };

  const deletedToDo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevToDo) =>
        prevToDo === id
          ? { ...prevToDo, completed: !prevToDo.completed }
          : prevToDo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todo"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, []);

  return (
    <ToDoProvider
      value={{
        todos,
        addTodo,
        updatedToDo,
        deletedToDo,
        toggleCompleted,
      }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}
