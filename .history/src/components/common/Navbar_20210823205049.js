import React, { Component } from "react";
import { Drawer, Popover, NavBar, Icon } from "antd-mobile";
import { nanoid } from "nanoid";
import { withRouter } from 'react-router-dom'
import PubSub from 'pubsub-js'

const Item = Popover.Item;
class Navbar extends Component {
  state = {
    title: "",
    visible: false,
    selected: "",
    open: false,
    isHome: this.props.location.pathname === "/home" ?  true : false
  };

  componentDidMount(){

    switch(this.props.location.pathname){
      case '/home':{
        this.setState({title: "微信"})
        break
      }
      case '/addressbook':{
        this.setState({title: "通讯录"})
        break
      }
      case '/discover':{
        this.setState({title: "发现"})
        break
      }
      default:{
        this.setState({title: "微信"})
        break
      }
    }

    this.token = PubSub.subscribe('CHANGE NAVBAR',(msg, data) => {
      this.setState({
        title: data[0],
        isHome: data[1]
      })
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }

  onSelect = (opt) => {
    console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    },() => {
        if(opt.props.value === "addFriends") {
          this.props.history.push("/home/add")
        }
    });
  };
  // handleVisibleChange = (visible) => {
  //   console.log(222)
  // };
  changeVisible = () => {
    this.setState({visible: true});
  };
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  render() {

    const sidebar = (
      <div style={{background: "gray",height: "100vh"}}>
        111
      </div>
    );

    return (
      <div>
        <NavBar
          mode="light"
          leftContent={this.state.isHome ? [<Icon key={nanoid()} type="ellipsis" color="#2c2c2c"  />] : []}
          onLeftClick={this.onOpenChange}
          rightContent={[
            <Icon key={nanoid()} type="search" color="#2c2c2c" />,
            <Popover
              key={nanoid()}
              style={{background: "gray"}}
              mask
              overlayClassName="fortest"
              overlayStyle={{ color: "currentColor" }}
              visible={this.state.visible}
              overlay={[
                <Item
                  key={nanoid()}
                  value="groupChat"
                  icon={
                    <svg
                      style={{ marginTop: "-3px"}}
                      t="1627505545978"
                      className="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="63909"
                      width="25"
                      height="25"
                    >
                      <path
                        d="M509.8 98.2c-220.2 0-398.7 156.2-398.7 348.9 0 110.1 58.5 208.2 149.5 272.1v176.5l174.7-106c24.2 4 49 6.3 74.5 6.3 220.2 0 398.7-156.2 398.7-348.9 0.1-192.7-178.4-348.9-398.7-348.9z"
                        p-id="63910"
                        fill="#fff"
                      ></path>
                    </svg>
                  }
                  data-seed="logId"
                >
                  发起群聊
                </Item>,
                <Item
                  key={nanoid()}
                  value="addFriends"
                  icon={
                    <svg
                      style={{ marginTop: "-3px" }}
                      t="1627506745593"
                      className="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="72922"
                      width="25"
                      height="25"
                    >
                      <path
                        d="M256 384a170.667 170.667 0 1 0 341.333 0A170.667 170.667 0 1 0 256 384zM640 499.2h256v68.267H640z"
                        p-id="72923"
                        fill="#fff"
                      ></path>
                      <path
                        d="M802.133 405.333v256h-68.266v-256zM384 597.333h85.333a256 256 0 0 1 256 256H128a256 256 0 0 1 256-256z"
                        p-id="72924"
                        fill="#fff"
                      ></path>
                    </svg>
                  }
                  style={{ whiteSpace: "nowrap" }}
                >
                  添加朋友
                </Item>,
                <Item
                  key={nanoid()}
                  value="help"
                  icon={
                    <svg
                      style={{ marginTop: "-2px" }}
                      t="1627506925057"
                      className="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="74771"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M981 359v419c0 43.078-34.922 78-78 78H120c-43.078 0-78-34.922-78-78V359h3.5l405.513 312.066c35.951 27.667 86.023 27.667 121.974 0L978.5 359H981z"
                        fill="#fff"
                        p-id="74772"
                      ></path>
                      <path
                        d="M572.971 612.1l375.614-288.934c37.646-28.96 44.69-82.954 15.73-120.601A86 86 0 0 0 896.15 169h-768.3c-47.496 0-86 38.504-86 86a86 86 0 0 0 33.565 68.166L451.03 612.099c35.945 27.65 85.997 27.65 121.942 0z"
                        fill="#fff"
                        p-id="74773"
                      ></path>
                    </svg>
                  }
                >
                  <span style={{ marginRight: 5 }}>帮助与反馈</span>
                </Item>,
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
              }}
              onVisibleChange={this.handleVisibleChange}
              onSelect={this.onSelect}
            >
              <div
                style={{
                  height: "100%",
                  padding: "0 15px",
                  marginRight: "-15px",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={this.changeVisible}
              >
                  <svg
                    t="1627506044895"
                    className="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="70867"
                    width="25"
                    height="25"
                  >
                    <path
                      d="M665.6 486.4h-128v-128c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v128h-128c-15.36 0-25.6 10.24-25.6 25.6s10.24 25.6 25.6 25.6h128v128c0 15.36 10.24 25.6 25.6 25.6s25.6-10.24 25.6-25.6v-128h128c15.36 0 25.6-10.24 25.6-25.6 0-12.8-10.24-25.6-25.6-25.6zM512 102.4c-225.28 0-409.6 184.32-409.6 409.6S286.72 921.6 512 921.6 921.6 737.28 921.6 512 737.28 102.4 512 102.4z m0 768c-197.12 0-358.4-161.28-358.4-358.4S314.88 153.6 512 153.6 870.4 314.88 870.4 512 709.12 870.4 512 870.4z"
                      p-id="70868"
                      fill="#2c2c2c"
                    ></path>
                  </svg>
              </div>
            </Popover>,
          ]}
        >
          {this.state.title}
        </NavBar>
        {this.state.isHome ? 
        <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
        <span></span>
      </Drawer> : ''}
      </div>
    );
  }
}

export default withRouter(Navbar)