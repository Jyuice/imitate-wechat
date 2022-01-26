import React, { Fragment } from 'react'
import PubSub from 'pubsub-js'
import SimpleNav from "../../../components/common/SimpleNav";

export default function selectGroup() {
    PubSub.publish(`HIDE NAVBAR`, true)
    PubSub.publish(`HIDE TABBAR`, true)


    return (
        <Fragment>
            <SimpleNav
          title="发起群聊"
        />
        111
        </Fragment>
    )
}
