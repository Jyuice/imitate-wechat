import React, { Component, Fragment } from "react";
import { getComments } from "../../api/comment";

export default class CommentArea extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    console.log(this.context);
    this.getComments(this.props.momentId);
    this.props.getCommentArea(this);
  }

  getComments = (momentId) => {
    const data = {
      userId: localStorage.getItem("userId"),
      momentId: momentId,
    };
    getComments(data).then((res) => {
      if (res.list.length) {
        this.setState({
          list: [...res.list],
        });
      }
    });
  };

  touchStart = () => {
    this.timeOutEvent = setTimeout(() => {
      
    }, 800);
  };

  touchMove = () => {
    clearTimeout(this.timeOutEvent);
  };

  touchEnd = () => {
    clearTimeout(this.timeOutEvent);
  };

  renderFunc = () => {
    return (
      <div className="func">
        <div className="item">复制</div>
        <div className="item">删除</div>
      </div>
    )
  }

  render() {
    if (this.state.list.length) {
      return (
        <div className="comment-area">
          {this.state.list.map((i) => (
            <div className="box" onTouchStart={this.touchStart} onTouchMove={this.touchMove} onTouchEnd={this.touchEnd}
                 key={i.comment_id} id={i.comment_id}>
              <span className="name">{i.nickname}</span>：
              <span className="inner">{i.comment}</span>
              {this.renderFunc()}
            </div>
          ))}
          {/* <div className="box">
                          <span className="name">
                              苏炳添
                          </span>
                          <span className="reply-action">回复</span>
                          <span className="name">马龙</span>
                          ：
                          <span className="inner">
                              恭喜龙队斩获冠军呀！
                          </span>
                      </div> */}
        </div>
      );
    } else {
      return <Fragment></Fragment>;
    }
  }
}
