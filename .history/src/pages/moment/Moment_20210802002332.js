import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import TopEntrance from '../../components/moment/TopEntrance'
import EachMoment from '../../components/moment/EachMoment'
import CommentArea from '../../components/moment/CommentArea'

export default class Moment extends Component {

    componentDidMount() {
        PubSub.publish(`HIDE NAVBAR`,true)
        PubSub.publish(`HIDE TABBAR`,true)
    }

    render() {
        return (
            <div className="moment-wrap">
                <TopEntrance/>
                <EachMoment/>
            </div>
        )
    }
}
