import React, { Component } from "react";
import SimpleNav from "../../components/common/SimpleNav";
import PubSub from "pubsub-js";
import { getApplication, addFriend } from "../../api/user";
import baseUrl from "../../utils/baseUrl";

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
        <div className="name-card-wrap" key={i.user_id}>
          <div className="left">
            <div className="avatar-container">
              <img src={baseUrl + i.avatar} alt="" />
            </div>
            <div className="name">{i.nickname}</div>
          </div>
          <div className="right">
              {
                  i.state ? 
                  <div className="text">已接受</div> :
                  <button className="btn" id={i.user_id} onClick={this.doAdd}>接受</button>
              }
          </div>
        </div>
      ));
    }
  };

  doAdd = e => {
    console.log(e.target.id)
    // addFriend()
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
