import React, { Component } from "react";
import SimpleNav from "../../../components/common/SimpleNav";
import ListItem from "../../../components/common/ListItem";
import baseUrl from "../../../utils/baseUrl";
import { List } from "antd-mobile";
import { changeUserAvatar } from "../../../api/user";
import PubSub from "pubsub-js";
const Item = List.Item;

export default class ChangeInfo extends Component {
  constructor(props) {
    super(props);
    this.avatarRef = React.createRef();
    const { nickname, avatar, wechatId } = this.props.location.state;
    this.state = {
      avatar : avatar,
      list: [
        {
          id: 1,
          name: "昵称",
          extra: nickname,
          clickEvt: () => {
            this.props.history.push("/individual/changeName", {
              nickname: nickname,
              avatar: avatar,
              wechatId: wechatId,
              type: 0,
            });
          },
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
            this.props.history.push("/individual/changeName", {
              nickname: nickname,
              avatar: avatar,
              wechatId: wechatId,
              type: 1,
            });
          },
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

  doChangeAvatar = () => {
    const self = this
    const input = this.avatarRef.current
    let formData = new FormData()
    formData.append("userId",localStorage.getItem("userId"))
    formData.append('avatar', input.files[0])
    changeUserAvatar(formData).then(res => {
        if(res.message === "上传成功") {
            self.setState({
                avatar: res.url
            })
            PubSub.publish(`CHANGE AVATAR`,res.url)
        }
    })
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <SimpleNav title="个人信息" target="/individual" />
        <form
          action=""
          encType="multipart/form-data"
          style={{ display: "none" }}
        >
          <input
            ref={this.avatarRef}
            type="file"
            onChange={this.doChangeAvatar}
            name="avatar"
            id=""
            accept=".jpg,.png,.jpeg,.jfif"
          />
        </form>
        <Item
          thumb={
            <div></div>
          }
          extra={<img src={baseUrl + this.state.avatar} alt=""/>}
          arrow="horizontal"
          onClick={() => {
            return this.avatarRef.current.click()
          }}
        >
          <span style={{ fontSize: ".9em" }}> 头像 </span>
        </Item>
        {list.map((i) => (
          <ListItem key={i.id} list={i} />
        ))}
      </div>
    );
  }
}
