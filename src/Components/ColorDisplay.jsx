import React from "react";

const ColorDisplay =({color})=>{
    return(
        <div>
            <p>Selected Color is :{color}</p>
            <div style={{width:60,height:60, backgroundColor:color}}></div>
        </div>
    )
}

export default ColorDisplay;