import React, { Fragment } from 'react'
import { getUserFriends } from '../../api/user';
import SimpleNav from "../../components/common/SimpleNav";

export default function selectGroup() {
    function getFriends() {
        getUserFriends(localStorage.getItem('userId')).then(res => {
            console.log(res)
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
