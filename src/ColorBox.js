import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const opacity = this.props.opacity;
      return (
        <div className="color-box" style={{opacity: opacity}}>   
        {/* //Note: The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string */}
          {opacity >= 0.2 ? <ColorBox opacity={opacity - 0.1} /> : null}
        </div>
      )
      }
    
  }