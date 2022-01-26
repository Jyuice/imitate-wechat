import React, { Component } from "react";
import SimpleNav from "../../components/common/SimpleNav";
import PubSub from "pubsub-js";
import { getApplication } from "../../api/user";
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
      const { applicationList } = this.state
      return (
        <div className="name-card-wrap" id={applicationList.user_id}>
          <div className="left">
            <div className="avatar-container">
                <img src={baseUrl + applicationList.avatar} alt="" />
            </div>
            <div className="name">{applicationList.nickname}</div>
          </div>
        </div>
      );
    }
  };

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
