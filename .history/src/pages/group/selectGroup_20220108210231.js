import React, { Component,Fragment } from "react";
import { getUserFriends } from "../../api/user";
import SimpleNav from "../../components/common/SimpleNav";
import ListItem from "../../components/common/ListItem";

const myId = localStorage.getItem('userId')

export default class selectGroup extends Component {

    componentDidMount() {
        getUserFriends()
    }


  getFriends = () => {
      getUserFriends(myId).then(res => {
          console.log(res)
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
