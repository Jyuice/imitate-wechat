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
        <Button style={{fontSize: "1.2em", color: "#555F85"}}>
        <svg t="1627724255860" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="127825" width="25" height="25"><path d="M418.1504 891.3408a20.46976 20.46976 0 0 1-14.9504-34.4576l90.8288-97.024c3.8912-4.1472 9.2672-6.5024 14.9504-6.5024 202.0864 0 366.4896-125.4912 366.4896-279.7056s-164.4032-279.7056-366.4896-279.7056-366.4896 125.44-366.4896 279.7056c0 112.5376 87.9104 213.6576 223.9488 257.6896 10.752 3.4816 16.64 15.0016 13.1584 25.8048a20.4544 20.4544 0 0 1-25.8048 13.1584c-153.2416-49.5616-252.3136-166.0416-252.3136-296.6528 0-176.8448 182.784-320.6656 407.4496-320.6656s407.4496 143.872 407.4496 320.6656c0 174.4896-177.92 316.8256-398.4896 320.6144l-84.8384 90.624a20.3264 20.3264 0 0 1-14.8992 6.4512z" fill="#555F85" p-id="127826"></path></svg>
            发消息</Button>
        <Button style={{fontSize: "1.2em", color: "#555F85"}}>音视频通话</Button>
      </div>
    );
  }
}

export default withRouter(BusinessCard)