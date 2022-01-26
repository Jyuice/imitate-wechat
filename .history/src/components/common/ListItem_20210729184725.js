import React, { Component } from "react";
import { List } from "antd-mobile";

const Item = List.Item;

export default class ListItem extends Component {
  state = {
    disabled: false,
  };

  render() {
    const {icon, name} = this.props.list
    return (
        <Item
            thumb={<div className="icon" dangerouslySetInnerHTML={{__html: icon}}></div>}
            arrow="horizontal"
            onClick={() => {}}
          >
            {name}
          </Item>
    );
  }
}
