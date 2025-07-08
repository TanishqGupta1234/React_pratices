import "./App.css";
import React from 'react';
import Cards from "./Components/Cards";

function App() {

  let myIbj ={
    name: "tanishq",
    age  : 21
  }

  let newArr =[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black'>tanishq is great</h1>
      <Cards channel = "tanishq" someObj = {newArr}/>
 
    </>
  );
}

export default App;
