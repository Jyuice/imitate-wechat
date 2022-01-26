import React, { Component } from "react";
import PubSub from "pubsub-js";
import TopEntrance from "../../components/moment/TopEntrance";
import EachMoment from "../../components/moment/EachMoment";
import { ActionSheet } from "antd-mobile";

// const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
// let wrapProps;
// if (isIPhone) {
//   wrapProps = {
//     onTouchStart: e => e.preventDefault(),
//   };
// }

export default class Moment extends Component {
  // componentDidMount() {
  //     PubSub.publish(`HIDE NAVBAR`,true)
  //     PubSub.publish(`HIDE TABBAR`,true)
  // }

  showActionSheet = () => {
    const BUTTONS = [
      "Operation1",
      "Operation2",
      "Operation2",
      "Delete",
      "Cancel",
    ];
    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        destructiveButtonIndex: BUTTONS.length - 2,
        // title: 'title',
        message: "I am description, description, description",
        maskClosable: true,
        "data-seed": "logId",
        wrapProps,
      },
      (buttonIndex) => {
        this.setState({ clicked: BUTTONS[buttonIndex] });
      }
    );
  };

  render() {
    PubSub.publish(`HIDE NAVBAR`, true);
    PubSub.publish(`HIDE TABBAR`, true);
    return (
      <div className="moment-wrap">
        <TopEntrance showShell={this.showActionSheet} />
        <EachMoment />
        <EachMoment />
        <EachMoment />
        <div className="end">已经到底线啦~</div>
      </div>
    );
  }
}
