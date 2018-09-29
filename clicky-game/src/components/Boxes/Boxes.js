import React, { Component } from "react";
import "./Boxes.css";

var boxDisplay = document.createElement('div');

class Boxes extends Component {
  state = {
    imageArr: ["/images/boswer.jpeg"],
    score: 0,
    highScore: 0
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
    return(
      <div>
        {
          this.state.imageArr.map((imagePath) => {
            return(
<             img src={"bowser"} alt="bowser" />
            )
          })
        }
      </div>
       
      //  = () => {
        // var img = new Image();
        // img.src = this.state.imageArr;
        // document.body.appendChild(img);
      

      // <div className="Boxes">
      // TEST!
      // </div>
      )}};
export default Boxes;

//shuffle(this.state.data).map ------
