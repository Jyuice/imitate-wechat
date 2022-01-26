import React, { Component } from 'react'
import { Icon } from 'antd-mobile'

export default class PostMoment extends Component {

    state = {
        value: ""
    }

    render() {
        return (
            <div className="post-moment-wrap">
                <div className="topbar">
                    <Icon type="left"/>
                    <button className="send">发表</button>
                </div>
                <textarea className="content-area"
                autoSize value={this.state.value} onChange={val => {
                    this.setState({
                        value: val
                    })
                }} placeholder="这一刻的想法..." >

                </textarea>
            </div>
        )
    }
}
