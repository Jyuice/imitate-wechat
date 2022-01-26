import React, { Component } from 'react'
import Lists from '../../components/home/Lists'
// import avatar from "../../assets/images/avatar.jpg"
import PubSub from 'pubsub-js'
import io from 'socket.io-client'
import { getUserFriends } from '../../api/user'

// const chatLists = [
//     {
//         id: 0,
//         avatar: avatar,
//         name: 'Depon',
//         lastMsg: "中国牛逼！",
//         lastTime: "12:00"
//     },{
//         id: 1,
//         avatar: avatar,
//         name: 'Depon1',
//         lastMsg: "中国牛逼！",
//         lastTime: "12:00"
//     },{
//         id: 2,
//         avatar: avatar,
//         name: 'Depon2',
//         lastMsg: "中国牛逼！",
//         lastTime: "12:00"
//     },{
//         id: 3,
//         avatar: avatar,
//         name: 'Depon3',
//         lastMsg: "中国牛逼！",
//         lastTime: "12:00"
//     },
// ] 

export default class Home extends Component {

    state = {
        chatLists: []
    }

    componentDidMount() {
        // isLogin(localStorage.getItem("userId")).then(res => {
        //     if(res.message !== "已登录") {
        //         this.props.history.push("/login")
        //     }
        //   })
        if(!localStorage.getItem("userId")) this.props.history.push("/login")
        this.getUserFriends()
        this.connSocket()
    }

    connSocket = () => {
        const socket = io.connect('ws://106.52.45.38:6050/home')
        socket.emit("online",localStorage.getItem("userId"))
        socket.on('open', async msg => {
            console.log(msg)
        })
        socket.emit("send-message",{
            recipients: [5],
            text: "hhh"
        })
        
    }

    getUserFriends = () => {
        getUserFriends(localStorage.getItem("userId")).then(res => {
            for(let i of res.friendsList) {
                i.lastMsg = "我们已经是好友了，快来聊天吧！"
                i.lastTime = new Date().getHours() + ":" + new Date().getMinutes()
                this.setState({
                    chatLists : [...this.state.chatLists,i]
                })
            }
        })
    }

    render() {
        PubSub.publish(`HIDE NAVBAR`, false)
        PubSub.publish(`HIDE TABBAR`, false)
        return (
            <div>
                {this.state.chatLists.map(i => (
                    <Lists key={i.id} list={i}/>
                ))}

            </div>
        )
    }
}
