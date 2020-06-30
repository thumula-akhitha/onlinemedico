import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from './images/medicine.png';
import './css/Login.css';
class LoginForm extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-1 logoimg">
            <div className="logo">
              <img src={logo} alt="logo" width="350px" height="350px"/>
              <h2>OnlineMedico</h2>
            </div>
          </div>
          <div className="col-11">
            <div className="loginForm">
              <form onSubmit={(e) => login(e)}>
                <h3>Sign In</h3>
                <div className="form-group">
                  <label className="label-font">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email address" aria-describedby="EmailHelp" required/>
                </div>
                <div className="form-group">
                  <label className="label-font">Password</label>
                  <input type="password" className="form-control" placeholder="Enter your password" id="password" required/>
                </div>
                <button type="submit" className="btn btn-info">Login</button>
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
  
  function login(e) {
    e.preventDefault();
    let request = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value

    }
    axios.get('http://192.168.0.10:3333/login', request)
      .then(res => {
        alert(res.data.message);
      })
      .catch(err => {
        console.log(err);
      })
  }


  export default LoginForm;
