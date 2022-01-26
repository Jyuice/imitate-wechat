import React, { Component, Fragment } from "react";
import imgPrefix from "../../utils/imgPrefix";

export default class NameCard extends Component {
  render() {
      const {list} = this.props
    return (
      <Fragment>
        <div className="name-card-wrap">
          <div className="left">
            <div className={`avatar-container ${list.color ? list.color : ''}`}>
              {list.icon ? 
              <div className="icon" dangerouslySetInnerHTML={{__html: list.icon}}></div> : 
              <img src={imgPrefix + list.avatar} alt="" />}
            </div>
            <div className="name">{list.name}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}
