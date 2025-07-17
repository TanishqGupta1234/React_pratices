import { createContext, useContext } from "react";

export const ToDOContext = createContext({
  todos: [
    {
      id: 1,
      todo: "To Do msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updatedToDo: (id, todo) => {},
  deletedToDo: (id) => {},
  toggleComplete: (id) => {},
});

export const useToDO = () => {
  return useContext(ToDOContext);
};

export const ToDoProvider = ToDOContext.Provider;
