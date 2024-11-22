import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(20);

  const addValue = ()=>{
    if(counter < 20){
    setCounter(counter + 1);
  }
  }
  const removeValue = ()=>{
 if(counter > 0){
    setCounter(counter - 1);
  }
  }
  return (
    <>
     <h1>Hello {counter}</h1>
     <h2>Counter Value: {counter}</h2>
     <button onClick={addValue}>Add value {counter}</button>
     <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
