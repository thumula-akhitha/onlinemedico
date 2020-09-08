import React, {Component} from 'react';
import logo from './images/contact.jpg';
// import './Contact.css';
import chat from './images/chat.PNG';
import helpcenter from './images/helpcenter.PNG';

import classes from './Contact.css';

const style={
width: '82em',
height: '30em',
paddingLeft: '5em',
paddingRight: '5em',
paddingTop: '5em',
paddingBottom: '2em'

}
class Contact extends Component{
    render() {
        return (
            <div className={classes.container}>
            <div className='contact'>
            <p className={classes.para}>Need Help?</p>
            <p className={classes.help}>We're here for you</p>
            <img src={logo} style={style} alt="logo"/>
            </div>
            <div className={classes.form}>
            <div className='row'>
              <div className={classes.postcard}>
            <div className="col-6">
      <div class="row">
      <div class="col-30">
        <label className={classes.fname}>First Name</label>
      </div>
      <div class="col-70">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
      </div>
    </div>
    <div class="row">
      <div class="col-20">
        <label className={classes.lname}>Last Name</label>
      </div>
      <div class="col-80">
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
      </div>
    </div>
    <div class="row">
      <div class="col-20">
        <label className={classes.email}>Email Add</label>
      </div>
      <div class="col-80">
       <input type='text' id='email' name='email' placeholder='Email'/>
      </div>
    </div>
    <div class="row">
      <div class="col-20">
        <label className={classes.comment}>Comment</label>
      </div>
      <div class="col-80">
        <textarea id="comment" name="Comment" placeholder="Your comments here.." ></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Submit"/>
    </div>
    </div>
    </div>
     <div class="col-6">
    <h3>Other ways to connect</h3>
     <p className={classes.post}>Call , email , send us a post card - whatever work's for you . We'll be here</p>
     <div className={classes.hell}>
    <div className='row'>
         <div className='col-1'>
         <img src={helpcenter}  alt="logo" width="40px" height="30px"/>
        </div>
        <div className='col-11'>
        <a href=''>Help center</a>
        </div>
     </div>
     </div>
     <div className='row'>
         <div className='col-1'>
         <img src={chat}  alt="logo" width="40px" height="30px"/>
        </div>
        <div className='col-11'>
        <a href=''>Get Support</a>
        </div>
     </div>
     </div>
     </div> 
    </div>
  <div className={classes.footer}>
  <div className='row'>
    <div className='col-7'>
  <h4> SIGN ME UP</h4>
  <p>Be the first to know more about the products and offers</p>
  </div>
  <div className='col-5'>
      <div className={classes.btnIn}>
        <input type="text" id="enter" placeholder='email here'/> 
        <button id="clear">SignUp</button> 
    </div>
  </div>
    </div>
    </div>
    </div>         
                   
               
        );
    }

}

export default Contact;