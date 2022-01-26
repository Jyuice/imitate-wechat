import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PubSub from "pubsub-js";
import baseUrl from '../../utils/baseUrl'

class Lists extends Component {

  toChatPage = () => {
    this.props.history.push("/home/chat",{name: this.props.list.name,avatar: this.props.list.avatar})
    PubSub.publish(`HIDE NAVBAR`, true)
  }

  render() {
    const { avatar, name, lastMsg, lastTime} = this.props.list
    return (
      <div className="chat-lists-wrap" onClick={this.toChatPage}>
        <div className="left">
          <div className="avatar-container">
            <img src={baseUrl + avatar} alt="" />
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