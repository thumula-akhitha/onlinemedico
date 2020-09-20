import React, { Component } from 'react';
import logo from '../images/contact.jpg';
import '../css/Contact.css';
import chat from '../images/chat.PNG';
import helpcenter from '../images/helpcenter.PNG';
import {UserDetails} from './ContextData.js'

// import classes from './Contact.css';

const ImgStyle = {
  width: '80em',
  height: '30em',
  paddingLeft: '5em',
  paddingRight: '5em',
  paddingTop: '5em',
  paddingBottom: '2em'

}
class Contact extends Component {
  
  render() {
    
    return (
      <div className='container-fluid'>
        <div className='contact'>
          <p className='para'>Need Help?</p>
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
                    <input className="firstname" type="text" id="fname" name="firstname" placeholder="Your name.." />
                  </div>
                </div>
                <div class="row">
                  <div class="col-20">
                    <label className="lname">Last Name</label>
                  </div>
                  <div class="col-80">
                    <input className='lastName' type="text" id="lname" name="lastname" placeholder="Your last name.." />
                  </div>
                </div>
                <div class="row">
                  <div class="col-20">
                    <label className='email'>Email Add</label>
                  </div>
                  <div class="col-80">
                    <input className='emailid' type='text' id='email' name='email' placeholder='Email' />
                  </div>
                </div>
                <div class="row">
                  <div class="col-20">
                    <label className='comment'>Comment</label>
                  </div>
                  <div class="col-80">
                    <textarea className='commentArea' id="comment" name="Comment" placeholder="Your comments here.." ></textarea>
                  </div>
                </div>
                <div class="row">
                  <input className='contactSubmit' type="submit" value="Submit" />
                </div>
              </div>
            </div>
            <div>
              <h3>Other ways to connect</h3>
              <p className='post'>Call , email , send us a post card - whatever work's for you . We'll be here</p>
              <div className='hell'>
                <div className='row'>
                  <div className='col-1'>
                    <img src={helpcenter} alt="logo" width="40px" height="30px" />
                  </div>
                  <div className='col-11'>
                    <a href=''>Help center</a>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-1'>
                  <img src={chat} alt="logo" width="40px" height="30px" />
                </div>
                <div className='col-11'>
                  <a href=''>Get Support</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer'>
          <div>
            <div>
              <h4> SIGN ME UP</h4>
              <p>Be the first to know more about the products and offers</p>
            </div>
            <div>
              <div className='btnIn'>
                <input className='signupemail' type="text" id="enter" placeholder='email here' />
                <button className='clearbtn' id="clear">SignUp</button>
              </div>


            </div>
          </div>
        </div>
      </div>


    );
  }

}

export default Contact;