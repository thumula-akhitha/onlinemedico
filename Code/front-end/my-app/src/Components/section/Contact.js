import React, { Component } from 'react';
import logo from '../images/contact.jpg';
import '../css/Contact.css';
import chat from '../images/chat.PNG';
import ChatIn from './Chat/Chat';
import helpcenter from '../images/helpcenter.PNG';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


// import classes from './Contact.css';

const ImgStyle = {
  width: '71em',
  height: '30em',
  paddingLeft: '5em',
  paddingRight: '5em',
  paddingTop: '5em',
  paddingBottom: '2em'

}
class Contact extends Component {
  constructor(props) {
    super(props);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.emailId = React.createRef();
    this.comment = React.createRef();
  }
   handleClick = () => {
    console.log("entereddd");
    const user ={
      firstName : this.firstName.current.value,
      lastName : this.lastName.current.value,
      emailId : this.emailId.current.value,
      comment : this.comment.current.value
    }
    console.log(this.firstName.current.value)
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post(`http://127.0.0.1:3333/onlinemedico/user/contactUs`, user )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      NotificationManager.info('Our Team will contact you soon','we have received your message',8000);
      setTimeout(()=>{
      this.firstName.current.value=" ";
      this.lastName.current.value=" ";
      this.emailId.current.value=" ";
      this.comment.current.value=" ";
    },8000);
  }
  render() {
    return (
      <div className='container-fluid'>
        <div className='contact'>
          <p className='parahelp'>Need Help?</p>
          <p className='help'>We're here for you</p>
          <img src={logo} style={ImgStyle} alt="logo" />
        </div>
        <div className='form'>
          <div className='row'>
            <div className='postcard'>
              <div className="col-6">
                <div class="row">
                  <div class="col-30">
                    <label className="fname">First Name</label>
                  </div>
                  <div class="col-70">
                    <input className="firstname" type="text" id="fname" name="firstname" placeholder="Your name.." ref={this.firstName} required/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-20">
                    <label className="lname">Last Name</label>
                  </div>
                  <div class="col-80">
                    <input className='lastName' type="text" id="lname" name="lastname" placeholder="Your last name.." ref={this.lastName} required/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-20">
                    <label className='email'>Email ID</label>
                  </div>
                  <div class="col-80">
                    <input className='emailid' type='text' id='email' name='email' placeholder='Email' ref={this.emailId} required />
                  </div>
                </div>
                <div class="row">
                  <div class="col-20">
                    <label className='comment'>Comment</label>
                  </div>
                  <div class="col-80">
                    <textarea className='commentArea' id="comment" name="Comment" placeholder="Your comments here.." ref={this.comment}></textarea>
                  </div>
                </div>
                <div class="row">
                  <input className='contactSubmit' type="submit" value="Submit" onClick={this.handleClick} />
                </div>
                <NotificationContainer/>
              </div>
            </div>
            <div className="col-4">
              <h3>Other ways to connect</h3>
              <p className='post'>Call , email , send us a post card - whatever work's for you . We'll be here</p>
              <div className='hell'>
                <div className='row'>
                  <div className='col-2'>
                    <img src={helpcenter} alt="logo" width="40px" height="30px" />
                  </div>
                  <div className='col-10'>
                    <a href=''>Help center</a>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-2'>
                  <img src={chat} alt="logo" width="40px" height="30px" />
                </div>
                <div className='col-10'>
                  <a href=''>Get Support</a>
                </div>
              </div>
            </div>
          </div>
        </div>
<ChatIn></ChatIn>
      </div>
       
    );
  }

}

export default Contact;