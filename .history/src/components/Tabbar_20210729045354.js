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
                  <svg t="1627505611748" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="65940" width="25" height="25"><path d="M711.602525 387.791094l215.391628 0c16.918321 0 29.658484 8.594749 29.658484 26.744107 0 18.154475-14.712073 26.749224-31.629371 26.749224L711.602525 441.284425c-16.925485 0-30.656207-8.594749-30.656207-26.749224C680.946318 396.384819 694.677041 387.791094 711.602525 387.791094z" p-id="65941" fill="#dbdbdb"></path><path d="M956.088796 537.099654c0 18.151405-12.748349 26.752294-29.661553 26.752294L757.275751 563.851948c-16.925485 0-30.65723-8.597819-30.65723-26.752294 0-18.149359 13.731746-26.743084 30.65723-26.743084l170.132842 0C944.324868 510.35657 956.088796 518.950296 956.088796 537.099654z" p-id="65942" fill="#dbdbdb"></path><path d="M800.847106 814.385958c0 39.784098-32.308847 64.12446-72.02643 64.12446L466.867592 878.510418l-84.297918 0-245.941412 0c-39.711444 0-72.024383-24.337291-72.024383-64.12446l0-17.287735c0-36.45426 26.839275-68.769246 61.099566-81.065294l146.643871-65.364707c0 0 39.749306-12.218276 50.631144-24.411993 7.239891-8.121981 9.473769-34.901905 0.296759-52.481282-9.174963-17.577331-83.47825-114.289999-83.47825-195.409528 0-130.822534 85.99149-236.876965 192.06127-236.876965 106.073874 0 192.058201 106.054431 192.058201 236.876965 0 84.695984-83.380012 177.934528-90.234117 200.878077-6.859221 22.943548-7.41283 40.902572 0.333598 48.523133 12.050454 11.843746 43.062771 23.88806 43.062771 23.88806l162.670893 63.391772c34.262338 12.301164 61.10059 45.601594 61.10059 82.055854L800.847106 814.385958 800.847106 814.385958z" p-id="65943" fill="#dbdbdb"></path><path d="M926.918429 679.299307 813.853327 679.299307c-16.921391 0-30.653137-8.594749-30.653137-26.752294 0-18.147312 13.731746-26.743084 30.653137-26.743084l114.049522 0c16.921391 0 29.647227 8.594749 29.647227 26.743084C957.549054 670.701488 943.837774 679.299307 926.918429 679.299307z" p-id="65944" fill="#dbdbdb"></path></svg>
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
