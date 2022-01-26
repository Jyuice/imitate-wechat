import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";
import { withRouter } from "react-router-dom";
import PubSub from "pubsub-js";

class SimpleNav extends Component {
  render() {
    const {title, target="",isHideTabbar=false} = this.props
    return (
      <div>
        <NavBar
          style={{background: "#EEEEEE"}}
          mode="light"
          icon={<Icon type="left" style={{color: "black"}}/>}
          onLeftClick={() => {
            PubSub.publish("HIDE TABBAR", isHideTabbar)
            if(target.length) {
              this.props.history.push(target)
            }else{
              this.props.history.go(-1)
            }
          }}
        >
          {title}
        </NavBar>
      </div>
    );
  }
}

export default withRouter(SimpleNav)