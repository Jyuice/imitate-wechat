import React, { Component } from 'react'
import Lists from '../../components/home/Lists'
import avatar from "../../assets/images/avatar.jpg"
import PubSub from 'pubsub-js'
import io from 'socket.io-client'

const chatLists = [
    {
        id: 0,
        avatar: avatar,
        name: 'Depon',
        lastMsg: "中国牛逼！",
        lastTime: "12:00"
    },{
        id: 1,
        avatar: avatar,
        name: 'Depon1',
        lastMsg: "中国牛逼！",
        lastTime: "12:00"
    },{
        id: 2,
        avatar: avatar,
        name: 'Depon2',
        lastMsg: "中国牛逼！",
        lastTime: "12:00"
    },{
        id: 3,
        avatar: avatar,
        name: 'Depon3',
        lastMsg: "中国牛逼！",
        lastTime: "12:00"
    },
] 

export default class Home extends Component {

    componentDidMount() {
        // isLogin(localStorage.getItem("userId")).then(res => {
        //     if(res.message !== "已登录") {
        //         this.props.history.push("/login")
        //     }
        //   })
        if(!localStorage.getItem("userId")) this.props.history.push("/login")
        this.getMsg()
    }

    getMsg = () => {
        const socket = io('http://106.52.45.38:6050/home')
        socket.on('message', msg => {
            console.log(msg)
        })
    }

    render() {
        PubSub.publish(`HIDE NAVBAR`, false)
        PubSub.publish(`HIDE TABBAR`, false)
        return (
            <div>
                {chatLists.map(i => (
                    <Lists key={i.id} list={i}/>
                ))}

            </div>
        )
    }
}
