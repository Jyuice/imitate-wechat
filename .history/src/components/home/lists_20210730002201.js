import React, { Component } from "react";
// import ChatPage from "../../pages/chatPage/ChatPage";
import avatar from "../../assets/images/avatar.jpg";

export default class lists extends Component {
  render() {
    const {avatar, name, lastMsg, lastTime} = this.props.list
    return (
      <div className="chat-lists-wrap">
        <div className="left">
          <div className="avatar-container">
            {/* <div dangerouslySetInnerHTML={{__html: avatar}}/> */}
            <img src={avatar} alt="" />
          </div>
          <div className="inner">
            <div className="name">{name}</div>
            <div className="content">{lastMsg}</div>
          </div>
        </div>
        <div className="right">{lastTime}</div>
      </div>
    );
  }
}
