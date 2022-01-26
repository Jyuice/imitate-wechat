import React, { Component } from "react";
// 引入组件
import { Icon } from "antd-mobile";
// import PubSub from 'pubsub-js';
import { Input } from '@chatui/core';
import { nanoid } from "nanoid";
import Bubble from "../../components/chatPage/Bubble";

export default class ChatPage extends Component {

  state = {
    value: "",
    msgList: [
      {
        id: nanoid(),
        userType: 1,
        content: "哈哈哈哈",
      },{
        id: nanoid(),
        userType: 0,
        content: "哈哈",
      },
    ]
  }

  renderIconOrBtn = () => {
    if(this.state.value !== '') {
      return (
          <button className="btn" onKeyDown={e => this.judgeEnter(e)} onClick={this.sendMsg}>发送</button>
      )
    }else{
      return (
          <svg t="1627607873816" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="121679" width="30" height="30"><path d="M665.6 486.4h-128v-128c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v128h-128c-15.36 0-25.6 10.24-25.6 25.6s10.24 25.6 25.6 25.6h128v128c0 15.36 10.24 25.6 25.6 25.6s25.6-10.24 25.6-25.6v-128h128c15.36 0 25.6-10.24 25.6-25.6 0-12.8-10.24-25.6-25.6-25.6zM512 102.4c-225.28 0-409.6 184.32-409.6 409.6S286.72 921.6 512 921.6 921.6 737.28 921.6 512 737.28 102.4 512 102.4z m0 768c-197.12 0-358.4-161.28-358.4-358.4S314.88 153.6 512 153.6 870.4 314.88 870.4 512 709.12 870.4 512 870.4z" p-id="121680" fill="#515151"></path></svg>
      )
    }
  }

  sendMsg = () => {
    let obj = {
      id: nanoid(),
      userType: 0,
      content: this.state.value
    }
    this.setState({
      value: "",
      msgList: [...this.state.msgList,obj]
    })
  }

  judgeEnter = e => {
    console.log(e)
    if(e.keyCode === 13) this.sendMsg()
  }

  handleInput = val => {
    this.setState({
      value: val
    })
  }

  goback = () => {
    this.props.history.go(-1)
  }

  render() {
    const { name,avatar } = this.props.location.state;
    return (
      <div className="chat-page">
        <div className="chat-page-navbar">
          <Icon onClick={this.goback} className="backIcon" type="left" />
          <span className="name">{name}</span>
          <Icon
            className="moreIcon"
            type="ellipsis"
            onClick={this.toBusiness}
          />
        </div>

        {this.state.msgList.map(i => (
          <Bubble key={i.id} leftAvatar={avatar} msg={i} />
        ))}

        <div className="chat-page-input">
          <svg
            t="1627607640025"
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="116917"
            width="25"
            height="25"
          >
            <path
              d="M512 58.181818A453.818182 453.818182 0 1 1 58.181818 512 454.516364 454.516364 0 0 1 512 58.181818M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m-15.127273 678.167273a213.643636 213.643636 0 0 0 0-332.334546 29.323636 29.323636 0 0 0-40.96 4.189091 28.858182 28.858182 0 0 0 4.189091 40.96 155.927273 155.927273 0 0 1 58.181818 121.018182 154.298182 154.298182 0 0 1-57.949091 120.785455 29.090909 29.090909 0 0 0 18.385455 51.665454 29.556364 29.556364 0 0 0 18.152727-6.283636z m142.661818 93.090909a359.796364 359.796364 0 0 0 0-519.447273 29.090909 29.090909 0 1 0-40.261818 41.890909 302.545455 302.545455 0 0 1 0 435.665455 28.858182 28.858182 0 0 0 0 40.96 28.392727 28.392727 0 0 0 20.945455 9.076363 28.858182 28.858182 0 0 0 19.316363-7.68zM355.84 465.454545a46.545455 46.545455 0 1 0 46.545455 46.545455 46.545455 46.545455 0 0 0-46.545455-46.545455z"
              p-id="116918"
            ></path>
          </svg>
          <Input className="textarea" autoSize value={this.state.value} maxRows={8}
            onChange={this.handleInput} name="" id=""></Input>
          <svg
            t="1627607851197"
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="120601"
            width="25"
            height="25"
          >
            <path
              d="M512 992C247.3 992 32 776.7 32 512S247.3 32 512 32s480 215.3 480 480-215.3 480-480 480z m0-896C282.6 96 96 282.6 96 512s186.6 416 416 416 416-186.6 416-416S741.4 96 512 96z"
              fill="#515151"
              p-id="120602"
            ></path>
            <path
              d="M512 800c-78 0-151.1-30.7-205.7-86.5C253.2 659.4 224 587.8 224 512c0-17.7 14.3-32 32-32h512c17.7 0 32 14.3 32 32 0 75.8-29.2 147.4-82.3 201.5C663.1 769.3 590 800 512 800zM352 668.8c42.5 43.4 99.3 67.2 160 67.2s117.5-23.9 160-67.2c33.7-34.4 55-77.9 61.7-124.8H290.3c6.6 46.9 28 90.3 61.7 124.8zM368 416c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM656 416c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
              fill="#515151"
              p-id="120603"
            ></path>
          </svg>
          {this.renderIconOrBtn()}
        </div>
      </div>
    );
  }
}

