import React from "react"; // Import React for building the component.
import { useSelector, useDispatch } from "react-redux"; // Import `useSelector` to read state from Redux, and `useDispatch` to dispatch actions.
import { removeToDo } from "../features/toDo/todoSlice"; // Import the `removeToDo` action creator from our Redux slice.

function Todos() {
  // `useSelector` hook allows you to extract data from the Redux store state.
  // The function passed to `useSelector` receives the entire Redux state as an argument.
  // Here, we are selecting the `todos` array from the state.
  // Whenever the `todos` array in the Redux store changes, this component will re-render.
  const todos = useSelector((state) => state.todos);

  // `useDispatch` hook returns a reference to the `dispatch` function from the Redux store.
  // We use this `dispatch` function to send actions to the Redux store to update the state.
  const dispatch = useDispatch();

  return (
    <>
      {/* A simple heading for the todo list */}
      <div className="text-white text-2xl font-bold mt-8 mb-4">Todos</div>
      {/* Unordered list to display the todo items */}
      <ul className="list-none">
        {/* Map over the `todos` array obtained from the Redux store.
            For each `todo` object, we render a list item (`<li>`). */}
        {todos.map((todo) => (
          <li
            // `key` prop is crucial for React to efficiently update lists.
            // It should be a unique identifier for each item.
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            {/* Display the text content of the todo item */}
            <div className="text-white">{todo.text}</div>
            {/* Button to remove a todo item */}
            <button
              // When this button is clicked, we dispatch the `removeToDo` action.
              // We pass `todo.id` as the payload, which tells the reducer which todo to remove.
              onClick={() => dispatch(removeToDo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              {/* SVG icon for a delete/trashcan button */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos; // Export the `Todos` component for use in other parts of the application.
