import React, { Component } from "react";
import { getUserFriends } from "../../api/user";
import SimpleNav from "../../components/common/SimpleNav";
import NameCard from '../../components/adressbook/NameCard'
import { Modal, Toast } from "antd-mobile";
import { setUpGroup } from "../../api/group";

const myId = localStorage.getItem('userId')

export default class selectGroup extends Component {

  state = {
      friendsList: [],
      checkList: [],
      disabled: true,
  }

  componentDidMount() {
    this.getFriends()
  }


  getFriends = () => {
      getUserFriends(myId).then(res => {
          console.log(res)
          this.setState({
            friendsList: res.friendsList.filter(i => i.id !== myId*1)
        }, () => {
            console.log(this.state.friendsList)
        })
      })
  }

//   通过子组件点击单选框改变被选名单
  getChildMsg = (...msg) => {
    const flag = msg[0]
    const checkId = msg[1]
    if(flag) {
        this.setState({
            checkList: [...this.state.checkList, checkId],
        }, () => {
            if(this.state.checkList.length >= 2 && this.state.checkList.length <= 3) {
                this.setState({
                    disabled: false
                })
            }
        })
    } else {
        this.setState({
            checkList: this.state.checkList.filter(i => i !== checkId)
        }, () => {
            if(this.state.checkList.length < 2) {
                this.setState({
                    disabled: true
                })
            }
        })
    }
  }

  handleFinish = () => {
    const { checkList } = this.state
    Modal.prompt("请输入群名称", "", [
        { text: "取消", onPress: () => console.log("cancel"), style: "default" },
        {
          text: "确定",
          onPress: value => {
            if(value.length > 10) {
                Toast.fail('群名不可超过10个字', 2)
            } else {
                const data = {
                    userId: myId,
                    name: value,
                    member1: checkList[0] ? checkList[0] : null,
                    member2: checkList[1] ? checkList[1] : null,
                    member3: checkList[2] ? checkList[2] : null
                }
                console.log(data)
                setUpGroup(data)
            }
          },
        },
      ],'default', '群聊');
  }

  render() {
    return (
      <div className="select-group-wrap">
        <SimpleNav title="发起群聊" />
        {this.state.friendsList.map(i => (
            <NameCard key={i.id} list={i} select={true} getChildMsg={this.getChildMsg}></NameCard>
        ))}
        <div className="foot">
            <button className={this.state.disabled ? 'disabled btn' : 'btn'} onClick={this.state.disabled ? null : this.handleFinish}>完成</button>
        </div>
      </div>
    );
  }
}
