import React, { useState } from "react"; // Import React and the `useState` hook for component-level state.
import { useDispatch } from "react-redux"; // Import `useDispatch` hook from `react-redux` to dispatch actions.
import { addToDo } from "../features/toDo/todoSlice"; // Import the `addToDo` action creator from our Redux slice.

function AddTodo() {
  // `useState` hook for managing the local state of the input field.
  // `input` holds the current value typed in the input box.
  // `setInput` is the function to update the `input` state.
  const [input, setInput] = useState("");

  // `useDispatch` hook returns a reference to the `dispatch` function from the Redux store.
  // We'll use this `dispatch` function to send actions to the Redux store.
  const dispatch = useDispatch();

  // Event handler for when the form is submitted.
  const addTodoHandler = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (which reloads the page).

    // Dispatch the `addToDo` action.
    // We pass the `input` value as the payload of the action.
    // When this action is dispatched, the `addToDo` reducer in `todoSlice` will be called,
    // and it will add the new todo to the Redux store's state.
    dispatch(addToDo(input));

    // After dispatching the action, clear the input field by setting its state back to an empty string.
    setInput("");
  };

  return (
    // Form element with an onSubmit handler that calls `addTodoHandler`.
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input} // The `value` of the input is controlled by our `input` state.
        // `onChange` handler updates the `input` state whenever the user types.
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit" // This button will trigger the form's `onSubmit` handler.
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo; // Export the `AddTodo` component for use in other parts of the application.
