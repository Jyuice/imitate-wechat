import React, { Component, Fragment } from "react";
import { List, WhiteSpace } from "antd-mobile";
import { withRouter } from "react-router-dom";

const Item = List.Item;

class ListItem extends Component {
  state = {
    disabled: false,
  };

  render() {
    const { icon, name, blank=false, target="", clickEvt=() => {} } = this.props.list;
    return (
      <Fragment>
        <Item
          thumb={
            <div
              className="icon"
              dangerouslySetInnerHTML={{ __html: icon }}
            ></div>
          }
          arrow="horizontal"
          onClick={() => {
            this.props.history.push(target)
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