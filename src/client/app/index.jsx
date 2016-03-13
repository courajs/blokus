import React from 'react';
import {render} from 'react-dom';

var Blok = React.createClass({
  render: function() {
    return <div className="blok">
						<div className="inner-blok"/>
           </div>;
  }
});
var Spacer = React.createClass({
	render: function() {
  	return <div className="blok-spacer"/>;
  }
});

function createPiece(structure) {
	return React.createClass({
  	render: function() {
      let classes = this.props.color + ' piece';
      if (this.props.highlighted) { classes += ' highlighted'; }

      let rows = structure.map(function(row) {
        return row.map(function(cell) {
          return cell ? <Blok/> : <Spacer/>;
        }).concat(<br/>);
      });


	    return <div className={classes}>{rows}</div>;
    }
  })
}

var pieces = [
	createPiece([[true, true],
              [false, true]])
];

var Piece = React.createClass({
	render: function() {
    var TypePiece = pieces[this.props.pieceType];
  	return <TypePiece color={this.props.color} highlighted={this.props.highlighted}/>;
  }
})

render(<div>
         <Piece color="green" pieceType={0}/>
         <Piece highlighted={true} color="red" pieceType={0}/>
         <Piece color="yellow" pieceType={0}/>
         <Piece color="blue" pieceType={0}/>
       </div>, document.getElementById('app'));
