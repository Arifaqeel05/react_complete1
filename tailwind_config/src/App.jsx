import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from '../components/Home'

function App() {
  const [count, setCount] = useState(0)

  /*to pass object as prop , first we make object and then stored in variabke and pass that varible*/

  const myobjec1={
    name:"ARIF AQEEL AHMAD KHAN",
    age:22,
    university:"COMSATS UNIVERSITY ISLAMABD , SAHIWAL CAMPUS",
  }

  return (
    <>
      <h1 className='bg-green-400'>Tailwind CSS </h1>
      <Home myobje2={myobjec1}/>
      <Home name="arif aqeel ahmad"/> 
      
    </>
  )
}

export default App
