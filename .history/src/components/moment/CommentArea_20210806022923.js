import React, { Component } from "react";
import { getComments } from "../../api/comment";
import { Input } from "@chatui/core";

export default class CommentArea extends Component {
  state = {
    list: [],
    isShowInput: false
  };

  componentDidMount() {
    this.props.getCommentArea(this)
    this.getComments()
  }

  getComments = () => {
    const data = {
      userId: localStorage.getItem("userId"),
      momentId: this.props.momentId,
    };
    getComments(data).then((res) => {
      if(res.list.length){
        this.setState({
          list: [...res.list],
        })
      }
    });
  }

  showInput = () => {
    console.log(222)
    this.setState({
      isShowInput: true
    })
  }

  render() {
    if(this.state.list.length) {
        return (
            <div className="comment-area">
              {this.state.list.map((i) => (
                <div className="box" key={i.comment_id} id={i.comment_id}>
                  <span className="name">{i.nickname}</span>：
                  <span className="inner">{i.comment}</span>
                </div>
              ))}
              {this.renderInput()}
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
    }else{
        return (
            <div>
            </div>
        )
    }
    
  }
}
