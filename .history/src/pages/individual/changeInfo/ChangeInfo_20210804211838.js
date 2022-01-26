import React, { Component } from 'react'
import SimpleNav from '../../../components/common/SimpleNav'
import ListItem from '../../../components/common/ListItem'

const list = [
    {
        id: 0,
        name: "头像"
    },{
        id: 1,
        name: "昵称",
        extra: ""
    },{
        id: 2,
        name: "拍一拍"
    },{
        id: 3,
        name: "微信号",
        extra: ""
    },{
        id: 4,
        name: "二维码名片"
    },{
        id: 5,
        name: "更多信息",
        blank: true
    },{
        id: 6,
        name: "微信豆",
        blank: true
    },{
        id: 7,
        name: "我的地址"
    },
]

export default class ChangeInfo extends Component {

    componentDidMount() {
        const { nickname, wechatId } = this.props.match.params
        list[1].extra = nickname
        list[3].extra = wechatId
        // list[1].extra = nickname
        console.log(list)
    }

    render() {
        return (
            <div>
                <SimpleNav title="个人信息"/>
                {list.map(i => (
                    <ListItem key={i.id} list={i}/>
                ))}
            </div>
        )
    }
}
