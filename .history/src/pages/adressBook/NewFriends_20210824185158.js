import React, { Component } from 'react'
import SimpleNav from '../../components/common/SimpleNav'
import PubSub from 'pubsub-js'

export default class NewFriends extends Component {
    render() {
        PubSub.publish("HIDE NAVBAR",true)
        PubSub.publish("HIDE TABBAR",true)
        return (
            <div>
                <SimpleNav title={"添加好友"}></SimpleNav>
            </div>
        )
    }
}
