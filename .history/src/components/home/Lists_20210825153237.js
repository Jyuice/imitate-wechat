import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PubSub from "pubsub-js";
import baseUrl from '../../utils/baseUrl'
import { Badge } from 'antd-mobile'
import io from 'socket.io-client'

const socket = io.connect('ws://106.52.45.38:6050/home/chat')

class Lists extends Component {

  state = {
    unread: 0,
    showBadge: false
  }

  componentDidMount() {
    this.connSocket()
  }

  componentWillUnmount = () => {
    this.setState = (state,callback)=>{
      return;
    };
  }

  toChatPage = () => {
    const { id, avatar, name } = this.props.list
    this.props.history.push("/home/chat",{id: id,name: name,avatar: avatar})
    PubSub.publish(`HIDE NAVBAR`, true)

    socket.emit("change-to-read", {
      userId: localStorage.getItem("userId"), 
      unread: this.state.unread
    })
  }

  connSocket = () => {
    socket.emit("online",localStorage.getItem("userId"))
    // socket.on('open', async msg => {
    //     console.log(msg)
    // })
    socket.on("home-receive-message", ({sender, text}) => {
      // 如果发信人是对应该条list的好友则出现红点
      console.log("home-receive-message")
      if(sender*1 === this.props.list.id) {
        this.setState({
          showBadge: true,
          unread: this.state.unread + 1
        })
        this.props.receiveNewMsg({sender, text})
      }
    })
  }

  render() {
    const { avatar, name, lastMsg, lastTime} = this.props.list
    return (
      <div className="chat-lists-wrap" onClick={this.toChatPage}>
        <div className="left">
          <div className="avatar-container">
            <img src={baseUrl + avatar} alt="" />
            {this.state.showBadge ? <Badge className="badge" text={this.state.unread} overflowCount={99} /> : ""}
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