import React, { Component } from 'react'
import { Icon } from 'antd-mobile';

export default class Loading extends Component {
    render() {
        return (
            <div className="loading-page">
                <div className="mask"></div>
                <Icon className="icon" type="loading" />
                正在加载
            </div>
        )
    }
}
