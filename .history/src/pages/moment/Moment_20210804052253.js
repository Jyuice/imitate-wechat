import React, { Component } from "react";
import PubSub from "pubsub-js";
import TopEntrance from "../../components/moment/TopEntrance";
import EachMoment from "../../components/moment/EachMoment";

import { getMoments } from "../../api/moment";

// const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
// let wrapProps;
// if (isIPhone) {
//   wrapProps = {
//     onTouchStart: e => e.preventDefault(),
//   };
// }

export default class Moment extends Component {
  state = {
    clicked: 'none',
  }

  componentDidMount() {
    getMoments(localStorage.getItem("userId")).then(res => {
      
    })
  }

  render() {
    PubSub.publish(`HIDE NAVBAR`, true);
    PubSub.publish(`HIDE TABBAR`, true);
    return (
      <div className="moment-wrap">
        <TopEntrance />
        <EachMoment />
        <EachMoment />
        <EachMoment />
        <div className="end">已经到底线啦~</div>
      </div>
    );
  }
}
