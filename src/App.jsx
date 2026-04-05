// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import ProductTabs from './Components/ProductTabs.jsx'
// import GetData from './Components/GetData.jsx'
// import ColorPicker from './Components/ColorPicker.jsx'
// import ColorDisplay from './Components/ColorDisplay.jsx'
import { createContext, use, useState } from 'react'
// import Child1 from './Components/Child1';
import Dashboard from './Components/Dashboard';
import Login from './Components/login';

// step1 : create context
let NameContext = createContext() // -> context object
// Namecontext is container in which createContext() is a method 

function App() {

  let [isLoggedIn,setIsLoggedIn]=useState(false);
  return(
    <>
      {/* {isLoggedIn?<Dashboard/> : <Login/>} */}
      <Login/>
     </>

     
  )
}


// function App() {

//   let [name,setName]=useState("vishnu");

//   return(
//     <>
//     {/* Step 2 : Provide */}
//     {/* <NameContext.Provider value={name}>
//       <Child1/>
//     </NameContext.Provider> */}
//     </>

     
//   )
// }

// function App() {

//     let [color,setColor]=useState("Yellow");
//     console.log(color);

//   return(
//     <>
//     <ColorPicker color={color} setColor={setColor}/>
//     <ColorDisplay color={color} />
//     </>
     
//   )
  // return (
  //   <>
      {/* <GetData/> */}
     {/* <ProductTabs></ProductTabs> */}
  //     <p>Hello React</p>
  //     <h1>I am trying to learn React. it take some time but i command on the react</h1>
  //     <button>Done</button>
  //   </>
  // )
//}

export {NameContext}

export default App
