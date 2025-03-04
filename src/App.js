import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion.js";
import RandomColor from "./components/RandomColor.js";
import StarsRating from "./components/StarsRating.js";
function App() {
  return (
    <div className="App">
      {/* <Accordion />
      <RandomColor />*/}
      <StarsRating noOfStars={10}/>
    </div>
  );
}

export default App;
