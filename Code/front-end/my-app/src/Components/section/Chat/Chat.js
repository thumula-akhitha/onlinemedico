import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Ws from '@adonisjs/websocket-client'
import './App.css'
import {Launcher} from 'react-chat-window'
class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        value : ['this is start chat'],
        name :" "
    }
    this.prodctLink=React.createRef();
    this.productChat=React.createRef();
    this.ws = Ws('ws://localhost:3333')
     this.ws.connect()
    this.ws.on('open', () => {
     
      console.log("entered open function")
    })
}
addName(){

    this.chat= this.ws.subscribe(`chat:${this.prodctLink.current.value}`)
    this.chat.on('message', (message) => {
      console.log("message " +message.value)
      const a =  [...this.state.value, message.value]
      this.setState({
          value: a,
          name : message.name
      })
      })
   
}
handleChange(event) {
    this.chat.emit('message', {
      name : this.prodctLink.current.value,
      value:this.productChat.current.value,
      first: this.state.name
    })
 
    // 
  }
render() {
  return (
//     <div>
//     <input type="text" placeholder="enter email" ref={this.prodctLink}/>
//     <button className="productButton" onClick={()=>{this.addName()} }>Add to cart</button>
//   <input type="text" placeholder="enter value"  ref={this.productChat} />
//   <button className="productButton" onClick={()=>{this.handleChange()} }>Send Message</button>
//   <div>
//   {
//                this.state.value.map(value =>(
//                     <p>{value}</p>
//                ))
//   }
//   </div>
// </div>
<div>
      <Launcher
        agentProfile={{
          teamName: 'react-chat-window',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={()=>{this.handleChange()}}
        messageList={this.state.value}
        showEmoji
      />
    </div>

  )
}

}

 

export default App;