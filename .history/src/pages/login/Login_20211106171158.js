import React, { Component } from "react"
import { Link } from "react-router-dom"
import PubSub from "pubsub-js"
import { Toast } from "antd-mobile"

import { login } from "../../api/user"

export default class Login extends Component {


  constructor() {
    super()
    this.state = {
      account: "+86",
      password: "",
      showline_account: false,
      showline_password: false
    }

    PubSub.subscribe(`SIGN ACCOUNT`, (msg, data) => {
      if(data){
        this.setState({
          account: data
        })
      }else {
        this.setState({
          account: "+86"
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
    const reg = /\+86/
    if(reg.test(account)) account = account.slice(3) // 有+86则要删掉
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
    return (
      <div className="login-page-wrap">
        <div className="title">手机号登录</div>
        <div className="input-wrap">
          <div className="in-front-of-Input">手机号</div>
          <label htmlFor="">+86</label>
          <input
            name="account"
            type="text"
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
            type="password"
            onFocus={() => this.showline(1)}
            onBlur={() => this.hideline(1)}
            value={this.state.password}
            onChange={this.handleInput}
            placeholder="请填写微信密码"
          />
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
