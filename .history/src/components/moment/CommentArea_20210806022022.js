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

  }

  renderInput = () => {
    if(this.state.isShowInput) {
      return (
        <div className="comment-input">
          <Input className="textarea" autoSize value={this.state.value} maxRows={8}
            onChange={this.handleInput} name="" id=""></Input>
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
        </div>
      )
    }else {
      return
    }
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
            <span></span>
        )
    }
    
  }
}
