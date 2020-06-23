import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Reset from "./components/Reset";
import Result from "./components/Result";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 15,
    };
  }

  onSetColor = (params) => {
    console.log(params);
    this.setState({
      color: params,
    });
  };

  onChageSize = (value) => {
    //console.log(value);
    if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
      this.setState({
        fontSize: this.state.fontSize + value
      });
    }
  };

  onReceiveReset = (value) => {
    if (value){
    this.setState({
      fontSize: 16,
      color: 'red'
    });
  }
  };

  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <ColorPicker
              color={this.state.color}
              onReceiveColor={this.onSetColor}
            />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting
              fontSize={this.state.fontSize}
              onChangeSize={this.onChageSize}
            />
            <Reset onReceiveReset={this.onReceiveReset}/>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Result color={this.state.color} fontSize={this.state.fontSize} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
