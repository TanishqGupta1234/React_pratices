
import './App.css'
import { useState } from 'react';
function App() {

  const [Counter, setCounter] = useState(15)

  let counter = 5;

  const addValues = () =>{
    // counter = counter + 1
    // console.log(counter);
    setCounter(counter + 1)
  }
  const reomveValues = () =>{
    // counter = counter + 1
    // console.log(counter);
    setCounter(counter - 1)
  }



  return (
    <>
    <h1>tanishq</h1>
    <h1>Counter : {counter}</h1>

    <button onClick={addValues}
    >Add Values</button>
    <br />
   <button onClick={reomveValues}
   >Remove values</button>

    </>
  )
}

export default App
