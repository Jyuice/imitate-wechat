import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PubSub from 'pubsub-js';

class Lists extends Component {

  toChatPage = () => {
    this.props.history.push("/home/chat")
    PubSub.publish(`HIDE TABBAR`, true)
  }

  render() {
    const { avatar, name, lastMsg, lastTime} = this.props.list
    return (
      <div className="chat-lists-wrap" onClick={this.toChatPage}>
        <div className="left">
          <div className="avatar-container">
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

export default withRouter(Lists)