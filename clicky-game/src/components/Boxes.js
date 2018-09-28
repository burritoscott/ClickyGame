import React, { Component } from "react";
import "../styles/Boxes.css";


const imageArr = ["../images/boswer.jpeg"]

for(var key in imageArr){
  var arrIndex = imageArr[key].jpeg();
  var image = arrIndex.image("<img>")

}


class Boxes extends Component {

  state = {
    imageArr = ["../images/boswer.jpeg"],
    score = 0,
    highScore = 0
  };

  //this will keep track of the score and have a conditional statment if score = highScore - then replace highScore
scoreCounter = () => {

}

  render() {
      this.state.imageArr.map(images => {
        return 

    
        }

      // <div className="Boxes">
      // TEST!
      // </div>

  }//render end }
}//component end }
export default Boxes;

//shuffle(this.state.data).map ------