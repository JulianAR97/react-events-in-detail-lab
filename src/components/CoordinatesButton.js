// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick(e) {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  }
  
  render() {
    return(
      <button onClick={this.handleClick.bind(this)}>CoordinatesButton</button>
    )
  }
}

export default CoordinatesButton;
