import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";
import { withRouter } from "react-router-dom";

class SimpleNav extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" style={{color: "black"}}/>}
          onLeftClick={() => {this.props.history.go(-1)}}
        >
          {this.props.title}
        </NavBar>
      </div>
    );
  }
}

export default withRouter(SimpleNav)