import React, { Component } from 'react'
import { Icon } from 'antd-mobile';

export default class Loading extends Component {
    render() {
        return (
            <div style={{color: "#999"}}>
                <Icon type="loading" />
                正在加载
            </div>
        )
    }
}
