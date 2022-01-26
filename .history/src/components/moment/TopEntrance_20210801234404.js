import React, { Component } from 'react'
import bg from '../../assets/images/moment-bg.jpg'
import avatar from '../../assets/images/avatar.jpg'

export default class TopEntrance extends Component {
    render() {
        return (
            <div className="top">
                <img className="bg" src={bg} alt="" />
                <div className="people">
                    <div className="name">Depon</div>
                    <img className="avatar" src={avatar} alt="" />

                </div>
            </div>
        )
    }
}
