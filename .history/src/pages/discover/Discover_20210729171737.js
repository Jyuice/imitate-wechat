import React, { Component } from 'react'
import { List } from 'antd-mobile';
import { WhiteSpace } from 'antd-mobile';

const Item = List.Item;

export default class Discover extends Component {
    state = {
        disabled: false,
      }
    
      render() {
        return (<div>
          <List>
            <Item
              thumb={<svg t="1627550009021" style={{marginTop: "3px"}} class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="91001" width="25" height="25"><path d="M649.8 405L373.1 125.5s55.1-25.4 138.3-25.4c83.3 0 138.3 22.1 138.3 22.1V405z" fill="#FC6B4F" p-id="91002"></path><path d="M681.9 534.5l2-393.2s56.9 21 115.8 79.9c58.9 58.9 82.2 113.5 82.2 113.5l-200 199.8z" fill="#7838F2" p-id="91003"></path><path d="M614.1 651.5l279.5-276.7S919 429.9 919 513.1s-22.1 138.3-22.1 138.3H614.1z" fill="#5698F3" p-id="91004"></path><path d="M486.2 687.5l393.2 2s-21 56.9-79.9 115.8C740.6 864.2 686 887.5 686 887.5l-199.8-200z" fill="#20E9F4" p-id="91005"></path><path d="M373.1 621.4l276.7 279.5s-55.1 25.4-138.3 25.4c-83.2 0-138.3-22.1-138.3-22.1V621.4z" fill="#00FD60" p-id="91006"></path><path d="M341 491.9l-2 393.2s-56.9-21-115.8-79.9S141 691.7 141 691.7l200-199.8z" fill="#ABFB5B" p-id="91007"></path><path d="M408.8 374.9L129.3 651.5s-25.4-55.1-25.4-138.3S126 374.9 126 374.9h282.8z" fill="#F0E254" p-id="91008"></path><path d="M536.7 338.8l-393.2-2s21-56.9 79.9-115.8 113.4-82 113.4-82l199.9 199.8z" fill="#F6B351" p-id="91009"></path></svg>}
              arrow="horizontal"
              onClick={() => {}}
            >My wallet</Item>
            <WhiteSpace style={{background: "grey"}} size="lg" />
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
