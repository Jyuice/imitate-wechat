import React, { Component } from 'react'
import avatar from "../../assets/images/avatar.jpg";
import { WingBlank, WhiteSpace } from 'antd-mobile';

export default class IdentityCard extends Component {
    render() {
        return (
            <div className="business-card">
                <div className="avatar-container">
                    <img className="avatar" src={avatar} alt="" />
                </div>
                <div className="inner">
                    <div className="row">
                        <div className="name">Depon</div>
                        
                    </div>
                    <div className="wechat-id">微信号：SerendipityEko</div>
                </div>
                <WhiteSpace size="lg" />
            </div>
        )
    }
}
