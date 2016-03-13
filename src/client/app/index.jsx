import React from 'react';
import {render} from 'react-dom';
import Piece from './Piece.jsx';
import { pieceTypes } from './Piece.jsx';

let colors = ['green', 'red', 'yellow', 'blue'];

let renderedPieces = pieceTypes.map(function (_, i) {
  let color = colors[i % 4];
  return <Piece pieceType={i} color={color}/>;
});

render(<div>{renderedPieces}</div>, document.getElementById('app'));
