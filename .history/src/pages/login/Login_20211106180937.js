import React, { Component } from "react"
import { Link } from "react-router-dom"
import PubSub from "pubsub-js"
import { Toast } from "antd-mobile"
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { login } from "../../api/user"

export default class Login extends Component {


  constructor() {
    super()
    this.state = {
      account: "",
      password: "",
      showline_account: false,
      showline_password: false,
      visible: false
    }

    PubSub.subscribe(`SIGN ACCOUNT`, (msg, data) => {
      if(data){
        this.setState({
          account: data
        })
      }else {
        this.setState({
          account: ""
        })
      }
    })
  }

  componentDidMount() {
    if(localStorage.getItem('userId')) {
      this.props.history.push('/home')
    }
  }

  componentWillUnmount = () => {
    this.setState = (state,callback)=>{
      return;
    };
  }

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = () => {
    let { account, password } = this.state
    const self = this
    login({
      account: account,
      password: password
    }).then(res => {
      if(res.message === "登录失败") {
        Toast.fail('登录失败', 2)
      }else{
        localStorage.removeItem("userId")
        localStorage.setItem("userId",res.userId)

        self.props.history.push("/home")
        PubSub.publish(`HIDE NAVBAR`, false)
        PubSub.publish(`HIDE TABBAR`, false)
      }
    })
  }

  showline = type => {
    if(!type*1) { // account
      this.setState({
        showline_account: true
      })
    }else {
      this.setState({
        showline_password: true
      })
    }
  }

  hideline = type => {
    if(!type*1) { // account
      this.setState({
        showline_account: false
      })
    }else {
      this.setState({
        showline_password: false
      })
    }
  }

  render() {
    PubSub.publish(`HIDE NAVBAR`, true);
    PubSub.publish(`HIDE TABBAR`, true);
    let { visible } = this.state
    return (
      <div className="login-page-wrap">
        <div className="title">手机号登录</div>
        <div className="input-wrap">
          <div className="in-front-of-Input">手机号</div>
          <label htmlFor="account">+86</label>
          <input
            name="account"
            type="text"
            id="account"
            onFocus={() => this.showline(0)}
            onBlur={() => this.hideline(0)}
            value={this.state.account}
            onChange={this.handleInput}
            placeholder="请填写手机号"
          />
          <div className={`line ${this.state.showline_account ? 'animation' : ''}`} ></div>
        </div>
        <div className="input-wrap">
          <div className="in-front-of-Input">密码</div>
          <input
            name="password"
            type={ visible ? 'text' : 'password'}
            id="password"
            onFocus={() => this.showline(1)}
            onBlur={() => this.hideline(1)}
            value={this.state.password}
            onChange={this.handleInput}
            placeholder="请填写微信密码"
          />
          {visible
          ? <EyeTwoTone onClick={() => this.setState({visible: false})} /> 
          : <EyeInvisibleOutlined onClick={() => this.setState({visible: true})} />}
          <div className={`line ${this.state.showline_password ? 'animation' : ''}`}></div>
        </div>

        <button className="btn" onClick={this.handleLogin}>
          登录
        </button>

        <div className="sign">
          还没有账号？
          <Link to="/sign">去创建</Link>
        </div>
      </div>
    );
  }
}
