import React, { Component } from 'react'
import Lists from '../../components/home/Lists'
// import avatar from "../../assets/images/avatar.jpg"
import PubSub from 'pubsub-js'
import io from 'socket.io-client'
import { getUserFriends, getUserInfo } from '../../api/user'
import { getLastMsg } from '../../api/chat'

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
        this.getLastMsg()
        // this.connSocket()
        this.getUserInfo()
    }

    componentWillUnmount = () => {
      this.setState = (state,callback)=>{
        return;
      };
    }

    getUserInfo = () => {
        getUserInfo(localStorage.getItem("userId")).then(res => {
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
        socket.emit("online",localStorage.getItem("userId"))
        // socket.on('open', async msg => {
        //     console.log(msg)
        // })
    }

    // 收到新消息要改变对应的lastMsg
    receiveNewMsg = ({sender, text}) => {
        let newList = this.state.chatLists
        let i = 0
        this.state.chatLists.filter((t,index) => {
            i = index
            return t.id === sender*1
        })
        newList[i].lastMsg = text
        this.setState({
            chatLists: newList
        })
    }

    getLastMsg = () => {
        getUserFriends(localStorage.getItem("userId")).then(res => {
            for(let i of res.friendsList) {
                getLastMsg({
                    userId: localStorage.getItem("userId"),
                    friendId: i.id
                }).then(res => {
                    if(res.length) {
                        const time = this.fuzzUpTime(res[0].time)
                        i.lastTime = time
                        i.lastMsg = res[0].msg
                        this.setState({
                            chatLists : [...this.state.chatLists,i]
                        })
                    }
                })
                
            }
        })
    }

    fuzzUpTime = (time) => {
        const month = Number(time.slice(5, 7));
        const day = Number(time.slice(8, 10));
        const day_now = Number(new Date().getDate());
        const exactTime = time.slice(11,16)
        const exactDate = month + "月" + day + "日"
    
        let jatlag = exactTime;
        
        if (day_now - day > 0) {
          if(day_now - day === 1) {
            jatlag = "昨天"
          }
          jatlag = exactDate
        }
        
        // if (month_now - month > 0) {
        //   if (month_now - month === 1 && day_now - day < 30) {
        //     jatlag =
        //       day_now + (bigMonth.indexOf(month) > -1 ? 31 : 30) - day + "天前"
        //   } else jatlag = month_now - month + "月前"
        // }
        // if (year_now - year > 0) jatlag = year_now - year + "年前"
    
        return jatlag
      };

    render() {
        PubSub.publish(`HIDE NAVBAR`, false)
        PubSub.publish(`HIDE TABBAR`, false)
        return (
            <div>
                {this.state.chatLists.map(i => (
                    <Lists key={i.id} list={i} receiveNewMsg={this.receiveNewMsg}/>
                ))}

            </div>
        )
    }
}
