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
                icon={<svg t="1627505055366" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="56057" width="20" height="20"><path d="M511.442 81.515c-246.459 0-446.254 173.733-446.254 388.045 0 125.465 68.485 237.011 174.711 307.944l-0.087 163.805 145.865-99.332c39.889 10.17 82.094 15.632 125.766 15.632 246.46 0 446.254-173.735 446.254-388.049 0-214.313-199.794-388.045-446.255-388.045z m0 737.287c-48.528 0-95.072-7.278-138.235-20.619l-34.945 29.12c0.673 0.247 1.351 0.486 2.026 0.73l-61.04 43.332-0.634-78.271v-36.897c-105.556-63.11-174.621-167.959-174.621-286.638 0-192.881 182.423-349.243 407.45-349.243s407.45 156.362 407.45 349.243c-0.001 192.884-182.424 349.243-407.451 349.243z" p-id="56058" fill="#707070"></path></svg>}
                selectedIcon={<i className="iconfont icon-xiaoxi selected" fill="#08C163"></i>}
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
