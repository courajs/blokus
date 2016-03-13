import React from 'react';
import Blok from './Blok.jsx';
import Spacer from './Spacer.jsx';

export const pieceTypes = [
  [[true]],                     //  x

  [[true, true]],               //  xx

  [[true, true, true]],         //  xxx

  [[true, false],               //  x
  [true, true]],                //  xx

  [[true, true],                //  xx
  [true, true]],                //  xx

  [[true, true, false],         //  xx
  [false, true, true]],         //   xx

  [[true, false],               //  x
  [true, false],                //  x
  [true, true]],                //  xx

  [[true, true, true],          //  xxx
  [false, true, false]],        //   x

  [[true],                      //  x
  [true],                       //  x
  [true],                       //  x
  [true]],                      //  x

  [[false, true, true],         //   xx
  [true, true, false],          //  xx
  [false, true, false]],        //   x

  [[true, false],               //  x
  [true, false],                //  x
  [true, false],                //  x
  [true, true]],                //  xx

  [[true],                      //  x
  [true],                       //  x
  [true],                       //  x
  [true],                       //  x
  [true]],                      //  x

  [[true, true],                //  xx
  [true, true],                 //  xx
  [true, false]],               //  x

  [[true, true, true],          //  xxx
  [false, true, false],         //   x
  [false, true, false]],        //   x

  [[true, false, true],         //  x x
  [true, true, true]],          //  xxx
  
  [[false, false, true],        //    x
  [false, false, true],         //    x
  [true, true, true]],          //  xxx

  [[false, false, true],        //    x
  [false, true, true],          //   xx
  [true, true, false]],         //  xx

  [[false, true, false],        //   x
  [true, true, true],           //  xxx
  [false, true, false]],        //   x

  [[false, true, false, false], //    x
  [true, true, true, true]],    //  xxxx

  [[true, true, false],         //  xx
  [false, true, false],         //   x
  [false, true, true]]          //   xx
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