// function a(props) {
//   const { avatar } = props.location.state
//   const initialMessages = [
//     {
//       type: 'text',
//       content: { text: '主人好，我是智能助理，你的贴心小助手~' },
//       user: { avatar:  baseUrl + avatar },
//     },
//     {
//       type: 'image',
//       content: {
//         picUrl: '//img.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png',
//       },
//       user: { avatar:  baseUrl + avatar },
//     },
//   ];

//   // 消息列表
//   const { messages, appendMsg, setTyping } = useMessages(initialMessages);
//   const [value, setValue] = React.useState('');
//   const inputRef = React.useRef()

//   // 发送回调
//   function handleSend(type, val) {
//     if (type === 'text' && val.trim()) {
//       // TODO: 发送请求
//       appendMsg({
//         type: 'text',
//         content: { text: val },
//         position: 'right',
//       });

//       setTyping(true);

//       // 模拟回复消息
//       setTimeout(() => {
//         appendMsg({
//           type: 'text',
//           content: { text: '亲，您遇到什么问题啦？请简要描述您的问题~' },
//         });
//       }, 1000);
//     }
//   }

//   // 快捷短语回调，可根据 item 数据做出不同的操作，这里以发送文本消息为例
//   function handleQuickReplyClick(item) {
//     handleSend('text', item.name);
//   }

//   function renderMessageContent(msg) {
//     const { type, content } = msg;

//     // 根据消息类型来渲染
//     switch (type) {
//       case 'text':
//         return <Bubble style={{borderRadius: "2px",background: "green"}} content={content.text} />;
//       case 'image':
//         return (
//           <Bubble type="image">
//             <img src={content.picUrl} alt="" />
//           </Bubble>
//         );
//       default:
//         return null;
//     }
//   }

//   function renderNavbar() {
//       const { name } = props.location.state
//       return (
//           <div className="chat-page-navbar">
//               <Icon onClick={goback} className="backIcon" type="left" />
//               <span className="name">{name}</span>
//               <Icon className="moreIcon" type="ellipsis" onClick={toBusiness} />
//           </div>
//       )
//   }

