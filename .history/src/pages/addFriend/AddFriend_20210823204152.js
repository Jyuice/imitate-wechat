import React, { Component } from "react";
import { SearchBar, WhiteSpace } from "antd-mobile";

export default class AddFriend extends Component {

    state = {
      value: '美食',
    };

    componentDidMount() {
      this.autoFocusInst.focus();
    }

    onChange= (value) => {
      this.setState({ value });
    };

    clear = () => {
      this.setState({ value: '' });
    };
    
    handleClick = () => {
      this.manualFocusInst.focus();
    }

  render() {
    return (
      <div>
        <WhiteSpace />
        <SearchBar
          placeholder="手机号"
          ref={(ref) => (this.autoFocusInst = ref)}
        />
        <WhiteSpace />
      </div>
    );
  }
}
