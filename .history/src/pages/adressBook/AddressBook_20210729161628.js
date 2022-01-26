import React, { Component } from 'react'
import IndexList from '../../components/adressbook/IndexList'
import NameCard from '../../components/adressbook/NameCard'

export default class AddressBook extends Component {
    render() {
        return (
            <div>
                <NameCard/>
                <IndexList/>
            </div>
        )
    }
}
