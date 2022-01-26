import React, { Component } from 'react'
// import avatar from "../../assets/images/avatar.jpg";
import { WingBlank, WhiteSpace } from 'antd-mobile';
import { getUserInfo } from '../../api/user';
import baseUrl from '../../utils/baseUrl'
import { withRouter } from 'react-router-dom';
import PubSub from 'pubsub-js';

class Identity extends Component {

    state = {
        nickname: "",
        avatar: "",
        wechatId: ""
    }

    componentDidMount() {
        getUserInfo(localStorage.getItem("userId")).then(res => {
            this.setState({
                nickname: res.nickname,
                avatar: res.avatar,
                wechat_Id: res.wechat_Id
            })
        })
    }

    changeAvatar = (url) => {
        this.setState({
            avatar: url
        })
    }

    render() {
        const {nickname, avatar, wechat_Id} = this.state
        return (
            <div className="id-card" onClick={() => {
                PubSub.publish(`CHANGE AVATAR`,() => {
                    return this.changeAvatar()
                })
                this.props.history.push(`/individual/changeInfo`,{nickname: nickname,avatar: avatar,wechatId:wechat_Id})
                PubSub.publish("HIDE TABBAR",true)
            }}>
                <div className="avatar-container">
                    <img className="avatar" src={baseUrl + avatar} alt="" />
                </div>
                <div className="inner">
                    <div className="name">{nickname}</div>
                    <div className="row">
                        <div className="wechat-id">微信号：
                        <span>{wechat_Id}</span>
                        </div>
                        <div className="svgs">
                            <svg t="1627552134277" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="96619" width="16" height="16"><path d="M540.9 866h59v59h-59v-59zM422.8 423.1V98.4H98.1v324.8h59v59h59v-59h206.7z m-265.7-59V157.4h206.7v206.7H157.1z m0 0" p-id="96620" fill="#8a8a8a"></path><path d="M216.2 216.4h88.6V305h-88.6v-88.6zM600 98.4v324.8h324.8V98.4H600z m265.7 265.7H659V157.4h206.7v206.7z m0 0" p-id="96621" fill="#8a8a8a"></path><path d="M718.1 216.4h88.6V305h-88.6v-88.6zM216.2 718.3h88.6v88.6h-88.6v-88.6zM98.1 482.2h59v59h-59v-59z m118.1 0h59.1v59h-59.1v-59z m0 0" p-id="96622" fill="#8a8a8a"></path><path d="M275.2 600.2H98.1V925h324.8V600.2h-88.6v-59h-59v59z m88.6 59.1V866H157.1V659.3h206.7z m118.1-531.4h59v88.6h-59v-88.6z m0 147.6h59v59h-59v-59zM659 482.2H540.9v-88.6h-59v88.6H334.3v59H600v59h59v-118z m0 118h59.1v59H659v-59z m-177.1 0h59v88.6h-59v-88.6z m0 147.7h59V866h-59V747.9zM600 688.8h59V866h-59V688.8z m177.1-88.6h147.6v59H777.1v-59z m88.6-118h59v59h-59v-59z m-147.6 0h118.1v59H718.1v-59z m0 206.6h59v59h-59v-59z m147.6 59.1h-29.5v59h59v-59h29.5v-59h-59v59z m-147.6 59h59V866h-59v-59.1z m59 59.1h147.6v59H777.1v-59z m0 0" p-id="96623" fill="#8a8a8a"></path></svg>
                            <WingBlank size="md"/>
                            <svg t="1627552172805" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="97620" width="16" height="16"><path d="M334.4384 127.8976c-5.2224 0-10.5472 1.9456-14.4384 5.9392-7.9872 7.9872-7.9872 20.992 0 28.9792l334.6432 334.6432c7.9872 7.9872 7.9872 20.992 0 28.9792L319.8976 861.184c-7.9872 7.9872-7.9872 20.992 0 28.9792 3.9936 3.9936 9.216 5.9392 14.4384 5.9392s10.5472-1.9456 14.4384-5.9392l349.184-349.184c15.9744-15.9744 15.9744-41.8816 0-57.9584l-349.184-349.184c-3.8912-3.8912-9.1136-5.9392-14.336-5.9392z" p-id="97621" fill="#707070"></path></svg>
                        </div>
                    </div>
                </div>
                <WhiteSpace size="lg" />
            </div>
        )
    }
}

export default withRouter(Identity)