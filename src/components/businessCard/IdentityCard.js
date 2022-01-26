import React, { Component } from 'react'
import baseUrl from '../../utils/baseUrl'

export default class IdentityCard extends Component {
    render() {
        const {name, avatar, wechat_Id } = this.props.info
        return (
            <div className="business-card">
                <div className="avatar-container">
                    <img className="avatar" src={baseUrl + avatar} alt="" />
                </div>
                <div className="inner">
                    <div className="row">
                        <div className="name">{name}</div>
                        <svg t="1627722836155" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="122726" width="40" height="40"><path d="M0 0m512 0l0 0q512 0 512 512l0 0q0 512-512 512l0 0q-512 0-512-512l0 0q0-512 512-512Z" fill="#FFFFFF" p-id="122727"></path><path d="M512 640l-104.5632 54.976a25.6 25.6 0 0 1-37.1456-26.9952l19.968-116.4288-84.5824-82.4576a25.6 25.6 0 0 1 14.1824-43.6608l116.9024-16.9856 52.288-105.9328a25.6 25.6 0 0 1 45.9008 0l52.288 105.9328 116.9024 16.9856a25.6 25.6 0 0 1 14.1824 43.6608l-84.5824 82.4576 19.968 116.4288a25.6 25.6 0 0 1-37.1456 26.9952L512 640z" fill="#FCCF0A" p-id="122728"></path></svg>
                    </div>
                    <div className="wechat-id">微信号：{wechat_Id}</div>
                </div>
            </div>
        )
    }
}
