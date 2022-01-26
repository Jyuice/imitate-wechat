import React, { Component, Fragment } from "react";
import { getComments } from "../../api/comment";

export default class CommentArea extends Component {
  state = {
    list: [],
    isShowFunc: [],
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
          isShowFunc: new Array(res.list.length).fill(false)
        });
      }
    });
  };

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

  touchMove = e => {
    e.preventDefault()
    clearTimeout(this.timeOutEvent);
  };

  touchEnd = e => {
    e.preventDefault()
    clearTimeout(this.timeOutEvent);
  };

  hideFunc = () => {
    console.log("123")
    const newArr = this.state.isShowFunc
    newArr[this.index] = false
    this.setState({
      isShowFunc: newArr
    })
  }

  renderFunc = (userId, index) => {
    if(this.state.isShowFunc[index]) {
      if(userId === localStorage.getItem("userId")){
        return (
          <Fragment>
            <div className="func">
              <div className="item">复制</div>
              <div className="item">删除</div>
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

  render() {
    if (this.state.list.length) {
      return (
        <div className="comment-area">
          {this.state.list.map((i,index) => (
            <div className="box" 
            onTouchStart={() => this.touchStart(index)}
            onTouchMove={this.touchMove} 
            onTouchEnd={this.touchEnd}
                 key={i.comment_id} id={i.comment_id}>
              <span className="name">{i.nickname}</span>：
              <span className="inner">{i.comment}</span>
              {this.renderFunc(i.commentor_id,index)}
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
