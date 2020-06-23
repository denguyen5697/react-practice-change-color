import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "green", "blue", "purple"],
    };
  }

  showColor = (color) => {
    //console.log(this.props.color);
    return {
      backgroundColor: color,
    };
  };

  setActiveColor = (color) => {
      //console.log(color);
      this.props.onReceiveColor(color);
  };
  render() {
    var color = this.state.colors.map((color, index) => {
      return (
        <span
          key={index}
          style={this.showColor(color)}
          className={this.props.color === color ? "active" : ""}
          onClick={() => this.setActiveColor(color)}
        ></span>
      );
    });
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Color Picker</h3>
        </div>
        <div className="panel-body">
          {color}
          <hr />
        </div>
      </div>
    );
  }
}

export default ColorPicker;
