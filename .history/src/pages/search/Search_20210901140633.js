import React, { Component } from "react";
import { SearchBar, WhiteSpace } from "antd-mobile";

export default class Search extends Component {
  render() {
    return (
      <div className="search-page">
        <WhiteSpace />
        <SearchBar
          placeholder="搜索"
          onChange={this.onChange}
          onFocus={this.handleClick}
          value={this.state.value}
          ref={(ref) => (this.autoFocusInst = ref)}
          onCancel={() => this.props.history.go(-1)}
          showCancelButton="true"
        />
        <WhiteSpace />
      </div>
    );
  }
}
