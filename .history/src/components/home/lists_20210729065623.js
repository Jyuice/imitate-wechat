import React, { Component } from "react";
import avatar from '../../assets/images/avatar.jpg'

export default class lists extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className="chat-lists-wrap">
        <div className="left">
          <div className="avatar-container">
            <img src={avatar} alt="" />
          </div>
          <div className="inner">
            <div className="name">Depon</div>
            <div className="content">哈哈哈</div>
          </div>
        </div>
        <div className="right">11:00</div>
      </div>
    );
  }
}
