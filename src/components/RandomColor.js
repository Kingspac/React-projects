import {useState} from "react";
import '../App.css';

function RandomColor(){
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
    
    let hexColor = "#";
    
  function randomColorUtility(length){
    return Math.floor(Math.random()*length);
  }
  
  function handleCreateRandomHexColor(){
    const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    for(let i=0; i<6; i++){
      hexColor += hex[randomColorUtility(hex.length)]
    }
    setColor(hexColor)
  }
  
   function handleCreateRandomRgbColor(){
      const r =randomColorUtility(225);
      const g =randomColorUtility(225);
      const b =randomColorUtility(225);
      
      setColor(`rgb(${r},${g},${b})`);
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
      <button onClick={typeOfColor === "hex" ?  handleCreateRandomHexColor :
      handleCreateRandomRgbColor }
      >Generate Color</button>
      <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        color:"white",
        marginTop:"50px0",
        flexDirection:"column",
        gap:"20px"
      }}
      >
        <h3>{typeOfColor === 'hex' ? "HEX color" : "RGB color"}
        </h3>
        <h1>{color}</h1>
      </div>
    </div>
    )
}
export default RandomColor;