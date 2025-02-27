import {useState} from "react";
import '../App.css';

function RandomColor(){
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  
  function handleCreateRandomColor(){
    
  }
  return(
    <div style={{
      width:"100vw",
      height:"100vh",
      background:color,
    }}
    >
      <button onClick={()=> setTypeOfColor("hex")}
      >Hex Color</button>
      <button onClick={()=> setTypeOfColor("rgb")}
      >rgb Color</button>
      <button onClick={handleCreateRandomColor}
      >Generate Color</button>
    </div>
    )
}
export default RandomColor;