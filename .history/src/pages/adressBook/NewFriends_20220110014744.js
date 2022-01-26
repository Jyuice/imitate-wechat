import React, { Component } from "react";
import SimpleNav from "../../components/common/SimpleNav";
import PubSub from "pubsub-js";
import { getApplication, addFriend } from "../../api/user";
import baseUrl from "../../utils/baseUrl";
import { io } from "socket.io-client";
import { postMsg } from "../../api/chat";

const socket = io.connect('ws://106.52.45.38:6050/home/chat')

export default class NewFriends extends Component {
  state = {
    applicationList: [],
  };

  componentDidMount() {
    this.getApplication();
  }

  getApplication = () => {
    getApplication(localStorage.getItem("userId")).then((res) => {
      this.setState({
        applicationList: res,
      });
    });
  };

  renderInner = () => {
    if (!this.state.applicationList.length) {
      return;
    } else {
      const { applicationList } = this.state;
      return applicationList.map((i) => (
        <div className="name-card-wrap" key={i.user_id + Math.random()}>
          <div className="left">
            <div className="avatar-container">
              <img src={baseUrl + i.avatar} alt="" />
            </div>
            <div className="name">{i.nickname}</div>
          </div>
          <div className="right">
              {
                i.state !== 2 ? (
                  i.state ? 
                  <div className="text">已接受</div> :
                  <button className="btn" id={i.user_id} onClick={this.doAdd}>接受</button>
                )
                :
                (<div className="text">已过期</div>)
              }
          </div>
        </div>
      ));
    }
  };

  // 同意添加好友
  doAdd = e => {
    addFriend({
        userId: localStorage.getItem("userId"),
        friendId: e.target.id
    }).then(res => {
        if(res.status === 200) {
            let newList = this.state.applicationList
            let i = 0
            this.state.applicationList.filter((application, index) => {
                i = index
                return application.user_id === e.target.id
            })
            newList[i].state = 1
            this.setState({
                applicationList: newList
            })

            // 发消息
            let data = {
              userId: localStorage.getItem("userId"),
              receiverId: e.target.id,
              msg: "我们已经是好友了，快来聊天吧！",
              type: 0
            }
            postMsg(data)
            socket.emit("send-message", localStorage.getItem("userId"), e.target.id, "我们已经是好友了，快来聊天吧！")
        }
    })
  }

  render() {
    PubSub.publish("HIDE NAVBAR", true);
    PubSub.publish("HIDE TABBAR", true);
    return (
      <div>
        <SimpleNav title={"添加好友"}></SimpleNav>
        {this.renderInner()}
      </div>
    );
  }
}
