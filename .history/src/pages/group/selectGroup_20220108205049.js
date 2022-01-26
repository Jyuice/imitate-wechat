import React, { Fragment } from 'react'
import { getUserFriends } from '../../api/user';
import SimpleNav from "../../components/common/SimpleNav";
import ListItem from '../../components/common/ListItem';
import { useState } from 'react';

export default function selectGroup() {

    const myId = localStorage.getItem('userId')
    let [friends, setFriends] = useState

    function getFriends() {
        getUserFriends(localStorage.getItem('userId')).then(res => {
            setFriends(res.filter(item => item.id !== myId))
            console.log(friends)
        })
    }
    getFriends()

    return (
        <Fragment>
            <SimpleNav
          title="发起群聊"
        />
        
        </Fragment>
    )
}
