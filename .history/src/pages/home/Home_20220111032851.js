import React, { Component } from 'react'
import Lists from '../../components/home/Lists'
// import avatar from "../../assets/images/avatar.jpg"
import PubSub from 'pubsub-js'
import io from 'socket.io-client'
import { getUserInfo } from '../../api/user'
import { getLastMsg } from '../../api/chat'
import { getLastGroupMsg } from '../../api/group'

const myId = localStorage.getItem("userId")

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
        if(!myId) this.props.history.push("/login")
        else {
            this.getLastMsg()
            this.getLastGroupMsg()
            // this.connSocket()
            this.getUserInfo()
        }
    }

    componentWillUnmount = () => {
      this.setState = (state,callback)=>{
        return;
      };
    }

    getUserInfo = () => {
        getUserInfo(myId).then(res => {
            if(res.nickname !== localStorage.getItem("nickname")){
                this.setState({
                    nickname: res.nickname
                })
                localStorage.setItem("nickname",res.nickname)
            }
            if(res.avatar !== localStorage.getItem("avatar")){
                this.setState({
                    avatar: res.avatar
                })
                localStorage.setItem("avatar",res.avatar)
            }
            if(res.wechat_Id !== localStorage.getItem("wechat_Id")){
                this.setState({
                    wechat_Id: res.wechat_Id
                })
                localStorage.setItem("wechat_Id",res.wechat_Id)
            }
        })
    }

    connSocket = () => {
        const socket = io.connect('ws://106.52.45.38:6050/home')
        socket.emit("online",myId)
        // socket.on('open', async msg => {
        //     console.log(msg)
        // })
    }

    // 收到新消息要改变对应的lastMsg
    receiveNewMsg = ({sender, text}) => {
        let newList = this.state.chatLists
        let i = 0
        this.state.chatLists.forEach((t,index) => {
            if(t.id*1 === sender*1) i = index
        })
        newList[i].lastMsg = text
        this.setState({
            chatLists: newList
        })
    }

    getAllLastMsg = async () => {
        await this.getLastMsg()
        await this.getLastGroupMsg()
    }

    getLastMsg = () => {
        getLastMsg({
            userId: myId
        }).then(res => {
            if(res.length) {
                this.setState({
                    chatLists : [...this.state.chatLists, ...res]
                })
            }
        })
    }

    getLastGroupMsg = () => {
        getLastGroupMsg({
            userId: myId
        }).then(res => {
            if(res.length) {
                this.setState({
                    chatLists : [...this.state.chatLists, ...res]
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
                    <Lists key={i.msg_id} list={i} receiveNewMsg={this.receiveNewMsg}/>
                ))}
            </div>
        )
    }
}
