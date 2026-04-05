import React from "react";

const ColorPicker =({color,setColor})=>{

    return(
        <div>
            <label>Select Color:</label>
            <select name="" id="" onChange={(e)=>{setColor(e.target.value)}}>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
            </select>
        </div>
    )
}
export default ColorPicker;