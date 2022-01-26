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
        <Button style={{fontSize: "1.2em", color: "#555F85"}}>
        <svg t="1627724330461" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="130768" width="25" height="25"><path d="M856 305.6c-9.6 0-17.6 3.2-25.6 9.6L640 473.6V400c0-48-40-88-88-88h-336C168 312 128 352 128 400v160c0 12.8 11.2 24 24 24S176 572.8 176 560V400c0-22.4 17.6-40 40-40h336c22.4 0 40 17.6 40 40v224c0 22.4-17.6 40-40 40h-272c-12.8 0-24 11.2-24 24s11.2 24 24 24h272c48 0 88-40 88-88v-73.6l190.4 158.4c6.4 6.4 16 9.6 25.6 9.6 9.6 0 20.8-3.2 27.2-11.2 8-8 12.8-17.6 12.8-28.8V345.6c0-20.8-17.6-40-40-40zM848 660.8L668.8 512 848 363.2v297.6z" p-id="130769" fill="#555F85"></path></svg>
            音视频通话</Button>
      </div>
    );
  }
}

export default withRouter(BusinessCard)