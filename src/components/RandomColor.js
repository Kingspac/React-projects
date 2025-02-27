import {useState} from "react";
import '../App.css';

function RandomColor(){
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#00000");
  
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
      >Hex Colors</button>
      <button onClick={()=> setTypeOfColor("rgb")}
      >rgb Colors</button>
      <button onClick={handleCreateRandomColor}
      >Generate Colors</button>
    </div>
    )
}
export default RandomColor;