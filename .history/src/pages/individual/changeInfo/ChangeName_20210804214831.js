import React, { Component } from 'react'
import SimpleNav from '../../../components/common/SimpleNav'
import { Input } from '@chatui/core';

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

}

export default class ChangeName extends Component {

    constructor(props){
        super(props)
        const { nickname } = this.props.match.params
        this.state = {
            value: nickname
        }
    }

    render() {
        return (
            <div>
                <SimpleNav title="更改名字"/>
                <Input maxLength={10} value={this.state.value} onChange style={inputStyle} />
                <button style={btnStyle}>确定</button>
            </div>
        )
    }
}
