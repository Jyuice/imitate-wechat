import React, { Component } from "react";

export default class lists extends Component {
  render() {
    return (
      <div className="chat-lists-wrap">
        <div className="left">
          <div className="avatar-container">
            <img src="..//assets/images/avatar.jpg" alt="" />
          </div>
          <div>
            <div className="name">Depon</div>
            <div>哈哈哈</div>
          </div>
        </div>
        <div className="right">11:00</div>
      </div>
    );
  }
}
