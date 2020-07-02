import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/ResetPassword.css';
import { Z_BLOCK } from 'zlib';
import { NONAME } from 'dns';
class ResetPasswordPage extends React.Component {
  constructor(props){
    super(props)
    this.resetpassword = this.resetpassword.bind(this);
    this.state = {
      
      email:null,
      newpassword:null,
      confirmpassword:null,
      errors: {
        email: '',
        newpassword: '',
        confirmpassword: ''  
      }
    };

  }
  handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    let errors = this.state.errors;
    console.log('test');

    switch (name) {

      case 'newpassword':
        errors.newpassword =
          value.match(/((?=.*\d)(?=.*[a-zA-Z])(?=.*[@#$%]))/)
            ? ''
            : 'Password must contain at least one letter, at least one number and special character';
        break;

      case 'confirmpassword':
        var conpwd = document.getElementById('confirmpassword').value;

        var newpwd = document.getElementById('newpassword').value;
        if (newpwd != conpwd) {
          console.log(newpwd);

          console.log(conpwd);
          errors.confirmpassword = 'Password did not match';
        }

        else {
          errors.confirmpassword = '';
        }
        break;

      }
      this.setState({ errors, [name]: value });
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
          document.getElementById("resetpara").style.display = "block"
         // this.props.history.push('/Login');
        }
        else {
          document.getElementById("resetpara").style.display = "none"
          document.getElementById("error").innerHTML = "Email is not registered"
        }
       
      })
      .catch(err => {

        document.getElementById("error").innerHTML = "" 

        console.log(err);
      })
  }
  render() {
    const { errors } = this.state;
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

                  <input type="password" className="form-control" placeholder="Enter your new password" id="newpassword" name="newpassword" onChange={this.handleChange} required/>
                  {errors.newpassword.length > 0 &&
                <span className='reseterror'>{errors.newpassword}</span>}

                </div>
                <div className="form-group">
                  <label><b>ConfirmPassword</b></label>

                  <input type="password" className="form-control" placeholder="Confirm your new password" id="confirmpassword" name="confirmpassword" onChange={this.handleChange} required/>
                  {errors.confirmpassword.length > 0 &&

                <span className='reseterror'>{errors.confirmpassword}</span>}
                </div>
                <button type="submit" className="btn btn-info">Submit</button> 

                <p id="error"></p>          
              </form>
              
            </div>
            <p id = "resetpara" className='resetpara' >Password updated successfully  <Link className="resetlink" to="Login">Click here to login</Link></p>
          </div>
        </div>
      </div>
    );
  }
}



  export default ResetPasswordPage;