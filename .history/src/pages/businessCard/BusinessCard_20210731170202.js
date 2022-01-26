import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";
import { withRouter } from "react-router-dom";

class BusinessCard extends Component {
  render() {
    return (
      <div>
        <NavBar
          style={{ background: "#EEEEEE" }}
          mode="light"
          icon={<Icon type="left" style={{ color: "black" }} />}
          onLeftClick={() => {
            this.props.history.go(-1);
          }}
          rightContent={<Icon type="ellipsis" style={{ color: "black" }} />}
        >
        </NavBar>

        

      </div>
    );
  }
}

export default withRouter(BusinessCard)