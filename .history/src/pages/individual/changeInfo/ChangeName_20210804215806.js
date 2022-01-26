import React, { Component } from 'react'
import SimpleNav from '../../../components/common/SimpleNav'
import { Input } from '@chatui/core';
import { Toast } from 'antd-mobile';
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
    padding: "10px",
    margin: "20px auto",
    background: "#07BF62",
    border: "none",
    color: "#fff",
    borderRadius: "5px"
}

export default class ChangeName extends Component {

    constructor(props){
        super(props)
        const { nickname } = this.props.match.params
        this.wechatId = this.props.match.params.wechatId
        this.state = {
            value: nickname
        }
    }

    handleInput = val => {
        this.setState({
            value: val
        })
    }

    doChangeName = () => {
        const data = {
            userId: localStorage.getItem("userId"),
            nickname: this.state.value
        }
        changeUserInfo(data).then(res => {
            Toast.success('修改成功',2)
            setTimeout(() => {
                this.props.history.push(`/individual/changeInfo/${this.state.value}/${this.wechatId}`)
            },2000)
        })
    }

    render() {
        return (
            <div>
                <SimpleNav title="更改名字"/>
                <Input maxLength={10} value={this.state.value} onChange={this.handleInput} style={inputStyle} />
                <button style={btnStyle} onClick={this.doChangeName}>确定</button>
            </div>
        )
    }
}
