import React, { Component } from "react";
import "./Boxes.css";

var boxDisplay = document.createElement('div');

class Boxes extends Component {
  state = {
    imageArr: ["/images/boswer.jpeg"],
    score: 0,
    highScore: 0
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
