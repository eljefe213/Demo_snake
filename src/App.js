import React, { Component } from "react";
import Snake from "./Component/Snake";
import Food from "./Component/Food";

class App extends Component {
  state = {
    food: [6, 8],
    snakeDots: [[0, 0][(2, 0)]],
  };
  render() {
    return (
      <>
        <div className="game-area">
          <Snake snakeDots={this.state.snakeDots} />
          <Food dot={this.state.food} />
        </div>
      </>
    );
  }
}

export default App;
