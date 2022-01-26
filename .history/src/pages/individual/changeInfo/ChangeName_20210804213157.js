import React, { Component } from 'react'
import SimpleNav from '../../../components/common/SimpleNav'
import { Input } from '@chatui/core';

export default class ChangeName extends Component {

    state = {
        value: ""
    }

    render() {
        return (
            <div>
                <SimpleNav title="更改名字"/>
                <Input maxLength={10} value={this.state.value} onChange />
            </div>
        )
    }
}
