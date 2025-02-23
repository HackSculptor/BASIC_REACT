import { useState } from 'react'
import './App.css'
import React from 'react'

function App() {

  let [number, setNumber] = useState(0)

  function increment(){
    setNumber(number + 1);
    if(number>20){
      setNumber(0);
    }
  
  }
  function decrement (){
    setNumber(number - 1);
    if(number < 1){
      setNumber(0);
    }
  }

  return (
    <>
      <div>
      <h1> counter </h1>

      <h2> THE CURRENT NUMBER IS {number}</h2>


       <button onClick={increment}> INCREMENT </button>
       <button onClick={decrement}> DECREMENT </button>

      </div>
      
    </>
  )
}

export default App
