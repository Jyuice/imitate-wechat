import React, { Component } from 'react'
import Lists from '../../components/home/Lists'
// import avatar from "../../assets/images/avatar.jpg"
import PubSub from 'pubsub-js'
import io from 'socket.io-client'
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
    }

    connSocket = () => {
        const socket = io.connect('ws://106.52.45.38:6050/home')
        socket.emit("online",localStorage.getItem("userId"))
        socket.on('open', async msg => {
            console.log(msg)
        })
    }

    getLastMsg = () => {
        getLastMsg(localStorage.getItem("userId")).then(res => {
            for(let i of res) {
                i.lastTime = this.fuzzUpTime(i.lastTime)
                this.setState({
                    chatLists : [...this.state.chatLists,i]
                })
            }
        })
    }

    fuzzUpTime = (time) => {
        const date = new Date();
        const bigMonth = [1, 3, 5, 7, 8, 10, 12];
        const year = Number(time.slice(0, 4));
        const month = Number(time.slice(5, 7));
        const day = Number(time.slice(8, 10));
        const hour = Number(time.slice(11, 13));
        const min = Number(time.slice(14, 16));
        // console.log(year,month,day,hour,min)
        const year_now = Number(date.getFullYear());
        const month_now = Number(date.getMonth()) + 1;
        const day_now = Number(date.getDate());
        const hour_now = Number(date.getHours());
        const min_now = Number(date.getMinutes());
        // console.log(year_now,month_now,day_now,hour_now,min_now)
        const exactTime = Number(time.slice(11,16))
        const exactDate = month + "月" + day + "日"
    
        let jatlag = exactTime;
        // if (min_now - min > 0) jatlag = min_now - min + "分钟前";
        
        // if (hour_now - hour > 0) {
        //   if(hour_now - hour === 1 && min_now - min < 59) {
        //     jatlag = 
        //       min_now + 60 - min + "分钟前"
        //   } else jatlag = hour_now - hour + "小时前"
        // }
        
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
                    <Lists key={i.id} list={i}/>
                ))}

            </div>
        )
    }
}
