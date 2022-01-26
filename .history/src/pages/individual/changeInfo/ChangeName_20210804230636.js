import React, { Component } from 'react'
import SimpleNav from '../../../components/common/SimpleNav'
import { Input } from '@chatui/core';
import { Button, Toast } from 'antd-mobile';
import { changeUserInfo } from '../../../api/user';

const inputStyle = {
    marginTop: "20px",
    background: "none",
    border: "none",
    borderRadius: "0",
    borderBottom: "1px solid #ccc"
}

const btnStyle = {
    width: "90%",
    display: "block",
    margin: "20px auto",
    background: "#07BF62",
    border: "none",
    color: "#fff",
    borderRadius: "5px"
}

export default class ChangeName extends Component {

    constructor(props){
        super(props)
        const { nickname, wechatId, type } = this.props.location.state
        this.nickname = this.props.location.state.nickname
        this.wechatId = this.props.location.state.wechatId
        this.avatar = this.props.location.state.avatar
        this.type = this.props.location.state.type
        this.state = {
            value: type==="1" ? wechatId : nickname,
            disabled: true
        }
    }

    handleInput = val => {
        this.setState({
            value: val,
            disabled: val === (this.type==="1" ? this.wechatId : this.nickname) ? true : false
        })
    }

    doChangeName = () => {
        const data = {
            userId: localStorage.getItem("userId"),
            nickname: this.state.value
        }
        changeUserInfo(data).then(res => {
            this.gobackAsync()
        })
    }

    doChangeId = () => {
        const data = {
            userId: localStorage.getItem("userId"),
            wechatId: this.state.value
        }
        changeUserInfo(data).then(res => {
            this.gobackAsync()
        })
    }

    gobackAsync = () => {
        Toast.success('修改成功',2)
        setTimeout(() => {
            if(this.type === "1"){
                this.props.history.push(`/individual/changeInfo`,{nickname: this.nickname,avatar: this.avatar,wechatId: this.state.value})
            }else this.props.history.push(`/individual/changeInfo`,{nickname: this.state.value,avatar: this.avatar,wechatId: this.wechatId})
        },2000)
    }

    render() {
        const { type } = this.props.location.state
        if(type === "1") { // type:1为改微信号
            return (
                <div>
                    <SimpleNav title="更改微信号"/>
                    <Input maxLength={20} value={this.state.value} onChange={this.handleInput} style={inputStyle} />
                    <Button style={btnStyle} onClick={this.doChangeId} disabled={this.state.disabled}>确定</Button>
                </div>
            )
        }else {
            return (
                <div>
                    <SimpleNav title="更改名字"/>
                    <Input maxLength={9} value={this.state.value} onChange={this.handleInput} style={inputStyle} />
                    <Button style={btnStyle} onClick={this.doChangeName} disabled={this.state.disabled}>确定</Button>
                </div>
            )
        }
        
    }
}
