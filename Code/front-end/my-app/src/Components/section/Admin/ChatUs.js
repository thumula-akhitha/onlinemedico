import React, { Component } from 'react';
import "babel-polyfill";
import '../Chat/Chat.css';
import {DataContext} from '../../Context'
import Ws from '@adonisjs/websocket-client'
import moment from 'moment';
import {Launcher} from 'react-chat-window'

export class ChatUs extends Component {
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
        names: [
            {
              name : "admin",
              count:1,
              open:false,
              value :[
                {
                    author: 'them',

                    type: 'text',
                    data: {
                      text: 'Hi, Welcome to OnlineMedico.'
                    }
                  }
              ]
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
     // console.log("messageeeeee " +message.value)
      const m = this.state.count+1;
      const a = {}
    a.author = 'them';
    a.type = 'text';
    a.data={}
   // console.log(moment().utcOffset('+05:30').format('hh:mm:ss a'))
    a.data.text = <div>  <p style={{"paddingLeft":"147px","marginTop":"-10px","color":"rgb(62 44 44 / 0.7)"}}> {moment().utcOffset('').format('HH:mm')} </p> {message.value}</div>
    console.log(message.name)
   
  if(this.state.names.some(person => person.name == message.name)){
              console.log("enterddd in some state")
              this.state.names.map((k,index)=>{
                    if(k.name == message.name){
                        k.value.push(a)
                        if(k.open == false){
                        k.count = k.count+1
                        }
                       // const k3 = a

                        //this.setState

                        
                    }
                })
           this.setState({
               names : this.state.names,
               count: this.state.count+1
           })

  }
  else {
      console.log("enteredd in else some state")
    // this.state.names = {}
    // this.state.names.name= message.name
    // this.state.names.value = []
    // this.state.names.value.push(a)
    const m2 = {}
    m2.name = message.name
    m2.count = 1
    m2.open = false
    m2.value = []
    m2.value.push(a)
    this.setState({
        names:[...this.state.names,m2]
    })

  }
  const k2 = [...this.state.names]
  this.setState({
      names:k2
  })
    // this.state.names.map((k)=>{
    //     if(k.name == message.name){
    //         k.value.push(a)
    //     }
    //     else {

    //     }
    // })
//     if(this.state.names.indexOf(message.name) == -1){
//     const k2  = [...this.state.names,message.name]
//     console.log(k2)
//     this.setState({
//         names : k2
//     })
// }
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
    this.state.names.map((k)=>{
       
            k.open = false
        
    })
    this.setState({
      names : this.state.names,
      value : [],
      temp : !this.state.temp
    })
    return;
  }
  addChat(k){
      console.log("add chattt")
      const countValue = this.state.names.indexOf(k)
      const c = this.state.names[countValue].count
      this.state.names[countValue].count = 0;
      this.state.names.map((k,index)=>{
             if(index == countValue){
                 k.open = true
             }
             else {
                 k.open = false
             }

      })
            console.log("count value")
            console.log(c)
        this.setState({
            temp: true,
            value:k.value,
            name:k.name,
            names : this.state.names,
            count: this.state.count-c
        })
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
    this.state.names.map((k)=>{
        if(k.name == this.state.name){
            k.value.push(event)
        }
    })
      
   
      // 
  }
    render(){
        return(

            <div>
            <h4>List Of Active Users :</h4>

{
                   this.state.names.map(product =>(
                       <div>
                      <span><li style={{"fontSize":"22px","marginBottom":"15px","cursor":"pointer"}}
                       onClick={()=> this.addChat(product) }>{product.name}  <span style={{
                        "background-color":"#4e8cff",
                        "font-size":"18px",
                        "color":"black",        
                        "border-radius":"50%",
                        "display":"inline-block",
                        "width":"25px",
                        "height":"25px",
                        "text-align":"center",
                        "margin":"0"
                        }}>{product.count}</span></li>
                       </span>
                       </div>
                   ))}

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
        )
    }
}
export default ChatUs 
