import React, { Component, Fragment } from "react";
import { getComments, deleteComment } from "../../api/comment";
import { Modal } from "antd-mobile";

const alert = Modal.alert;

export default class CommentArea extends Component {
  state = {
    list: [],
    isShowFunc: [],
  };

  componentDidMount() {
    this.getComments();
    this.props.getCommentArea(this);
    // console.log(this.props.updateComment)
  }

  getComments = (momentId=this.props.momentId) => {
    const data = {
      userId: localStorage.getItem("userId"),
      momentId: momentId,
    };
    getComments(data).then((res) => {
      this.setState({
        list: [...res.list],
        isShowFunc: new Array(res.list.length).fill(false)
      });
    });
  };

  delComment = (commentId) => {
    alert("", "确定删除？", [
      { text: "取消", onPress: () => console.log("cancel"), style: "default" },
      {
        text: "确定",
        onPress: () => {
          const data = {
            userId: localStorage.getItem("userId"),
            commentId: commentId,
          };
          deleteComment(data).then((res) => {
            this.getComments(this.props.momentId);
          });
        },
      },
    ]);
  }

  touchStart = index => {
    this.timeOutEvent = setTimeout(() => {
      const newArr = this.state.isShowFunc
      newArr[index] = true
      this.setState({
        isShowFunc: newArr
      })
    }, 800);
    this.index = index
  };

  touchMove = () => {
    clearTimeout(this.timeOutEvent);
  };

  touchEnd = () => {
    clearTimeout(this.timeOutEvent);
  };

  hideFunc = () => {
    const newArr = this.state.isShowFunc
    newArr[this.index] = false
    this.setState({
      isShowFunc: newArr
    })
  }

  renderFunc = (commentId, userId, index) => {
    if(this.state.isShowFunc[index]) {
      if(userId === localStorage.getItem("userId")){
        return (
          <Fragment>
            <div className="func">
              <div className="item">复制</div>
              <div className="item" onClick={() => {this.delComment(commentId)}}>删除</div>
            </div>
            <div className="mask" onClick={this.hideFunc}></div>
          </Fragment>
        )
      }else{
        return (
          <Fragment>
            <div className="func">
              <div className="item">复制</div>
            </div>
            <div className="mask" onClick={this.hideFunc}></div>
          </Fragment>
        )
      }
    }else{
      return
    }
  }

  renderReply = item => {
    if(item.type*1) { // 0是评论，1是回复
      return (
        <Fragment>
          <span className="reply-action">回复</span>
          <span className="name">{item.opposite}</span>
        </Fragment>
      )
    }else{
      return
    }
  }

  toReply = arr => {
    // console.log(id)
    if(arr[3] !== localStorage.getItem("userId")){ // 不能回复自己
      this.props.toReply(arr,1)
    }
  }

  render() {
    if (this.state.list.length) {
      return (
        <div className="comment-area">
          {this.state.list.map((i,index) => (
            <div className="box"
            onClick={() => this.toReply([i.moment_id,i.comment_id,i.nickname,i.commentor_id])}
            onTouchStart={() => this.touchStart(index)}
            onTouchMove={this.touchMove} 
            onTouchEnd={this.touchEnd}
            key={i.comment_id} id={i.comment_id}>
              <span className="name">{i.nickname}</span>
              {this.renderReply(i)}
              ：
              <span className="inner">{i.comment}</span>
              {this.renderFunc(i.comment_id,i.commentor_id,index)}
            </div>
          ))}
        </div>
      );
    } else {
      return <Fragment></Fragment>;
    }
  }
}
