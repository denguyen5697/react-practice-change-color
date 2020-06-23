import React, { Component } from "react";

class Reset extends Component {
    onReset = () => {
        this.props.onReceiveReset(true);
    };
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.onReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Reset;
