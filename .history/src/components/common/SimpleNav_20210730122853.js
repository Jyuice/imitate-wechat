import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";
import { withRouter } from "react-router-dom";

class SimpleNav extends Component {
  render() {
    const {title, evt} = this.props
    return (
      <div>
        <NavBar
          style={{background: "#EEEEEE"}}
          mode="light"
          icon={<Icon type="left" style={{color: "black"}}/>}
          onLeftClick={() => {
            this.props.history.go(-1)
            evt()
          }}
        >
          {title}
        </NavBar>
      </div>
    );
  }
}

export default withRouter(SimpleNav)