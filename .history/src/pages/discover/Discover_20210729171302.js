import React, { Component } from 'react'
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

export default class Discover extends Component {
    state = {
        disabled: false,
      }
    
      render() {
        return (<div>
          <List renderHeader={() => 'Icon in the left'}>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >My wallet</Item>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              onClick={() => {}}
              arrow="horizontal"
            >
              My Cost Ratio
            </Item>
          </List>
        </div>);
      }
}
