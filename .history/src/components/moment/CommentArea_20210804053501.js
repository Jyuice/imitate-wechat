import React, { Component } from 'react'

export default class CommentArea extends Component {

    componentDidMount() {
        // const { momentId } = this.props

    }

    render() {
        return (
            <div className="comment-area">
                <div className="box">
                    <span className="name">
                        马龙
                    </span>
                    ：
                    <span className="inner">
                        恭喜苏炳添！不愧是亚洲飞人！
                    </span>
                </div>
                <div className="box">
                    <span className="name">
                        苏炳添
                    </span>
                    <span className="reply-action">回复</span>
                    <span className="name">马龙</span>
                    ：
                    <span className="inner">
                        恭喜龙队斩获冠军呀！
                    </span>
                </div>
            </div>
        )
    }
}
