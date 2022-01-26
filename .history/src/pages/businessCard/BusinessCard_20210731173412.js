import React, { Component } from "react";
import { NavBar, Icon, Button } from "antd-mobile";
import { withRouter } from "react-router-dom";
import IdentityCard from "../../components/businessCard/IdentityCard";
import ListItem from "../../components/common/ListItem"

const lists = [
    {
        id: 0,
        name: "设置备注和标签",
        blank: false
    },{
        id: 1,
        name: "朋友权限",
        blank: false
    },{
        id: 2,
        name: "朋友圈",
        blank: true
    },{
        id: 3,
        name: "更多信息",
        blank: true
    },
]

class BusinessCard extends Component {
  render() {
    return (
      <div>
        <NavBar
          style={{ background: "#fff" }}
          mode="light"
          icon={<Icon type="left" style={{ color: "black" }} />}
          onLeftClick={() => {
            this.props.history.go(-1);
          }}
          rightContent={<Icon type="ellipsis" style={{ color: "black" }} />}
        >
        </NavBar>
        <IdentityCard/>
        {lists.map(i => (
            <ListItem key={i.id} list={i}/>
        ))}
        <Button style={{fontSize: "1em"}}>发消息</Button>
        <Button style={{fontSize: "1em"}}>音视频通话</Button>
      </div>
    );
  }
}

export default withRouter(BusinessCard)