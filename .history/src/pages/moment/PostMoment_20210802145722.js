import React, { Component } from 'react'
import { Icon } from 'antd-mobile'

export default class PostMoment extends Component {
    render() {
        return (
            <div className="post-moment-wrap">
                <div className="topbar">
                    <Icon type="left"/>
                    <button>发表</button>
                </div>
            </div>
        )
    }
}
