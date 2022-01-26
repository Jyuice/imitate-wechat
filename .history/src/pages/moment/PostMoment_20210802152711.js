import React, { Component } from 'react'
import { Icon, ImagePicker } from 'antd-mobile'
import { Input } from '@chatui/core';

const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
  }, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
  }];

export default class PostMoment extends Component {

    state = {
        value: "",
        files: data,
        multiple: true,
    }

    onChange = (files, type, index) => {
        // console.log(files, type, index);
        this.setState({
          files,
        });
      }

    render() {
        return (
            <div className="post-moment-wrap">
                <div className="topbar">
                    <Icon type="left"/>
                    <button className="send">发表</button>
                </div>
                <Input className="content-area" minRows="8"
                autoSize value={this.state.value} onChange={val => {
                    this.setState({
                        value: val
                    })
                }} placeholder="这一刻的想法..." />
                <ImagePicker
                  files={this.state.files}
                  length={3}
                  onChange={this.onChange}
                  onImageClick={(index, fs) => console.log(index, fs)}
                  selectable={this.state.files.length < 9}
                  multiple={this.state.multiple}
                />
            </div>
        )
    }
}
