import React, { Component } from "react";
import "../styles/Boxes.css";

class Boxes extends Component {
  state = {
    data: [1, 2, 3, 4, 5]
  };
  render() {
    return (
      <div className="Boxes">
        <ul>
          {this.state.data.map(datum => (
            <li>{datum}</li>
          ))}
        </ul>
       
      </div>
    );
  }
}
export default Boxes;

//shuffle(this.state.data).map ------