import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/ResetPassword.css';
import { resetWarningCache } from 'prop-types';
class ResetPasswordPage extends React.Component {
  constructor(props){
    super(props)
    this.resetpassword = this.resetpassword.bind(this);
  }
  resetpassword(e){
    e.preventDefault();
    let request = {
      email: document.getElementById('email').value,
      newpassword: document.getElementById('newpassword').value,
      confirmpassword: document.getElementById('confirmpassword').value  

    }
    axios.post('http://127.0.0.1:3333/onlinemedico/newpassword', request)
      .then(res => {
        if(res.data.message==="Password success"){   
          document.getElementById("error").innerHTML = ""  
          this.props.history.push('/Login');
        }
        else {
          document.getElementById("error").innerHTML = "Email is not registered"
        }
       
      })
      .catch(err => {
        document.getElementById("error").innerHTML = "" 
        console.log(err);
      })
  }
  render() {
    return (
      <div className="reset-container">
        <div className="row">
          <div>
            <div className="resetform">
              <form onSubmit={this.resetpassword}>
                <h3>Reset Password</h3>
                <div className="form-group">
                  <label><b>Email</b></label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email address" aria-describedby="EmailHelp" required/>
                </div>
                <div className="form-group">
                  <label><b>NewPassword</b></label>
                  <input type="password" className="form-control" placeholder="Enter your new password" id="newpassword" required/>
                </div>
                <div className="form-group">
                  <label><b>ConfirmPassword</b></label>
                  <input type="password" className="form-control" placeholder="Confirm your new password" id="confirmpassword" required/>
                </div>
                <button type="submit" className="btn btn-info">Submit</button>  
                <p id="error"></p>          
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



  export default ResetPasswordPage;
