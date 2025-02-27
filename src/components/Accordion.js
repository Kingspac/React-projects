
import data from "../data.js";
import '../App.css';
import {useState } from 'react'
function Accordion(){
  const [selected, setSelected] = useState(<></>);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSingleSelection(dataCurrentItem){
    setSelected(dataCurrentItem === selected ? <></> : dataCurrentItem)
  }
  
  function handleMtiSelection(dataCurrentItem){
    let cpMultiple = [...multiple];
    const findIndexOfCurrentId = cpMultiple.indexOf(dataCurrentItem);
    console.log(findIndexOfCurrentId);
    if(findIndexOfCurrentId === -1){
      cpMultiple.push(dataCurrentItem)
    }else {
      cpMultiple.splice(findIndexOfCurrentId, 1)
    };
    setMultiple(cpMultiple);
    console.log(selected, multiple)
  }
  return( <div className="wrapper">
    <button onClick={()=> setEnableMultiSelection(!setEnableMultiSelection)}>Multi Selection</button>
    <div className="accordion">
      {data && data.length > 0 ? (
      data.map((item) => (
      <div className="item">
        <div className="title" onClick={
        enableMultiSelection ?
        ()=> handleSingleSelection(item.id) :
        ()=> handleSingleSelection(item.id)
        }>
          <h3>{item.title}</h3>
          <span>+</span>
        </div>
        {
          enableMultiSelection ? <div className="content">
           {item.desc}
         </div> : selected === item.id && <div className="content">
           {item.desc}
         </div> 
        }
       {/*( {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
         <div className="content">
           {item.desc}
         </div> 
          ) : <></>}*/}
        
      </div>
      ))
     ) : (<div>No Data Found</div>
      )}
    </div>
  </div>
    )
}
export default Accordion;