import React, { Component } from 'react'
import SimpleNav from '../../components/common/SimpleNav'
import PubSub from 'pubsub-js'
import { getApplication } from '../../api/user'

export default class NewFriends extends Component {


    renderInner = () => {
        getApplication(localStorage.getItem("userId")).then(res => {
            
        })
    }

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
