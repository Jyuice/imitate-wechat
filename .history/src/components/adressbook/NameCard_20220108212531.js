/**
 * 参数示例 *为非必选
 * {
        id: 0,
        *color: "orange",
        *icon: `<svg t="1627547446017" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="75724" width="22" height="22"><path d="M821.326552 629.285866a197.24857 197.24857 0 1 0 198.984531 197.248569A197.899555 197.899555 0 0 0 821.326552 629.285866z m88.100021 224.80695h-62.494596v63.362577a27.124391 27.124391 0 0 1-54.031786 0v-63.145582h-59.67366a26.25641 26.25641 0 0 1-26.6904-27.558381 26.690401 26.690401 0 0 1 26.6904-26.6904h59.67366v-65.098538a27.124391 27.124391 0 0 1 54.031786 0v65.098538h62.494596A26.039415 26.039415 0 0 1 936.767959 826.75143a26.907396 26.907396 0 0 1-26.473405 27.558381z" p-id="75725" fill="#ffffff"></path><path d="M580.895953 826.75143a238.694639 238.694639 0 0 1 198.98453-233.920746 443.755033 443.755033 0 0 0-209.183301-134.102987 234.354736 234.354736 0 0 0 123.904217-214.60818 246.940453 246.940453 0 0 0-493.663912 0 233.269761 233.269761 0 0 0 120.2153 214.60818A449.179911 449.179911 0 0 0 3.688917 886.42509c0 80.722187 2.820937 85.279085 91.788938 86.79805h534.892986a243.468531 243.468531 0 0 1-49.474888-146.47171z" p-id="75726" fill="#ffffff"></path></svg>`,
        *avatar: ''
        name: '新的朋友',
        *target: "/addressbook/newfriends",
        *evt: () => {
            const socket = io.connect('ws://106.52.45.38:6050/home/chat')
            socket.emit("change-addressbook-to-read", localStorage.getItem("userId"))
        }
    }
 * 
 */


import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import baseUrl from "../../utils/baseUrl";
import { Checkbox } from 'antd-mobile'

class NameCard extends Component {

  toBusiness = () => {
    this.props.history.push("/home/chat/business",{userId: this.props.list.id})
  }

  toTarget = list => {
    if(list.evt) {
      list.evt()
    }
    if(list.target === "/home/chat") {
      this.props.history.push('/home/chat', {id: list.id,name: list.name,avatar: list.avatar})
    }else this.props.history.push(list.target)
  }

  renderCheck = () => {
    if(this.props.select) {
      return <Checkbox className="checkbox" id={this.props.list.id} onChange={console.log(this)}></Checkbox>
    } else return
  }

  render() {
    const { list, select } = this.props
    return (
      <Fragment>
        <div className="name-card-wrap" onClick={!select ? (list.target ? () => this.toTarget(list) : this.toBusiness) : null}>
          <div className="left">
            {this.renderCheck()}
            <div className={`avatar-container ${list.color ? list.color : ''}`}>
              {list.icon ? 
              <div className="icon" dangerouslySetInnerHTML={{__html: list.icon}}></div> : 
              <img  src={baseUrl + list.avatar} alt="" />}
            </div>
            <div className="name">{list.name}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(NameCard)