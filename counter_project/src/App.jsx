import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue=()=>{
    //count=count+1;
    if(count<20){
    setCount(count+1);
    console.log("Value updated successfully")
    }
    else{
      alert("VALUE CAN NOT BE INCREASED MORE");
    }
  }

  const removeValue=()=>{

    if(count>0){
    setCount(count-1);
    console.log("removed successfully");
    }

    else{
      alert("VALUE CAN NOT BE DECREASED MORE");
    }
    
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
