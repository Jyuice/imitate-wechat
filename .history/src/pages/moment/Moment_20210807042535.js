import React, { Component, Fragment } from "react";
import PubSub from "pubsub-js";
import TopEntrance from "../../components/moment/TopEntrance";
import EachMoment from "../../components/moment/EachMoment";
import { Input } from "@chatui/core";
import { getMoments } from "../../api/moment";
import { postComment } from "../../api/comment";

// const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
// let wrapProps;
// if (isIPhone) {
//   wrapProps = {
//     onTouchStart: e => e.preventDefault(),
//   };
// }

const $children = new Map()

export default class Moment extends Component {
  state = {
    value: "",
    clicked: "none",
    eachMoment: [],
    isShowImg: false,
    isShowInput: false,
    updateComment: {
      isUpdate: false,
      momentId: undefined
    }
  };

  componentDidMount() {
    this.getMoments();
  }

  getMoments = () => {
    getMoments(localStorage.getItem("userId")).then((res) => {
      this.setState({
        eachMoment: [...res],
      });
    });
  };

  del = () => {
    return this.getMoments();
  };

  showImg = url => {
    this.url = url;
    this.setState({
      isShowImg: true,
    });
  };

  showInput = id => {
    // 收到要评论的moment_id
    // console.log(id,typeof(id))
    // console.log(this.momentToComment_id,typeof(this.momentToComment_id))
    this.setState({
      value: id*1 === this.momentToComment_id*1 ? this.state.value : "",
      isShowInput:
        id*1 === this.momentToComment_id*1 ? !this.state.isShowInput : true,
    });
    this.momentToComment_id = id*1;
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

  handleInput = val => {
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
              placeholder="评论"
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
            <button className="btn" onClick={this.sendComment}>
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

  sendComment = () => {
    const data = {
      userId: localStorage.getItem("userId"),
      momentId: this.momentToComment_id,
      comment: this.state.value,
    };
    postComment(data).then((res) => {
      if(res.message==="评论成功"){
        const updateComment = {
          isUpdate: true,
          momentId: this.momentToComment_id
        }
        this.setState({
          updateComment: updateComment
        })
        console.log(this.momentToComment_id*1)
        $children.get(this.momentToComment_id*1).updateComment()
      }
    });
  };

  getEach = child => {
    $children.set(child.props.id, child)
    console.log($children)
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
