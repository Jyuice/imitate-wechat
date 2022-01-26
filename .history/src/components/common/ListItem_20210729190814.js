import React, { Component, Fragment } from "react";
import { List, WhiteSpace } from "antd-mobile";

const Item = List.Item;

export default class ListItem extends Component {
  state = {
    disabled: false,
  };

  render() {
    const { icon, name, blank } = this.props.list;
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
          onClick={() => {}}
        >
          {name}
        </Item>
        {blank ? <WhiteSpace size="sm" style={{background: "#EDEDED"}}/> : ''}
      </Fragment>
    );
  }
}
