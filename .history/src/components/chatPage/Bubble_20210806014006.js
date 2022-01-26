import React, { Component } from "react";
import avatar from "../../assets/images/avatar.jpg"
import baseUrl from "../../utils/baseUrl";

export default class Bubble extends Component {
  state = {
    userType: 0, // 1是对方，0是自己
    leftAvatar: baseUrl + this.props.avatar
  };

  renderImg = () => {
    <div class="imgContainer" v-show onClick="closeImg">
      {/* <img
        class="bigPic"
        src="src"
        alt=""
        :style="{
          transform: `translateX(-50%) translateY(-50%) scale(${kx})`,
          marginLeft: ml + 'px',
          marginTop: mt + 'px'
        }"
      /> */}
    </div>;
  };

  render() {
    if (this.state.userType) {
      return (
        <div class="chat-left-bubble">
            <img src={this.state.leftAvatar} className="avatar" alt="" />
            <div className="bubble">
                
            </div>
        </div>
      );
    } else {
      return (
        <div class="chat-right-bubble">
        <div className="bubble">
            
        </div>
        <img src={avatar} className="avatar" alt="" />
    </div>
      )
    }
  }
}
