import React, { Component } from "react";
import { SearchBar, WhiteSpace } from "antd-mobile";
import PubSub from "pubsub-js";
import { search } from "../../api/search";

export default class Search extends Component {

  state = {
      value: '',
  }

  onChange = (value) => {
    this.setState({ value }, () => {
        setTimeout(() => {
            search({
                userId: localStorage.getItem('userId'),
                keyword: this.state.value
            }).then(res => {

            })
        },1000)
    });
  };

  handleClick = () => {
    this.autoFocusInst.focus();
  };

  render() {
    PubSub.publish(`HIDE NAVBAR`, true)
    PubSub.publish(`HIDE TABBAR`, true)
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
