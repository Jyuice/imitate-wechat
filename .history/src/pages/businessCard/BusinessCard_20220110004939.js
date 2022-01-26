import React, { Component, Fragment } from "react";
import { NavBar, Icon, Button, WhiteSpace, Modal, Toast } from "antd-mobile";
import { Popup } from 'antd-mobile-v5'
// import { withRouter } from "react-router-dom";
import IdentityCard from "../../components/businessCard/IdentityCard";
import ListItem from "../../components/common/ListItem";
import { getUserInfo, isFriend, sendApplication } from "../../api/user";
import PubSub from "pubsub-js";
import { io } from "socket.io-client";

const alert = Modal.alert;
const userId = localStorage.getItem("userId");

const lists = [
  {
    id: 0,
    name: "设置备注和标签",
    blank: false,
  },
  {
    id: 1,
    name: "朋友权限",
    blank: false,
  },
  {
    id: 2,
    name: "朋友圈",
    blank: true,
  },
  {
    id: 3,
    name: "更多信息",
    blank: true,
  },
];

const btnStyle = {
  fontSize: "1.2em",
  color: "#555F85",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default class BusinessCard extends Component {
  state = {
    name: "",
    avatar: "",
    wechat_Id: "",
    isFriend: true,
    popup_visible: false,
  };

  componentDidMount() {
    PubSub.publish(`HIDE NAVBAR`, true);
    PubSub.publish(`HIDE TABBAR`, true);
    // 获取这个人的userInfo
    getUserInfo(this.props.location.state.userId).then((res) => {
      this.setState({
        userId: this.props.location.state.userId,
        name: res.nickname,
        avatar: res.avatar,
        wechat_Id: res.wechat_Id,
      });
    });
    isFriend({
      userId: userId,
      otherId: this.props.location.state.userId,
    }).then((res) => {
      this.setState({
        isFriend: res,
      });
    });
  }

  goback = () => {
    this.props.history.go(-1);
  };

  renderFunc = () => {
    if (
      this.state.isFriend ||
      this.props.location.state.userId === userId*1
    ) {
      return (
        <Fragment>
          {lists.map((i) => (
            <ListItem key={i.id} list={i} />
          ))}
          <Button
            style={btnStyle}
            onClick={() => {
              this.props.history.push("/home/chat", {
                id: this.state.userId,
                name: this.state.name,
                avatar: this.state.avatar,
              });
            }}
          >
            <svg
              t="1627724255860"
              className="icon"
              style={{ marginRight: "5px" }}
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="127825"
              width="25"
              height="25"
            >
              <path
                d="M418.1504 891.3408a20.46976 20.46976 0 0 1-14.9504-34.4576l90.8288-97.024c3.8912-4.1472 9.2672-6.5024 14.9504-6.5024 202.0864 0 366.4896-125.4912 366.4896-279.7056s-164.4032-279.7056-366.4896-279.7056-366.4896 125.44-366.4896 279.7056c0 112.5376 87.9104 213.6576 223.9488 257.6896 10.752 3.4816 16.64 15.0016 13.1584 25.8048a20.4544 20.4544 0 0 1-25.8048 13.1584c-153.2416-49.5616-252.3136-166.0416-252.3136-296.6528 0-176.8448 182.784-320.6656 407.4496-320.6656s407.4496 143.872 407.4496 320.6656c0 174.4896-177.92 316.8256-398.4896 320.6144l-84.8384 90.624a20.3264 20.3264 0 0 1-14.8992 6.4512z"
                fill="#555F85"
                p-id="127826"
              ></path>
            </svg>
            发消息
          </Button>
          <Button style={btnStyle}>
            <svg
              t="1627724393305"
              className="icon"
              style={{ marginRight: "5px" }}
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="132595"
              width="25"
              height="25"
            >
              <path
                d="M179.796 369.171c-10.762 0-19.489 8.725-19.489 19.487 0 10.766 8.727 19.489 19.489 19.489 10.764 0 19.489-8.723 19.489-19.489 0-10.762-8.726-19.487-19.489-19.487z m769.18-57.106a19.409 19.409 0 0 0-19.888 0.743L705.996 460.173V349.68c0-43.053-34.904-77.953-77.955-77.953H140.818c-43.053 0-77.953 34.901-77.953 77.953v389.776c0 43.055 34.901 77.955 77.953 77.955H628.04c43.051 0 77.955-34.901 77.955-77.955v-93.93l222.94 149.59a19.454 19.454 0 0 0 19.964 0.877 19.47 19.47 0 0 0 10.239-17.15V329.174a19.473 19.473 0 0 0-10.162-17.109z m-281.96 180.688a19.547 19.547 0 0 0-0.4 3.903v112.063c0 1.321 0.14 2.624 0.4 3.894v126.845c0 21.527-17.452 38.98-38.976 38.98H140.818c-21.525 0-38.978-17.452-38.978-38.98V349.68c0-21.525 17.452-38.978 38.978-38.978H628.04c21.523 0 38.976 17.452 38.976 38.978v143.073z m253.146 249.929L705.996 598.48v-91.471l214.166-142.055v377.728z"
                p-id="132596"
                fill="#555F85"
              ></path>
            </svg>
            音视频通话
          </Button>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <WhiteSpace size="md"></WhiteSpace>
          <Button style={btnStyle} onClick={this.sendApplication}>添加到通讯录</Button>
        </Fragment>
      );
    }
  };

  // 发送好友申请
  sendApplication = () => {
    alert("", "是否确定加好友？", [
      { text: "取消", onPress: () => console.log("cancel"), style: "default" },
      {
        text: "确定",
        onPress: () => {
          Toast.success("已发送")
          const socket = io.connect('ws://106.52.45.38:6050/home/chat')
          const data = {
            userId: userId*1,
            userName: localStorage.getItem("nickname"),
            userAvatar: localStorage.getItem("avatar"),
            otherId: this.props.location.state.userId,
            fn: msg => console.log(msg) 
          }
          socket.emit("send-add", data)
          // console.log(data)
          sendApplication({
            userId: userId,
            otherId: this.props.location.state.userId
          })
        },
      },
    ]);
  }

  render() {
    return (
      <div>
        <NavBar
          style={{ background: "#fff" }}
          mode="light"
          icon={<Icon type="left" style={{ color: "black" }} />}
          onLeftClick={this.goback}
          rightContent={<Icon type="ellipsis" style={{ color: "black" }}
            onClick={() => {
              this.setState({
                popup_visible: true
              })
          }} />}
        ></NavBar>
        <IdentityCard info={this.state} />
        {this.renderFunc()}
        <Popup
          visible={this.state.popup_visible}
          onMaskClick={() => {
            this.setState({
              popup_visible: false
            })
          }}
          position='bottom'
          bodyStyle={{ minWidth: '40vw' }}
        >
          <Button>删除好友</Button>
        </Popup>
      </div>
    );
  }
}
