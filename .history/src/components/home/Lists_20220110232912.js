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

    PubSub.publish("REDUCE BADGE", this.state.unread)
  }

  connSocket = () => {
    socket.emit("online",localStorage.getItem("userId"))
    // socket.on('open', async msg => {
    //     console.log(msg)
    // })
    socket.on("receive-message", ({sender, text}) => {
      // 如果发信人是对应该条list的好友则出现红点
      if(sender*1 === this.props.list.id) {
        this.setState({
          showBadge: true,
          unread: this.state.unread + 1
        },() => {
          PubSub.publish("ADD BADGE", this.state.unread)
        })
        this.props.receiveNewMsg({sender, text})
      }
    })
  }

  fuzzUpTime = (time) => {
    const month = Number(time.slice(5, 7));
    const month_now = Number(new Date().getMonth())+1;
    const day = Number(time.slice(8, 10));
    const day_now = Number(new Date().getDate());
    const exactTime = time.slice(11,16)
    const exactDate = month + "月" + day + "日"
    // console.log(month,month_now,day,day_now,exactTime,exactDate)

    let jatlag = exactTime;
    
    if (day_now - day > 0) {
      if(day_now - day === 1) {
        jatlag = "昨天"
      }
      jatlag = exactDate
    }
    
    if (month_now - month > 0) {
      if (month_now - month === 1 && day_now - day < 30) {
        jatlag = exactDate
      } else jatlag = month_now - month + "月前"
    }
    // if (year_now - year > 0) jatlag = year_now - year + "年前"

    return jatlag
  };

  render() {
    const { avatar, name, msg, time} = this.props.list
    return (
      <div className="chat-lists-wrap" onClick={this.toChatPage}>
        <div className="left">
          <div className="avatar-container">
            <img src={baseUrl + avatar} alt="" />
            {this.state.showBadge ? <Badge className="badge" text={this.state.unread} overflowCount={99} /> : ""}
          </div>
          <div className="inner">
            <div className="name">{name}</div>
            <div className="content">{msg}</div>
          </div>
        </div>
        <div className="right">{this.fuzzUpTime(time)}</div>
      </div>
    );
  }
}

export default withRouter(Lists)