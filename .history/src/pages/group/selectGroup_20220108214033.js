import React, { Component,Fragment } from "react";
import { getUserFriends } from "../../api/user";
import SimpleNav from "../../components/common/SimpleNav";
import NameCard from '../../components/adressbook/NameCard'
import { Button } from 'antd-mobile'

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

  render() {
    return (
      <Fragment>
        <SimpleNav title="发起群聊" />
        {this.state.friendsList.map(i => (
            <NameCard key={i.id} list={i} select={true}></NameCard>
        ))}
        <div className="foot">
            <Button color='success' size="mini" disabled={false}>完成</Button>
            <Button size='mini' color='danger'></Button>
        </div>
      </Fragment>
    );
  }
}
