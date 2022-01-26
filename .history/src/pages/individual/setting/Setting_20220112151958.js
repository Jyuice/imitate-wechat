import React, { Component } from "react";
import SimpleNav from "../../../components/common/SimpleNav";
import ListItem from "../../../components/common/ListItem";
import { Button, WhiteSpace, Modal } from "antd-mobile";
import PubSub from "pubsub-js";
import { withRouter } from "react-router-dom";

const lists = [
  {
    id: 0,
    name: `账号与安全`,
    blank: false,
  },
  {
    id: 1,
    name: `青少年模式`,
    blank: true,
  },
  {
    id: 2,
    name: `新消息提醒`,
    blank: false,
  },
  {
    id: 3,
    name: `账号与安全`,
    blank: false,
  },
  {
    id: 4,
    name: `勿扰模式`,
    blank: false,
  },
  {
    id: 5,
    name: `聊天`,
    blank: false,
  },
  {
    id: 6,
    name: `隐私`,
    blank: false,
  },
  {
    id: 7,
    name: `通用`,
    blank: true,
  },
  {
    id: 8,
    name: `关于微信`,
    blank: false,
  },
  {
    id: 9,
    name: `帮助与反馈`,
    blank: true,
  },
  {
    id: 10,
    name: `插件`,
    blank: true,
  },
];

const alert = Modal.alert;

class Setting extends Component {
  showModel = () => {
    alert("退出", "是否确定退出当前帐号？", [
      { text: "取消", onPress: () => {} },
      { text: "确定", onPress: () => {
        localStorage.removeItem("userId")
        localStorage.removeItem("nickname")
        localStorage.removeItem("avatar")
        localStorage.removeItem("moment_bg")
        PubSub.publish(`INIT SELECTED`,"/home")
        this.props.history.push('/login')
      } },
    ]);
  };

  render() {
    return (
      <div>
        <SimpleNav
          title="设置"
          // evt={() => {
          //   PubSub.publish("HIDE TABBAR", false);
          // }}
        />
        {lists.map((i) => (
          <ListItem key={i.id} list={i} />
        ))}
        <Button style={{ fontSize: ".95em" }}>切换账号</Button>
        <WhiteSpace size="sm" />
        <Button style={{ fontSize: ".95em" }} onClick={this.showModel}>
          退出
        </Button>
      </div>
    );
  }
}

export default withRouter(Setting)