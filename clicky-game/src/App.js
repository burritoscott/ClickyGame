import React, { Component } from "react";
import Score from "./components/Score/Score"
import Header from "./components/Header/Header";
import Boxes from "./components/Boxes/Boxes";
import "./App.css";

class App extends Component {
  state = {
    data: [1, 2, 3, 4, 5]
  };

  //function to loop through imageArr to append images to img tags, to the index 'root' class
imageLoop = () => {
  for(var key in state.imageArr){
    var imgVal = document.createElement('img').setAttribute("value", +1);
    var img = imgVal.setAttribute("src", [key]);
    boxDisplay.appendChild(img);
  };
};

//this will keep track of the score and have a conditional statment if score = highScore - then replace highScore
scoreCounter() {

};
  render() {
    return (
      <div className="App">
      <Header />
      <Score />
      <Boxes />
        <ul>
          
          {this.state.data.map(datum => (
            <li>{datum}</li>
          ))}
        </ul>
        <div class="square-box">
          <div class="square-content">
            <div>
              <span>Aspect ratio 1:1</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

//shuffle(this.state.data).map ------
