import { useState } from 'react'

function App() {
 const [color, setColor] = useState("olive")
  return (
   <div className="w-screen h-screen duration-200 flex items-end align-bottom" style={{backgroundColor:color}}>
    <div className='w-screen h-screen flex align-bottom items-end justify-center'>
      <div className="btn-wrap flex flex-row gap-10 mb-4 rounded-full bg-white p-3">
        <a onClick={() => setColor("red")} className="btn bg-red-700 px-7 py-3 rounded-full text-white">Red</a>
        <a onClick={() => setColor("green")} className="btn bg-green-700 px-7 py-3 rounded-full text-white">Red</a>
        <a onClick={() => setColor("blue")} className="btn bg-blue-700 px-7 py-3 rounded-full text-white">Red</a>
      </div>
     </div>
   </div>
  )
}

export default App
