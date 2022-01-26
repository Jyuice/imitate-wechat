import React, { Component, Fragment } from "react";
// import avatar from "../../assets/images/avatar.jpg";

export default class NameCard extends Component {
  render() {
      const {list} = this.props
    return (
      <Fragment>
        <div className="name-card-wrap">
          <div className="left">
            <div className={`avatar-container ${list.color ? list.color : ''}`}>
              {list.icon ? <div className="icon" dangerouslySetInnerHTML={{__html: list.icon}}></div> : <img src={list.avatar} alt="" />}
            </div>
            <div className="name">{list.nickname}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}
