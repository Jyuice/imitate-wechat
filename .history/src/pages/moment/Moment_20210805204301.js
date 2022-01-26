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
    eachMoment: [],
    isShowImg: false
  }

  componentDidMount() {
    this.getMoments()
  }

  getMoments = () => {
    getMoments(localStorage.getItem("userId")).then(res => {
      this.setState({
        eachMoment: [...res]
      })
    })
  }

  del = () => {
    return this.getMoments()
  }

  showImg = () => {
    this.setState({
      isShowImg: true
    })
  }

  renderMask = () => {
    if(this.state.isShowImg) {
      return (
        <div className="img-mask">
          <img src={this.src} alt="" />
        </div>
      )
    }else {
      return
    }
  }

  render() {
    PubSub.publish(`HIDE NAVBAR`, true);
    PubSub.publish(`HIDE TABBAR`, true);
    const { eachMoment } = this.state
    return (
      <div className="moment-wrap">
        {this.renderMask()}
        <TopEntrance />
        {eachMoment.map(i => (
          <EachMoment key={i.moment_id} each={i} del={this.del} showImg={this.showImg} />
        ))}
        <div className="end">已经到底线啦~</div>
      </div>
    );
  }
}
