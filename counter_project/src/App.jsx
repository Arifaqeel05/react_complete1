import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue=()=>{
    //count=count+1;
    setCount(count+1);
    console.log("Value updated successfully")
  }

  const removeValue=()=>{
    setCount(count-1);
    console.log("removed successfully");
  }

  return (
    <>
      <h2>COUNTER APP MADE BY LOVE</h2>

      <h1>Counter: {count}</h1>

      <button className='btn'onClick={addValue}>ADD NUMBER</button>
      <br />
      <br />

      <button className='btn' onClick={removeValue}>REMOVE NUMBER</button>
    </>
  )
}

export default App
