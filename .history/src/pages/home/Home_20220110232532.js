import React, { Component } from 'react'
import Lists from '../../components/home/Lists'
// import avatar from "../../assets/images/avatar.jpg"
import PubSub from 'pubsub-js'
import io from 'socket.io-client'
import { getUserInfo } from '../../api/user'
import { getLastMsg } from '../../api/chat'

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

    getLastMsg = () => {
        // getUserFriends(myId).then(res => {
        //     for(let i of res.friendsList) {
        //         getLastMsg({
        //             userId: myId,
        //             friendId: i.id
        //         }).then(res => {
        //             if(res.length) {
        //                 const time = this.fuzzUpTime(res[0].time)
        //                 i.lastTime = time
        //                 i.lastMsg = res[0].msg
        //                 this.setState({
        //                     chatLists : [...this.state.chatLists,i]
        //                 })
        //             }
        //         })
        //     }
        // })
        getLastMsg({
            userId: myId
        }).then(res => {
            console.log(res)
            if(res.length) {
                this.setState({
                    chatLists : [...this.state.chatLists, res]
                })
            }
        })
    }

    fuzzUpTime = (time) => {
        const month = Number(time.slice(5, 7));
        const month_now = Number(new Date().getMonth())+1;
        const day = Number(time.slice(8, 10));
        const day_now = Number(new Date().getDate());
        const exactTime = time.slice(11,16)
        const exactDate = month + "月" + day + "日"
        // console.log(month,month_now,day,day_now,exactTime,exactDate)
    
        let jatlag = exactTime;
        
        if (day_now - day > 0) {
          if(day_now - day === 1) {
            jatlag = "昨天"
          }
          jatlag = exactDate
        }
        
        if (month_now - month > 0) {
          if (month_now - month === 1 && day_now - day < 30) {
            jatlag = exactDate
          } else jatlag = month_now - month + "月前"
        }
        // if (year_now - year > 0) jatlag = year_now - year + "年前"
    
        return jatlag
      };

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
