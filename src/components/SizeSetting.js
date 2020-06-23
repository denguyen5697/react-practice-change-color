import React, { Component } from "react";

class SizeSetting extends Component {
    changeSize = (params) => {
        //console.log(params);
        this.props.onChangeSize(params);
    };
  render() {
    return (
     
        <div className="panel panel-warning">
          <div className="panel-heading">
    <h3 className="panel-title">Size : {this.props.fontSize}px</h3>
          </div>
          <div className="panel-body">
            <button type="button" className="btn btn-success" onClick={()=>this.changeSize(-2)}>
              Giảm
            </button>
            &nbsp;
            <button type="button" className="btn btn-success" onClick={()=>this.changeSize(2)}>
              Tăng
            </button>
          </div>
        </div>
    );
  }
}

export default SizeSetting;
