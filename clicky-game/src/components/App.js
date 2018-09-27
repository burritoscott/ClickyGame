import React, { Component } from "react";
import Header from "./Header";
import Boxes from "./Boxes";
import "../styles/App.css";

class App extends Component {
  state = {
    data: [1, 2, 3, 4, 5]
  };

  render() {
    return (
      <div className="App">
      <Header />
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
