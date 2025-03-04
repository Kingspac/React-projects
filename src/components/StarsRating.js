import {FaStar} from "react-icons/fa";
import {useState} from "react";
import '../App.css';
function StarsRating({noOfStars = 5}){
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(getCurrentIndex){
    setRating(getCurrentIndex)
  }
  function handleMouseEnter(getCurrentIndex){
    setHover(getCurrentIndex)
  }
  function handleMouseLeave(){
    setHover(rating)
  }
  return(
    <div className="stars-rating">
    {
        [...Array(noOfStars)].map((_,index)=> {
      index += 1;
      return(
      <FaStar
      key={index}
      className={index <= (hover || rating) ? "active" : "inactiive"}
      onClick={()=>handleClick(index)}
      onMouseMove={()=>handleMouseEnter(index)}
      OnMouseLeave={()=>handleMouseLeave()}
      size={40}
    />
    );
        })}
  </div>
    )
};
export default StarsRating;
  
    