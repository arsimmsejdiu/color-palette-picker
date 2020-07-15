import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./ColorBox.css";

class ColorBox extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <CopyToClipboard text={background}>
        <div style={{ background }} className="ColorBox">
          <div className="Copy-container">
            <div className="Box-content">
              <span>{name}</span>
            </div>
            <button className="Copy-button">Copy</button>
          </div>
          <span className="See-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
