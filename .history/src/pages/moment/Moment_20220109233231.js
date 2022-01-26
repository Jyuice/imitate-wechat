import React, { Component, Fragment } from "react";
import PubSub from "pubsub-js";
import TopEntrance from "../../components/moment/TopEntrance";
import EachMoment from "../../components/moment/EachMoment";
import { Input } from "@chatui/core";
import { getMoments } from "../../api/moment";
import { postComment, postReply } from "../../api/comment";
import { Toast } from "antd-mobile";
import { io } from "socket.io-client";
const socket = io.connect('ws://106.52.45.38:6050/moment')

// const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
// let wrapProps;
// if (isIPhone) {
//   wrapProps = {
//     onTouchStart: e => e.preventDefault(),
//   };
// }

const $children = new Map();

export default class Moment extends Component {
  state = {
    value: "",
    clicked: "none",
    eachMoment: [],
    isShowImg: false,
    isShowInput: false,
    updateComment: {
      isUpdate: false,
      momentId: undefined,
    },
  };

  componentDidMount() {
    this.getMoments();
    this.doRealTimeUpdate()
  }

  getMoments = () => {
    getMoments(localStorage.getItem("userId")).then((res) => {
      this.setState({
        // 因为使用的是存储过程，所以要用res[0]
        eachMoment: [...res],
      });
    });
  };

  del = () => {
    return this.getMoments();
  };

  showImg = (url) => {
    this.url = url;
    this.setState({
      isShowImg: true,
    });
  };

  showInput = (id, type) => {
    // id是收到要评论的moment_id（type为0）或要回复的评论的id和其所属的moment_id，即[moment_id,comment_id]（type为1）
    this.inputType = type
    if (!(type * 1)) { // 给pyq评论
      // console.log(id,typeof(id))
      // console.log(this.momentToComment_id,typeof(this.momentToComment_id))
      this.setState({
        value: id * 1 === this.momentToComment_id * 1 ? this.state.value : "",
        isShowInput:
          id * 1 === this.momentToComment_id * 1
            ? !this.state.isShowInput
            : true,
      });
      this.momentToComment_id = id * 1;
      // console.log(this.momentToComment_id)
    }else { // 给评论回复
      this.commentId = id[1] // 要回复的那条comment的id
      this.commentor = id[2] // 要回复的那个人的名字
      this.setState({
        value: id[0] * 1 === this.moment_commentToReplyId * 1 ? this.state.value : "",
        isShowInput:
          id[0] * 1 === this.moment_commentToReplyId * 1
            ? !this.state.isShowInput
            : true,
      });
      this.moment_commentToReplyId = id[0] * 1;
    }
  };

  hideImg = () => {
    this.setState({
      isShowImg: false,
    });
    // this.momentToComment_id = null
  };

  hideInput = () => {
    this.setState({
      isShowInput: false,
    });
  };

  renderMask = () => {
    if (this.state.isShowImg) {
      return (
        <div className="img-mask" onClick={this.hideImg}>
          <img src={this.url} alt="" />
        </div>
      );
    } else {
      return;
    }
  };

  handleInput = (val) => {
    this.setState({
      value: val,
    });
  };

  renderInput = () => {
    if (this.state.isShowInput) {
      return (
        <Fragment>
          <div className="comment-input">
            <Input
              className="textarea"
              autoSize
              value={this.state.value}
              maxRows={4}
              onChange={this.handleInput}
              name=""
              id=""
              placeholder={this.inputType*1 ? `回复${this.commentor}` : "评论"}
            ></Input>
            <svg
              t="1627607851197"
              className="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="120601"
              width="25"
              height="25"
            >
              <path
                d="M512 992C247.3 992 32 776.7 32 512S247.3 32 512 32s480 215.3 480 480-215.3 480-480 480z m0-896C282.6 96 96 282.6 96 512s186.6 416 416 416 416-186.6 416-416S741.4 96 512 96z"
                fill="#515151"
                p-id="120602"
              ></path>
              <path
                d="M512 800c-78 0-151.1-30.7-205.7-86.5C253.2 659.4 224 587.8 224 512c0-17.7 14.3-32 32-32h512c17.7 0 32 14.3 32 32 0 75.8-29.2 147.4-82.3 201.5C663.1 769.3 590 800 512 800zM352 668.8c42.5 43.4 99.3 67.2 160 67.2s117.5-23.9 160-67.2c33.7-34.4 55-77.9 61.7-124.8H290.3c6.6 46.9 28 90.3 61.7 124.8zM368 416c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM656 416c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
                fill="#515151"
                p-id="120603"
              ></path>
            </svg>
            <button className="btn" onClick={this.send}>
              发送
            </button>
          </div>
          <div className="mask" onClick={this.hideInput} />
        </Fragment>
      );
    } else {
      return;
    }
  };

  send = () => {
    if(!this.inputType*1) { // 是评论朋友圈
      const data = {
        userId: localStorage.getItem("userId"),
        momentId: this.momentToComment_id,
        comment: this.state.value,
      };
      postComment(data).then((res) => {
        if (res.status === 200) {
          const updateComment = {
            isUpdate: true,
            momentId: this.momentToComment_id,
          };
          this.setState({
            updateComment: updateComment,
            value: "",
            isShowInput: false,
          });
          // console.log(this.momentToComment_id*1)
          $children.get(this.momentToComment_id * 1).updateComment();
          this.sendRealTimeUpdate(this.momentToComment_id)
        } else {
          Toast.fail("评论失败，请重试");
        }
      });
    }else { // 是回复评论
      const data = {
        userId: localStorage.getItem("userId")*1,
        commentId: this.commentId,
        momentId: this.moment_commentToReplyId,
        reply: this.state.value
      }
      postReply(data).then(res => {
        if (res.status === 200) {
          const updateComment = {
            isUpdate: true,
            momentId: this.moment_commentToReplyId,
          };
          this.setState({
            updateComment: updateComment,
            value: "",
            isShowInput: false,
          });
          // console.log(this.moment_commentToReplyId*1)
          $children.get(this.moment_commentToReplyId * 1).updateComment();
          this.sendRealTimeUpdate(this.moment_commentToReplyId)
        } else {
          Toast.fail("回复失败，请重试");
        }
      })
    }
  };

  // 评论或回复后请求实时更新
  sendRealTimeUpdate = momentId => {
    socket.emit("online")
    socket.emit("do-comment-moment", momentId, data => console.log(data))
  }

  // 接收到服务器的实时更新请求
  doRealTimeUpdate = () => {
    socket.emit("online")
    socket.on("renew-comment-area", momentId => {
      const updateComment = {
        isUpdate: true,
        momentId: momentId,
      };
      this.setState({
        updateComment: updateComment,
      });
      $children.get(momentId * 1).updateComment();
    })
  }

  getEach = (child) => {
    $children.set(child.props.id, child);
    // console.log($children)
  };

  componentWillUnmount = () => {
    this.setState = (state,callback)=>{
      return;
    };
  }

  render() {
    PubSub.publish(`HIDE NAVBAR`, true);
    PubSub.publish(`HIDE TABBAR`, true);
    const { eachMoment } = this.state;
    return (
      <div className="moment-wrap">
        {this.renderMask()}
        <TopEntrance />
        {eachMoment.map((i) => (
          <EachMoment
            key={i.moment_id}
            id={i.moment_id}
            each={i}
            del={this.del}
            showImg={this.showImg}
            showInput={this.showInput}
            updateComment={this.state.updateComment}
            getEach={this.getEach}
          />
        ))}
        <div className="end">已经到底线啦~</div>
        {this.renderInput()}
      </div>
    );
  }
}
