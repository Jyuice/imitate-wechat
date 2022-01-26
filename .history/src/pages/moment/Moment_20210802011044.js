import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import TopEntrance from '../../components/moment/TopEntrance'
import EachMoment from '../../components/moment/EachMoment'

export default class Moment extends Component {

    componentDidMount() {
        PubSub.publish(`HIDE NAVBAR`,true)
        PubSub.publish(`HIDE TABBAR`,true)
    }

    render() {
        PubSub.publish(`HIDE TABBAR`,true)
        return (
            <div className="moment-wrap">
                <TopEntrance/>
                <EachMoment/>
                <EachMoment/>
                <EachMoment/>
                <div className="end">
                    已经到底线啦~
                </div>
            </div>
        )
    }
}
