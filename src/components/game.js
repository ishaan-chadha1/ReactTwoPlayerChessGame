import React from "react";
import Board from './board.js';

import './game.css'; // Importing the CSS file for styling

export default class Game extends React.Component {
  render() {
    return (
      <div className="game-container"> {/* Added a class to center align */}
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
        </div>
      </div>
    );
  }
}
