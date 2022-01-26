import React, { Component } from 'react'
import bg from '../../assets/images/moment-bg.jpg'

export default class TopEntrance extends Component {
    render() {
        return (
            <div className="moment-wrap">
                <div className="top">
                    <img src={bg} alt="" />
                    <div className="people"></div>
                </div>
            </div>
        )
    }
}
