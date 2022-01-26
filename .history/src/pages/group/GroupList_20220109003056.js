import React, { Component } from 'react'
import NameCard from '../../components/adressbook/NameCard'
import { getGroup } from '../../api/group'

const myId = localStorage.getItem('userId')

export default class GroupList extends Component {

    componentDidMount() {
        this.getGroups()
    }

    getGroups = () => {
        getGroup(myId).then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div>
                111
            </div>
        )
    }
}
