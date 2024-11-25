import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  
const [length, setLength]= useState(8);
const [numberAllowed, setNumberAllowed]= useState(false);
const [charAllowed, setCharAllowed]= useState(false);
const [password, setPassword] = useState("");

const passwordRef = useRef(null)

const passwordGenerator = useCallback(() => {
  let pass ="";
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if(numberAllowed) str += "0123456789";
  if(charAllowed) str += "~!@#$%^&*()";

  for(let i = 1; i < length; i++){
     let char = Math.floor(Math.random()*str.length+1);
     pass += str.charAt(char);
     setPassword(pass);
  }

}, [length,numberAllowed,charAllowed,setPassword]);

const copyPasswordClipboard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,4);
  window.navigator.clipboard.writeText(password);
}, [password])

useEffect(()=>{
  passwordGenerator();
},[length,charAllowed,numberAllowed,setPassword])
  return (    
    <div className='w-full h-screen bg-gray-700'>
      <h1 className='text-white text-3xl text-center w-screen'>Password Generator</h1>
      <div className='flex flex-col align-center justify-center w-1/2 mx-auto'>
      <div className='flex justify-center mt-4 mb-2'>
      <input type="text" className='text-white' value={password} readOnly ref={passwordRef}/>
      <button onClick={copyPasswordClipboard}>Copy</button>
      </div>
      <div className='flex justify-center'>
        <input type='range' min={6} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}} className='cursor-pointer'/>
        <label htmlFor="">Length: {length}</label>
        
        <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' onChange={() =>{setNumberAllowed((prev) => !prev);}} className=''/>
        <label htmlFor="numberInput">Number</label>
        
        <input type='checkbox' defaultChecked={charAllowed} id='charInput' onChange={() =>{setCharAllowed((prev) => !prev);}} className=''/>
        <label htmlFor="charInput">Char</label>       
    
      </div>
       </div>
    </div>
  )
}

export default App
