import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import { Link } from 'react-router-dom';
import logo from './images/medicine.png';
import './css/Login.css';
class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.login = this.login.bind(this);
  }
  login(e){
    e.preventDefault();
    let request = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value

    }
    axios.post('http://127.0.0.1:3333/onlinemedico/login', request)
      .then(res => {
        if(res.data.message==="success"){   
          document.getElementById("error").innerHTML = ""  
          this.props.history.push('/Home');
        }
        else if(res.data.message==="failure") {
          document.getElementById("error").innerHTML = "Incorrect username and password"
        }
        else{
          document.getElementById("error").innerHTML = "Email doesn't exist please enter registered email address"
        }
      })
      .catch(err => {
        document.getElementById("error").innerHTML = "" 
        console.log(err);
      })
  }
  render() {
    return (
      <div className="container">
        <div className="row login-row">
          <div className="col-1 logoimg">
            <div className="logo">
              <img src={logo} alt="logo" width="350px" height="350px"/>
              <h2>OnlineMedico</h2>
            </div>
          </div>
          <div className="col-11">
            <div className="loginForm">
              <form onSubmit={this.login}>
                <h3>Sign In</h3>
                <div className="form-group ">
                  <label className="label-font">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email address" aria-describedby="EmailHelp" required/>
                </div>
                <div className="form-group">
                  <label className="label-font">Password</label>
                  <input type="password" className="form-control" placeholder="Enter your password" id="password" required/>
                </div>
                <button type="submit" className="login-btn btn-info">Login</button>
                <p id="error"></p>
                <p className="msg">
                 <b>Don't have an account?</b>
                <Link className="links" to="/Signup"><u>Signup</u></Link>
                </p>
                <Link className="forgot-link" to="/ForgotPassword"><u>Forgot Password?</u></Link>     
                    
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  
  

  export default LoginForm;
