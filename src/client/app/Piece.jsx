import React from 'react';
import Blok from './Blok.jsx';
import Spacer from './Spacer.jsx';

export const pieceTypes = [
  [[true]],                   //    x

  [[true, true]],             //    xx

  [[true, true, true]],       //    xxx

  [[true, false],             //    x
  [true, true]]               //    xx
];


const Piece = React.createClass({
	render: function() {
    let { color, highlighted, pieceType } = this.props;
    let classes = [color, 'piece'];
    if (highlighted) { classes.push('highlighted'); }

    classes = classes.join(' ');

    let structure = pieceTypes[pieceType];
    let rows = structure.map(function(row) {
      return row
        .map((cell) => cell ? <Blok/> : <Spacer/>)
        .concat(<br/>);
    });

    return <div className={classes}>{rows}</div>;
  }
})

export default Piece;
