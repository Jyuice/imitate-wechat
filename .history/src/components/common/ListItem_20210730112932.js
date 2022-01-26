import React, { Component, Fragment } from "react";
import { List, WhiteSpace } from "antd-mobile";
import { withRouter } from "react-router-dom";

const Item = List.Item;

class ListItem extends Component {
  state = {
    disabled: false,
  };

  render() {
    const { icon, name, blank, clickEvent } = this.props.list;
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
          onClick={clickEvent}
        >
          {name}
        </Item>
        {blank ? <WhiteSpace size="sm" style={{background: "#EDEDED"}}/> : ''}
      </Fragment>
    );
  }
}

export default withRouter(ListItem)