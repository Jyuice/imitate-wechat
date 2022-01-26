import React, { Component } from 'react'
import bg from '../../assets/images/moment-bg.jpg'
import avatar from '../../assets/images/avatar.jpg'
import { Icon } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import PubSub from 'pubsub-js'

class TopEntrance extends Component {

    constructor() {
        super()
        this.fileRef = React.createRef()
    }

    toPostMoment = () => {
        console.log(this.fileRef.current.files)
        this.props.history.push('/discover/moment/post')
    }

    touchStart = () => {
        this.timeOutEvent = setTimeout(function () {
            alert('你长按了');
        }, 800);
    }

    touchMove = () => {
        clearTimeout(this.timeOutEvent)
    }

    touchEnd = () => {
        clearTimeout(this.timeOutEvent)
    }

    showActionSheet = () => {
        return this.fileRef.current.click()
    }

    goback = () => {
        this.props.history.go(-1)
        PubSub.publish(`HIDE NAVBAR`, false);
        PubSub.publish(`HIDE TABBAR`, false);
    }

    render() {
        return (
            <div className="top">
                <div className="icon">
                    <Icon className="left" type="left" onClick={this.goback}></Icon>
                    <input ref={this.fileRef} onChange={this.toPostMoment} type="file" name="" id="" style={{display: "none"}} />
                    <svg onClick={this.showActionSheet} onTouchStart={this.touchStart} onTouchMove={this.touchMove} onTouchEnd={this.touchEnd}
                    className="camera" t="1627836037568" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3214" width="25" height="25"><path d="M512.3072 422.5024c-67.4816 0-122.4704 54.8864-122.4704 122.4704 0 67.4816 54.8864 122.4704 122.4704 122.4704s122.4704-54.8864 122.4704-122.4704c-0.1024-67.584-54.9888-122.4704-122.4704-122.4704z" p-id="3215" fill="#ededed"></path><path d="M798.8224 348.0576h-81.408c-15.5648 0-29.7984-8.8064-36.6592-22.7328l-26.3168-52.8384c-6.9632-13.9264-21.0944-22.7328-36.6592-22.7328H406.2208c-15.5648 0-29.696 8.8064-36.6592 22.6304l-26.4192 52.9408c-6.9632 13.9264-21.0944 22.6304-36.6592 22.6304h-81.3056c-22.6304 0-40.96 18.3296-40.96 40.96v344.3712c0 22.6304 18.3296 40.96 40.96 40.96H798.72c22.6304 0 40.96-18.3296 40.96-40.96V389.0176c0.1024-22.6304-18.2272-40.96-40.8576-40.96zM512.3072 708.3008c-90.112 0-163.4304-73.3184-163.4304-163.4304s73.3184-163.4304 163.4304-163.4304 163.4304 73.3184 163.4304 163.4304-73.3184 163.4304-163.4304 163.4304zM747.52 447.488c-13.9264 0-25.2928-11.264-25.2928-25.2928 0-13.9264 11.3664-25.1904 25.2928-25.1904s25.2928 11.264 25.2928 25.1904c-0.1024 13.9264-11.3664 25.2928-25.2928 25.2928z" p-id="3216" fill="#ededed"></path></svg>
                </div>
                <img className="bg" src={bg} alt="" />
                <div className="people">
                    <div className="name">Depon</div>
                    <img className="avatar" src={avatar} alt="" />

                </div>
            </div>
        )
    }
}
export default withRouter(TopEntrance)