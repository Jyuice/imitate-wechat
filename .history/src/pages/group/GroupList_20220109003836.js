import React, { Component } from 'react'
import NameCard from '../../components/adressbook/NameCard'
import SimpleNav from '../../components/common/SimpleNav'
import PubSub from 'pubsub-js'
import { getGroup } from '../../api/group'

const myId = localStorage.getItem('userId')

export default class GroupList extends Component {

    componentDidMount() {
        this.getGroups()
    }

    getGroups = () => {
        getGroup({userId: myId}).then(res => {
            console.log(res)
        })
    }

    render() {
        PubSub.publish("HIDE NAVBAR", true);
        PubSub.publish("HIDE TABBAR", true);
        return (
            <div>
                <SimpleNav title="群聊"/>
            </div>
        )
    }
}
