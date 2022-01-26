import React, { Component,Fragment } from "react";
import { getUserFriends } from "../../api/user";
import SimpleNav from "../../components/common/SimpleNav";
import ListItem from "../../components/common/ListItem";

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
            friendsList: res.friendsList.filter(i => i.id !== myId)
        }, () => {
            console.log(this.state.friendsList)
        })
      })
  }

  render() {
    return (
      <Fragment>
        <SimpleNav title="发起群聊" />
      </Fragment>
    );
  }
}
