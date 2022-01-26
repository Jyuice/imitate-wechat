import React, { Component } from "react";
import { getUserFriends } from "../../api/user";
import SimpleNav from "../../components/common/SimpleNav";
import NameCard from '../../components/adressbook/NameCard'

const myId = localStorage.getItem('userId')

export default class selectGroup extends Component {

  state = {
      friendsList: [],
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

  getChildMsg = (...msg) => {
      console.log(...msg)
  }

  render() {
    return (
      <div className="select-group-wrap">
        <SimpleNav title="发起群聊" />
        {this.state.friendsList.map(i => (
            <NameCard key={i.id} list={i} select={true} getChildMsg={this.getChildMsg}></NameCard>
        ))}
        <div className="foot">
            <button className="btn disabled">完成</button>
        </div>
      </div>
    );
  }
}
