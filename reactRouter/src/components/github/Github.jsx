import React from 'react'
import { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
// Method 1 api call
//    const [data, setData] = useState([])
//     useEffect(()=>{
//           fetch('https://api.github.com/users/hiteshchoudhary')
//           .then(r=> r.json())
//           .then(data => {
//             console.log(data)
//             setData(data)})
//     },[])

// method 2 api call
const data = useLoaderData()

  return (
    <>
    <div className='text-center'>Github Followers: {data.followers}</div>
    <center>
        <img src={data.avatar_url} alt="Avatar" style={{ width: 200}}/>
    </center>
    </>
    
  )
}

export default Github

export const githubinfoloader = async() =>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}