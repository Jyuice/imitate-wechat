import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Moment extends Component {

    componentDidMount() {
        PubSub.publish(`HIDE NAVBAR`,true)
        PubSub.publish(`HIDE TABBAR`,true)
    }

    render() {
        return (
            <div>
                111
            </div>
        )
    }
}
