import React, { Component } from "react";

import ColorBox from "./ColorBox.component";
import Navbar from "./Navbar.component";
import "./Palette.css";

class Palette extends Component {
  state = {
    level: 500,
    format: "hex",
  };

  changeLevel = (level) => {
    this.setState({ level });
  };

  changeFormat = (val) => {
    this.setState({ format: val });
  };

  render() {
    const { colors, paletteName, emoji } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color[format]} name={color.name} key={color.id} />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />

        {/* Navbar Goes Here */}
        <div className="Palette-colors">
          {/* Many Color Boxes */}
          {colorBoxes}
        </div>
        {/* Footer */}
        <footer className="Palette-footer">
          {paletteName}
          <span className="Emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
