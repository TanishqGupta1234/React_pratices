import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(15); // use camelCase

  const addValues = () => {
    setCounter(counter + 1); // Increments state
  };

  const removeValues = () => {
    setCounter(counter - 1); // Decrements state
  };

  return (
    <>
      <h1>Tanishq</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={addValues}>
        Add Value
      </button>

      <br /><br />

      <button onClick={removeValues}>
        Remove Value
      </button>
    </>
  );
}

export default App;
