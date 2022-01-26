import React, { Component } from "react";
import SimpleNav from "../../../components/common/SimpleNav";
import ListItem from "../../../components/common/ListItem";
import baseUrl from "../../../utils/baseUrl";

export default class ChangeInfo extends Component {
  constructor(props) {
    super(props);
    const { nickname, avatar, wechatId } = this.props.location.state
    this.state = {
      list: [
        {
          id: 0,
          name: "头像",
          extra: `<img src=${baseUrl + avatar} alt=""/>`,
          clickEvt: () => {

          }
        },
        {
          id: 1,
          name: "昵称",
          extra: nickname,
          clickEvt: () => {
              this.props.history.push('/individual/changeName',{nickname: nickname,avatar:avatar,wechatId:wechatId,type:0})
          }
        },
        {
          id: 2,
          name: "拍一拍",
        },
        {
          id: 3,
          name: "微信号",
          extra: wechatId,
          clickEvt: () => {
            this.props.history.push('/individual/changeName',{nickname: nickname,avatar:avatar,wechatId:wechatId,type:1})
        }
        },
        {
          id: 4,
          name: "二维码名片",
        },
        {
          id: 5,
          name: "更多信息",
          blank: true,
        },
        {
          id: 6,
          name: "微信豆",
          blank: true,
        },
        {
          id: 7,
          name: "我的地址",
        },
      ],
    };
  }

  componentWillUnmount = () => {
    this.setState = (state, callback) => {
      return;
    };
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        <SimpleNav title="个人信息" target="/individual" />
        {list.map((i) => (
          <ListItem key={i.id} list={i} />
        ))}
      </div>
    );
  }
}
