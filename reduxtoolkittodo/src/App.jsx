import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import AddTodo from './components/addTodo'

function App() {

  return (
    <>
    <AddTodo/>
     <Todo/>
    </>
  )
}

export default App
