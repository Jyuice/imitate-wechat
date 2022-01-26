import React, { Component } from "react";
import { getComments } from "../../api/comment";

export default class CommentArea extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    const data = {
      userId: localStorage.getItem("userId"),
      momentId: this.props.momentId,
    };
    getComments(data).then((res) => {
      if(res.list.length){
          console.log(111)
        this.setState({
          list: [...res.list],
        },() => {
            console.log(this.state.list);
        });
      }
    });
  }

  render() {
    return (
      <div className="comment-area">
        {this.state.list.map((i) => (
          <div className="box" key={i.comment_id} id={i.comment_id}>
            <span className="name">{i.nickname}</span>：
            <span className="inner">{i.content}</span>
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
  }
}
