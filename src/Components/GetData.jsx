// const FetchData=()=>{
//   let [users,setUsers] = useState([]);

//   function getUsers(){
//     let response = fetch("https://dummyjson.com/users")
//     .then((data)=>{
//       console.log(data.json())
//       setUsers(data)
//     })
//     .catch((error)=>{console.log(error)})
//   }

//   getUsers()
// }

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GetData = () => {
 
    let [users, setUsers] = useState([])
//     // let [count, setCount] = useState(0)
 
    async function getUsers(){
       try {
        let response = await axios.get("https://dummyjson.com/users")
        console.log("response:",response.data.users)
        setUsers(response.data.users)
//         // .then((data)=>{
//         //     console.log(data.json())
//         //     setUsers(data)
//         // })
//         // .catch((error)=>{console.log(error)})
       } catch (error) {
        console.log(error)
       }
    }
 
    console.log(users)
 
    // type 1: runs on every render
    // useEffect(()=>{
    //   getUsers()
    // })
 
    // type 2 : runs only on first render
    useEffect(()=>{
      getUsers()
    },[])
 
    // type 3 : runs on first render and when state inside dep array updates
    // useEffect(()=>{
    //   getUsers()
    // },[count])
 
 
  return (
    <div>
        {/* <h1>Fetch Data </h1>
 
        <button onClick={()=>setCount(--count)}>-</button>
       <p> {count} </p>
        <button onClick={()=>setCount(++count)}>+</button> */}
 
          {users.map((user)=>(
            <div>
              <h4>{user.firstName} {user.lastName}</h4>
              <p>{user.email}</p>
              <img src={user.image} />
            </div>
          ))}
 
    </div>
  )
}
 
export default GetData
 