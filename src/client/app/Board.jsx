import React from 'react';

const BOARD_SIZE = 20;

const Cell = React.createClass({
  render() {
    return <div className="cell"/>;
  }
});

const Board = React.createClass({
  render() {
    let board = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
      let row = [];
      for (let j = 0; j < BOARD_SIZE; j++) {
        row.push(<Cell/>);
      }
      board.push(row.concat(<br/>));
    }

    return <div className="board">{board}</div>;
  }
});

export default Board;
