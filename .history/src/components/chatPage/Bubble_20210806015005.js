import React, { Component } from "react";
import baseUrl from "../../utils/baseUrl";
import { getUserInfo } from "../../api/user";

export default class Bubble extends Component {
  constructor(props) {
    super(props);
    const { initMsgList } = this.props
    this.state = {
      leftAvatar: baseUrl + this.props.avatar,
      rightAvatar: "",
      msgList: initMsgList
    };
  }

  componentDidMount() {
    if (!localStorage.getItem("avatar")) {
      getUserInfo(localStorage.getItem("userId")).then((res) => {
        this.setState({
          rightAvatar: baseUrl + res.avatar,
        });
      });
    } else {
      this.setState({
        rightAvatar: baseUrl + localStorage.getItem("avatar"),
      });
    }
  }

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
          <div className="bubble"></div>
        </div>
      );
    } else {
      return (
        <div class="chat-right-bubble">
          <div className="bubble"></div>
          <img src={this.state.rightAvatar} className="avatar" alt="" />
        </div>
      );
    }
  }
}
