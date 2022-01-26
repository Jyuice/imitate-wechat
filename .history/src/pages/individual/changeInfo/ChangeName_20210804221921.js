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
        const { nickname, wechatId, type } = this.props.match.params
        this.nickname = this.props.match.params.nickname
        this.wechatId = this.props.match.params.wechatId
        this.type = this.props.match.params.type
        this.state = {
            value: type ? wechatId : nickname,
            disabled: true
        }
    }

    handleInput = val => {
        this.setState({
            value: val,
            disabled: val === (this.type ? this.wechatId : this.nickname) ? true : false
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
            this.props.history.push(`/individual/changeInfo/${this.nickname}/${this.state.value}`)
        },2000)
    }

    render() {
        const { type } = this.props.match.params
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
                    <Input maxLength={10} value={this.state.value} onChange={this.handleInput} style={inputStyle} />
                    <Button style={btnStyle} onClick={this.doChangeName} disabled={this.state.disabled}>确定</Button>
                </div>
            )
        }
        
    }
}
