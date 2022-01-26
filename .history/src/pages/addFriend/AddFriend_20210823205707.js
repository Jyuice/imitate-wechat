import React, { Component } from "react";
import { SearchBar, WhiteSpace } from "antd-mobile";

export default class AddFriend extends Component {

    state = {
      value: '',
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
          value={this.state.value}
          ref={(ref) => (this.autoFocusInst = ref)}
          onCancel={() => this.props.history.go(-1)}
        />
        <WhiteSpace />
      </div>
    );
  }
}
