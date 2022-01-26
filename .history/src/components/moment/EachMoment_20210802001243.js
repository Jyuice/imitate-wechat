import React, { Component } from 'react'
import avatar from '../../assets/images/avatar.jpg'
import { Icon } from 'antd-mobile'
import ThumbUpArea from './ThumbUpArea'

export default class EachMoment extends Component {
    render() {
        return (
            <div className="each-moment">
                <div className="right">
                    <img src={avatar} alt="" />
                </div>
                <div className="left">
                    <div className="name">Depon</div>
                    <div className="content">
                        牛逼！！！
                    </div>
                    <div className="row">
                        <div className="time">
                            1小时前
                        </div>
                        <div className="more">
                            <Icon size="xxs" type="ellipsis"></Icon>
                        </div>
                    </div>
                    <ThumbUpArea/>
                </div>
            </div>
        )
    }
}
