import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/Login.css';
import { resetWarningCache } from 'prop-types';
class ResetPasswordPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div>
            <div className="loginForm">
              <form onSubmit={(e)=> resetpassword(e)}>
                <h3>Reset Password</h3>
                <div className="form-group">
                  <label><b>Email</b></label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email address" aria-describedby="EmailHelp" />
                </div>
                <div className="form-group">
                  <label><b>NewPassword</b></label>
                  <input type="password" className="form-control" placeholder="Enter your new password" id="newpassword" />
                </div>
                <div className="form-group">
                  <label><b>ConfirmPassword</b></label>
                  <input type="password" className="form-control" placeholder="Confirm your new password" id="confirmpassword" />
                </div>
                <button type="submit" className="btn btn-info">Submit</button>             
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function resetpassword(e) {
    e.preventDefault();
    let request = {
      email: document.getElementById('email').value,
      newpassword: document.getElementById('newpassword').value,
      confirmpassword: document.getElementById('confirmpassword').value  

    }
    axios.post('http://127.0.0.1:3333/onlinemedico/newpassword', request)
      .then(res => {
        alert(res.data.message);
      })
      .catch(err => {
        console.log(err);
      })
  }



  export default ResetPasswordPage;
