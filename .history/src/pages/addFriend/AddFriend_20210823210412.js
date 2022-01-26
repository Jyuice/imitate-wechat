import React, { Component } from "react";
import { SearchBar, WhiteSpace } from "antd-mobile";

export default class AddFriend extends Component {
  state = {
    value: "",
  };

  componentDidMount() {
    this.autoFocusInst.focus();
  }

  onChange = (value) => {
    this.setState({ value });
  };

  clear = () => {
    this.setState({ value: "" });
  };

  handleClick = () => {
    this.manualFocusInst.focus();
  };

  render() {
    return (
      <div>
        <WhiteSpace />
        <SearchBar
          placeholder="手机号"
          value={this.state.value}
          ref={(ref) => (this.autoFocusInst = ref)}
          onCancel={() => this.props.history.go(-1)}
          showCancelButton="true"
        />
        <WhiteSpace />
        <div className="item">
          <svg
            style={{ background: "rgb(7,191,98)", padding: "5px" }}
            t="1627506745593"
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="72922"
            width="35"
            height="35"
          >
            <path
              d="M256 384a170.667 170.667 0 1 0 341.333 0A170.667 170.667 0 1 0 256 384zM640 499.2h256v68.267H640z"
              p-id="72923"
              fill="#fff"
            ></path>
            <path
              d="M802.133 405.333v256h-68.266v-256zM384 597.333h85.333a256 256 0 0 1 256 256H128a256 256 0 0 1 256-256z"
              p-id="72924"
              fill="#fff"
            ></path>
          </svg>
          搜索：{this.state.value}
        </div>
      </div>
    );
  }
}
