import React, { Component } from 'react';
import logo from '../images/contact.jpg';
import '../css/Contact.css';
import { Link } from "react-router-dom";
import chat from '../images/chat.PNG';
import ChatIn from './Chat/Chat';
import helpcenter from '../images/helpcenter.PNG';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import moment from 'moment';
import * as Scroll from 'react-scroll';


const ImgStyle = {
  width: '71em',
  height: '30em',
  paddingLeft: '7em',
}
let scroll    = Scroll.animateScroll;
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state={
      firstName:null,
      lastname:null,
      email:null,
      comment:null,
      errors:{
        firstName:'',
        lastName:'',
        email:'',
        comment:''
      }
    }
   
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.emailId = React.createRef();
    this.comment = React.createRef();
  }
 
  scrollToBottom=()=> {
    scroll.scrollToBottom();
  }
   handleClick = (event) => {
    const { errors } = this.state; 
    console.log("entereddd");
    const user ={
      firstName : this.firstName.current.value,
      lastName : this.lastName.current.value,
      emailId : this.emailId.current.value,
      comment : this.comment.current.value,
      time : moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'),
    } 
    if(this.firstName.current.value==='' )
    {
      errors.firstName='enter firstname'
    }
    else if(!this.firstName.current.value.match(/^[a-zA-Z][a-zA-Z\s]*$/)){
      errors.firstName='Only letters are allowed'
    }
    else{
      errors.firstName=''
    }
    let firname=errors.firstName;
    this.setState({firname:firname})
    if(this.lastName.current.value ==='' )
    {
      errors.lastName='please enter last name' 
    }
    else if(!this.lastName.current.value.match(/^[a-zA-Z][a-zA-Z\s]*$/)){
      errors.lastName='Only letters are allowed'
    }
    else{
      errors.lastName=''
    }
    let lastnme= errors.lastName
    this.setState({lastnme:lastnme})
    if(this.emailId.current.value==='')
    {
      errors.email='Please enter email address'
    }
    else{
      errors.email=''
    }
    let mailAddr=errors.email;
    this.setState({mailAddr:mailAddr})
    if(this.comment.current.value==='')
    {
    errors.comment='Please provide your comment'
    }
         else{
           errors.comment=''
      NotificationManager.info('Our Team will contact you soon','we have received your message',4000);
      setTimeout(()=>{
      this.firstName.current.value=" ";
      this.lastName.current.value=" ";
      this.emailId.current.value=" ";
      this.comment.current.value=" ";
    },4000);
  }
    let comm=errors.comment;
    this.setState({comm:comm})
     //   else{
  //     NotificationManager.info('Our Team will contact you soon','we have received your message',8000);
  //     setTimeout(()=>{
  //     this.firstName.current.value=" ";
  //     this.lastName.current.value=" ";
  //     this.emailId.current.value=" ";
  //     this.comment.current.value=" ";
  //   },4000);
  // }   
    console.log(this.firstName.current.value)
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post(`http://127.0.0.1:3333/onlinemedico/user/contactUs`, user )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
  render() {
    const { errors } = this.state;
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
                <div className="row">
                  <div className="col-30">
                    <label className="fname">First Name</label>
                  </div>
                  <div className="col-70">
                    <input className="firstname" type="text" id="fname" name="firstname" placeholder="Your name.."ref={this.firstName} required/>
                    {errors.firstName.length > 0 &&
                <span className='errors'>{errors.firstName}</span>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-20">
                    <label className="lname">Last Name</label>
                  </div>
                  <div className="col-80">
                    <input className='lastName' type="text" id="lname" name="lastname" placeholder="Your last name.." ref={this.lastName} required/>
                    {errors.lastName.length > 0 &&
                <span className='errors'>{errors.lastName}</span>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-20">
                    <label className='email'>Email ID</label>
                  </div>
                  <div className="col-80">
                    <input className='emailid' type='text' id='email' name='email' placeholder='Email' ref={this.emailId} required />
                    {errors.email.length > 0 &&
                <span className='errors'>{errors.email}</span>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-20">
                    <label className='comment'>Comment</label>
                  </div>
                  <div className="col-80">
                    <textarea className='commentArea' id="comment" name="Comment" placeholder="Your comments here.." ref={this.comment}></textarea>
                    {errors.comment.length > 0 &&
                <span className='errors'>{errors.comment}</span>}
                  </div>
                </div>
                <div className="row">
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
                  <Link onClick={this.scrollToBottom}>Help center</Link>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-2'>
                  <img src={chat} alt="logo" width="40px" height="30px" />
                </div>
                <div className='col-10'>
                  <Link to='/onlinemedico/faq'>FAQ</Link>
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