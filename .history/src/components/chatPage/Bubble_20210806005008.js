import React, { Component } from "react";

export default class Bubble extends Component {

    state = {
        userType : 1 // 1是对方，0是自己
    }

  renderImg = () => {
    <div class="imgContainer" v-show onClick="closeImg">
      {/* <img
        class="bigPic"
        src="src"
        alt=""
        :style="{
          transform: `translateX(-50%) translateY(-50%) scale(${kx})`,
          marginLeft: ml + 'px',
          marginTop: mt + 'px'
        }"
      /> */}
    </div>;
  };

  render() {
    if(this.setState.userType){
    return (
      <div class="chat-bubble">
        
      </div>
      )
    }
    
  }
}
