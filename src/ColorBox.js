import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newValue = this.props.value - 0.1;
    // if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>   //Note: The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string
          {/* your conditional code here! */}
          {/* <ColorBox opacity={this.props.opacity - 0.1} /> */}
          {this.props.opacity >= 0.2 ? <ColorBox opacity={newValue} /> : null}
        </div>
      )
    // } else {
    //   return null
    // }
    
  }

}
