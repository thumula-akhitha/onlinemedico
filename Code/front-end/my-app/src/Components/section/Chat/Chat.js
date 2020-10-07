import React, { useState, useEffect, useRef } from "react";
import regeneratorRuntime from "regenerator-runtime";
import "babel-polyfill";
import './Chat.css';
import {DataContext} from '../../Context'
import Ws from '@adonisjs/websocket-client'

import {Launcher} from 'react-chat-window'
class Chat extends React.Component {
  static contextType = DataContext;
  constructor(props){
    super(props);
    this.state = {
      count:0,
      temp:false,
        value : [{
          author: 'them',
          type: 'text',
          data: {
            text: 'Hi, Welcome to OnlineMedico.'
          }
        }
      ],
        name :" "
    }

    this.ws = Ws('ws://localhost:3333')
     this.ws.connect()
    this.ws.on('open', () => {
     
      console.log("entered open function")
    })
}
componentDidMount(){
  const {name} = this.context;

  console.log("from chat window");
  console.log(name)
  this.chat= this.ws.subscribe(`chat:${name}`)
  this.chat.on('message', (message) => {
    console.log("messageeeeee " +message.value)
    const m = this.state.count+1;
    const a = {}
  a.author = 'them';
  a.type = 'text';
  a.data={}
  a.data.text = message.value
 // const k2  = this.state.value.push(a)
// const a =  [...this.state.value, a]
    this.setState({
        value:  [...this.state.value, a],
        name : message.name,
        count:m
    })
    })
}
addName(){
            
  console.log("cameeee")
  this.setState({
    count:0,
    temp: !this.state.temp
  })
  return;
}
handleChange(event) {
  const {name} = this.context;
  console.log("valueee" + event.data.text)
    this.chat.emit('message', {
      name : name,
      value:event.data.text,
      first: this.state.name
    })
  //  const k1  = this.state.value.push(event)
    this.setState({
      value: [...this.state.value,event],
      
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
{/* <input type="text" placeholder="enter email" ref={this.prodctLink}/>
    <button className="productButton" onClick={()=>{this.addName()} }>Add to cart</button> */}
<div>
      <Launcher
        agentProfile={{
          teamName: 'Chat with us!!!',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={(e)=>{this.handleChange(e)}}
        messageList={this.state.value}
        handleClick={()=>{this.addName()} }
        isOpen = {this.state.temp}
        newMessagesCount = {this.state.count}
        showEmoji
      />
    </div>
    </div>
  )
}

}

 

export default Chat;