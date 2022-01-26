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
        <svg
                t="1627505545978"
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="63909"
                width="25"
                height="25"
              >
                <path
                  d="M509.8 98.2c-220.2 0-398.7 156.2-398.7 348.9 0 110.1 58.5 208.2 149.5 272.1v176.5l174.7-106c24.2 4 49 6.3 74.5 6.3 220.2 0 398.7-156.2 398.7-348.9 0.1-192.7-178.4-348.9-398.7-348.9z"
                  p-id="63910"
                  fill="#dbdbdb"
                ></path>
              </svg>
            发消息</Button>
        <Button style={{fontSize: "1.2em", color: "#555F85"}}>音视频通话</Button>
      </div>
    );
  }
}

export default withRouter(BusinessCard)