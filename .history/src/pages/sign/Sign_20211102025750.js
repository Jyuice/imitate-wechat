import React, { Component } from "react";
import { Toast, Icon } from "antd-mobile";
import { withRouter } from "react-router-dom";
// import PubSub from "pubsub-js";
import baseUrl from "../../utils/baseUrl";
import { signUp } from "../../api/user";
import Cookies from 'js-cookie'

class Sign extends Component {
  state = {
    account: "+86",
    password: "",
    checkcode: "",
    checkcodeUrl: baseUrl + "/code?" + new Date(),
    showline_account: false,
    showline_password: false,
    showline_checkcode: false
  };

  // componentDidMount() {
  //   setTimeout(() => {
  //     console.log(Cookies.get())
  //   },2000)
  // }

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSign = () => {
    const { account, password, checkcode } = this.state
    if(account.length < 11+3){
        Toast.fail('账号不合法')
        this.setState({
            account: ''
        })
    }else if(password.length < 6){
        Toast.fail('密码不合法')
        this.setState({
            password: ''
        })
    }else{
        signUp({
          account: account,
          password: password,
          checkcode: checkcode.toLowerCase()
        }).then(res => {
          console.log(res[Headers])
          if(res.message === "验证码错误") {
            this.setState({
              checkcode: ""
            })
            Toast.fail('验证码错误')
            this.renewCheckcode()
          }
        })
        // Toast.success('注册成功')
        // PubSub.publish('SIGN ACCOUNT',account)
        // setTimeout(() => {
        //     this.props.history.go(-1)
        // },2000)
    }
  }

  renewCheckcode = () => {
    this.setState({
      checkcodeUrl: baseUrl + "/code?" + new Date()
    })
  }

  showline = type => {
    switch (type) {
      case 0: {
        this.setState({
          showline_account: true
        })
        break
      }
      case 1: {
        this.setState({
          showline_password: true
        })
        break
      }
      case 2: {
        this.setState({
          showline_checkcode: true
        })
        break
      }
      default: {}
    }
  }

  hideline = type => {
    switch (type) {
      case 0: {
        this.setState({
          showline_account: false
        })
        break
      }
      case 1: {
        this.setState({
          showline_password: false
        })
        break
      }
      case 2: {
        this.setState({
          showline_checkcode: false
        })
        break
      }
      default: {}
    }
  }

  render() {
    return (
      <div className="login-page-wrap">
        <div className="title">
          <Icon className="backIcon" type="left" onClick={() => {
            this.props.history.push('/login')
          }} />
          <div>注册</div>
        </div>
        <div className="input-wrap">
          <div className="in-front-of-Input">手机号</div>
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
            placeholder="请设置6位以上密码"
          />
          <div className={`line ${this.state.showline_password ? 'animation' : ''}`} ></div>
        </div>
        <div className="input-wrap">
          <div className="in-front-of-Input">验证码</div>
          <input
            name="checkcode"
            type="text"
            onFocus={() => this.showline(2)}
            onBlur={() => this.hideline(2)}
            value={this.state.checkcode}
            onChange={this.handleInput}
            placeholder="请输入验证码"
          />
          <div className={`line ${this.state.showline_checkcode ? 'animation' : ''}`} ></div>
          <img className="checkcode" src={this.state.checkcodeUrl} onClick={this.renewCheckcode} alt="" />
        </div>
        <button className="btn" onClick={this.handleSign}>
            注册
        </button>
      </div>
    );
  }
}

export default withRouter(Sign)
