import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';

export default class Tabbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'redTab',
          fullScreen: true,
        };
      }
    
      render() {
        return (
          <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#08C163"
              barTintColor="white"
              hidden={this.state.hidden}
            >
              <TabBar.Item
                title="微信"
                key="Wx"
                icon={<svg t="1627505545978" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="63909" width="25" height="25"><path d="M509.8 98.2c-220.2 0-398.7 156.2-398.7 348.9 0 110.1 58.5 208.2 149.5 272.1v176.5l174.7-106c24.2 4 49 6.3 74.5 6.3 220.2 0 398.7-156.2 398.7-348.9 0.1-192.7-178.4-348.9-398.7-348.9z" p-id="63910" fill="#dbdbdb"></path></svg>}
                selectedIcon={<svg t="1627505545978" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="63909" width="25" height="25"><path d="M509.8 98.2c-220.2 0-398.7 156.2-398.7 348.9 0 110.1 58.5 208.2 149.5 272.1v176.5l174.7-106c24.2 4 49 6.3 74.5 6.3 220.2 0 398.7-156.2 398.7-348.9 0.1-192.7-178.4-348.9-398.7-348.9z" p-id="63910" fill="#08C163"></path></svg>}
                selected={this.state.selectedTab === 'blueTab'}
                badge={1}
                onPress={() => {
                  this.setState({
                    selectedTab: 'blueTab',
                  });
                }}
                data-seed="logId"
              >
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="通讯录"
                key="Friend"
                dot
                selected={this.state.selectedTab === 'greenTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'greenTab',
                  });
                }}
              >
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="Koubei"
                key="Koubei"
                badge={'new'}
                selected={this.state.selectedTab === 'redTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'redTab',
                  });
                }}
                data-seed="logId1"
              >
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                title="My"
                key="my"
                selected={this.state.selectedTab === 'yellowTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'yellowTab',
                  });
                }}
              >
              </TabBar.Item>
            </TabBar>
          </div>
        );
      }
}
