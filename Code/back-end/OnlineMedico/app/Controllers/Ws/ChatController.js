'use strict'
const Ws = use('Ws')
class ChatController {
  constructor ({ socket, request }) {
    console.log("controller function")
   // console.log(this.socket.id)
    this.socket = socket
    this.request = request
  }
  onMessage (message) {
       console.log(message)
    // this.socket.on('join', function (data) {
    //   console.log(data.email)
    //   // We are using room of socket io
    // });
    //const topic = Ws.getChannel('chat:kumar')
    const k = {}
    k.name = message.name;
    k.value = message.value
    console.log("k value "+k)
    if(k.name !== "admin"){
      console.log("k value "+k.name)
      console.log("Not admin")
    const chat = Ws.getChannel('chat:*')
const topic = chat.topic(`chat:admin`)
   console.log("this is topic  "+topic)
    topic.broadcast('message', k)
    }
    else {
      console.log("admin ")
      if(message.first != " "){
      const chat = Ws.getChannel('chat:*')
      const topic = chat.topic(`chat:${message.first}`)
         //console.log("this is topic  "+topic)
          topic.broadcast('message', k)
      }
    }
  }
  // onJoin(message){
  //   console.log("entereddddddddddd")
  //   console.log(message.email)
  //   this.socket.join(message.email);

  // }
  * joinRoom (room,body, socket) {
    console.log("enteredd roommmm")
    const user = this.socket.currentUser
    console.log(user)
    // throw error to deny a socket from joining room
  }
}

module.exports = ChatController
