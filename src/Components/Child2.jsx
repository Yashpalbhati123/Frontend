import React, { useContext } from "react";
import { NameContext } from "../App";

const Child2 = ()=>{
    let username = useContext(NameContext)
    return(
        <div>Hello My name is :{username}</div>
    )
}
export default Child2;