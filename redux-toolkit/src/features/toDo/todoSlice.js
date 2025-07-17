import { createSlice, nanoid } from "@reduxjs/toolkit"; // Importing necessary functions from Redux Toolkit

// Define the initial state for our todo application.
// This state will hold an array of todo objects.
const initialState = {
  todos: [{ id: 1, text: "Hello World" }], // 'todos' is an array, initially containing one todo item.
};

// `createSlice` is a Redux Toolkit function that simplifies the process
// of creating Redux reducers and actions.
export const todoSlice = createSlice({
  name: "todo", // A string name for this slice. This is used in the action types (e.g., 'todo/addToDo').
  initialState, // The initial state for this slice, defined above.
  reducers: {
    // Reducers are functions that specify how the state changes in response to actions.
    // They receive the current `state` and the `action` as arguments.
    // Redux Toolkit uses Immer internally, which allows us to write "mutating" logic
    // inside reducers, even though Redux itself requires immutable updates.
    // Immer handles the immutability behind the scenes.

    // Reducer to add a new todo item.
    addToDo: (state, action) => {
      // Create a new todo object.
      // `nanoid()` generates a unique ID for the new todo.
      // `action.payload` is the data passed with the action (e.g., the todo text).
      const todo = { id: nanoid(), text: action.payload };
      // Directly "mutate" the state by pushing the new todo to the `todos` array.
      // Immer makes this safe and creates a new immutable state under the hood.
      state.todos.push(todo);
    },
    // Reducer to remove a todo item.
    removeToDo: (state, action) => {
      // Filter out the todo item whose `id` matches the `action.payload`.
      // The `action.payload` here would be the ID of the todo to remove.
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// `createSlice` automatically generates action creators from the `reducers` object.
// We destructure them here so they can be easily imported and dispatched in components.
// For example, `dispatch(addToDo("New Task"))`
export const { addToDo, removeToDo } = todoSlice.actions;

// `createSlice` also automatically generates the reducer function for this slice.
// We export it as the default export so it can be combined with other reducers
// in the Redux store configuration.
export default todoSlice.reducer;

// 1. Store bnao
// 2. Slicee - name,initialstate,reducer
// 3. State aur action milega reducers m
// 4. Individual refucers ko export krlo
// 5. Reducer ko bhi export krnaa (main source)
// 6. Components m usedispatch nd useselector use krlooo... Useselector m state ka access hoga

//Redux toolkit ki notes
// 1. Create Store - single source of truth
// it has configureStore
// introduce reducer

// 2. Create Slice(functions) method(createSlice)
// Slice has name, initialState, reducers :{key: function}
// Access of two things (State, action)
// state = state value in the store
// action = action.payload
// export individual functionality
// export main source export

// 3. Add Todo - Give values to State i.e Dispatch Courier  = use method useDispatch()
//  dispatch(addTodo())

// 4. Take Values - useSelector((state) =>state.todos) state ka access chaiye
// variable me values lelo ek baar aagaie uske baad pure JS concept hai

// Note: Todo's Project basic nai hote xD  :)