//   function renderInput() {
//       return (
//           <div className="chat-page-input">
//               <svg t="1627607640025" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="116917" width="25" height="25"><path d="M512 58.181818A453.818182 453.818182 0 1 1 58.181818 512 454.516364 454.516364 0 0 1 512 58.181818M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m-15.127273 678.167273a213.643636 213.643636 0 0 0 0-332.334546 29.323636 29.323636 0 0 0-40.96 4.189091 28.858182 28.858182 0 0 0 4.189091 40.96 155.927273 155.927273 0 0 1 58.181818 121.018182 154.298182 154.298182 0 0 1-57.949091 120.785455 29.090909 29.090909 0 0 0 18.385455 51.665454 29.556364 29.556364 0 0 0 18.152727-6.283636z m142.661818 93.090909a359.796364 359.796364 0 0 0 0-519.447273 29.090909 29.090909 0 1 0-40.261818 41.890909 302.545455 302.545455 0 0 1 0 435.665455 28.858182 28.858182 0 0 0 0 40.96 28.392727 28.392727 0 0 0 20.945455 9.076363 28.858182 28.858182 0 0 0 19.316363-7.68zM355.84 465.454545a46.545455 46.545455 0 1 0 46.545455 46.545455 46.545455 46.545455 0 0 0-46.545455-46.545455z" p-id="116918"></path></svg>
//               <Input ref={inputRef} autoSize value={value} onChange={val => setValue(val)} placeholder="" style={{width: "65%",border: "#000", outline: "none", borderRadius: "3px"}} />
//               <svg t="1627607851197" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="120601" width="25" height="25"><path d="M512 992C247.3 992 32 776.7 32 512S247.3 32 512 32s480 215.3 480 480-215.3 480-480 480z m0-896C282.6 96 96 282.6 96 512s186.6 416 416 416 416-186.6 416-416S741.4 96 512 96z" fill="#515151" p-id="120602"></path><path d="M512 800c-78 0-151.1-30.7-205.7-86.5C253.2 659.4 224 587.8 224 512c0-17.7 14.3-32 32-32h512c17.7 0 32 14.3 32 32 0 75.8-29.2 147.4-82.3 201.5C663.1 769.3 590 800 512 800zM352 668.8c42.5 43.4 99.3 67.2 160 67.2s117.5-23.9 160-67.2c33.7-34.4 55-77.9 61.7-124.8H290.3c6.6 46.9 28 90.3 61.7 124.8zM368 416c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM656 416c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" fill="#515151" p-id="120603"></path></svg>
//               {renderIconOrBtn()}
//           </div>
//       )
//   }

//   function renderIconOrBtn() {
//       if(value !== '') {
//         return (
//             <button className="btn">发送</button>
//         )
//       }else{
//         return (
//             <svg t="1627607873816" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="121679" width="30" height="30"><path d="M665.6 486.4h-128v-128c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v128h-128c-15.36 0-25.6 10.24-25.6 25.6s10.24 25.6 25.6 25.6h128v128c0 15.36 10.24 25.6 25.6 25.6s25.6-10.24 25.6-25.6v-128h128c15.36 0 25.6-10.24 25.6-25.6 0-12.8-10.24-25.6-25.6-25.6zM512 102.4c-225.28 0-409.6 184.32-409.6 409.6S286.72 921.6 512 921.6 921.6 737.28 921.6 512 737.28 102.4 512 102.4z m0 768c-197.12 0-358.4-161.28-358.4-358.4S314.88 153.6 512 153.6 870.4 314.88 870.4 512 709.12 870.4 512 870.4z" p-id="121680" fill="#515151"></path></svg>
//         )
//       }

//   }

//   useEffect(() => {
//     function getFocusDom() {
//       const input = inputRef.current
//       var fDOM = input;
//       var len = input.value.length;
//       setSelectionRange(fDOM, len, len);
//     }
//     function setSelectionRange(input,selectionStart, selectionEnd) {
//       if (input.setSelectionRange) {
//           input.focus();
//           input.setSelectionRange(selectionStart, selectionEnd);
//       }
//       else if (input.createTextRange) {
//           var range = input.createTextRange();
//           range.collapse(true);
//           range.moveEnd('character', selectionEnd);
//           range.moveStart('character', selectionStart);
//           range.select();
//       }
//   }
//     getFocusDom()
//   }, [value])

//   function goback() {
//     props.history.go(-1)
//   }

//   function toBusiness() {
//     props.history.push('/home/chat/business',{})
//   }

//   return (
//     <Chat
//       messages={messages}
//       renderMessageContent={renderMessageContent}
//       quickRepliesVisible={false}
//       onQuickReplyClick={handleQuickReplyClick}
//       onSend={handleSend}
//       renderNavbar={renderNavbar}
//       Composer={renderInput}
//     />
//   );
// }
