import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
 let myObj ={
  a: "a",
  b: "b",
  c: "c",
 };
 let ar =[1,2,3,4];
  return (
    <>
    <h1 className='bg-green-300 text-slate-600'>Hello</h1>
    <Card name="khushwinder" someObj = {myObj} Ar={ar}/>
    <Card name="Amrinder" someObj = {myObj} Ar={ar}/>
    </>
  )
}

export default App
