import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";

export default class SimpleNav extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => {this.props.history.go(-1)}}
        >
          NavBar
        </NavBar>
      </div>
    );
  }
}
