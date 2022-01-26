import React, { Component, Fragment } from "react";
import { List, WhiteSpace } from "antd-mobile";
import { withRouter } from "react-router-dom";

const Item = List.Item;

class ListItem extends Component {

  constructor() {
    super()
    this.avatarRef = React.createRef()
  }

  state = {
    disabled: false,
  };

  render() {
    const { icon, name,extra="", blank=false, target="", clickEvt=() => {} } = this.props.list;
    return (
      <Fragment>
        <form action=""encType="multipart/form-data" style={{display: "none"}}>
            <input ref={this.avatarRef} type="file" onChange={this.doChangeAvatar}
            name="avatar" id="" accept=".jpg,.png,.jpeg,.jfif"/>
        </form>
        <Item
          thumb={
            <div
              className="icon"
              dangerouslySetInnerHTML={{ __html: icon }}
            ></div>
          }
          extra={<div
            className="icon"
            dangerouslySetInnerHTML={{ __html: extra }}
          ></div>}
          arrow="horizontal"
          onClick={() => {
            if(target.length) this.props.history.push(target)
            clickEvt()
          }}
        >
          <span style={{fontSize: ".9em"}}>{name}</span>
        </Item>
        {blank ? <WhiteSpace size="sm" style={{background: "#EDEDED"}}/> : ''}
      </Fragment>
    );
  }
}

export default withRouter(ListItem)