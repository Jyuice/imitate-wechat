import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import baseUrl from "../../utils/baseUrl";

class NameCard extends Component {

  toBusiness = () => {
    this.props.history.push("/home/chat/business",{userId: this.props.list.id})
  }

  render() {
    const {list} = this.props
    return (
      <Fragment>
        <div className="name-card-wrap" onClick={this.toBusiness}>
          <div className="left">
            <div className={`avatar-container ${list.color ? list.color : ''}`}>
              {list.icon ? 
              <div className="icon" dangerouslySetInnerHTML={{__html: list.icon}}></div> : 
              <img  src={baseUrl + list.avatar} alt="" />}
            </div>
            <div className="name">{list.name}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(NameCard)