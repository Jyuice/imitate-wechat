import React, { Component } from "react";
import baseUrl from "../../utils/baseUrl";
import { getUserInfo } from "../../api/user";

export default class Bubble extends Component {
  constructor(props) {
    super(props);
    const { msg } = this.props
    this.state = {
      leftAvatar: baseUrl + this.props.avatar,
      rightAvatar: "",
      msg: msg
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
    if (this.state.msg.userType) {
      return (
        <div className="chat-left-bubble">
          <img src={this.state.leftAvatar} className="avatar" alt="" />
          <div className="bubble">{this.state.msg.content}</div>
        </div>
      );
    } else {
      return (
        <div className="chat-right-bubble">
          <div className="bubble"></div>
          <img src={this.state.rightAvatar} className="avatar" alt="" />
        </div>
      );
    }
  }
}
