import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Signup.css';



const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      confirmpwd: null,
      contactnum: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
        confirmpwd: '',
        contactnum: ''
      }
    };
  }


  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case 'fullName':
        errors.fullName =
          value.match(/^[a-zA-Z][a-zA-Z\s]*$/)
            ? ''
            : 'Only letters are allowed';
        break;
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.match(/((?=.*\d)(?=.*[a-zA-Z])(?=.*[@#$%]))/)
            ? ''
            : 'Password must contain at least one letter, at least one number and special character';
        break;
      case 'confirmpassword':
        var cpwd = document.getElementById('cpassword').value;
        var pwd = document.getElementById('password').value;
        if (pwd != cpwd) {
          errors.confirmpwd = 'Password did not match';
        }
        else {
          errors.confirmpwd = '';
        }
        break;
      case 'contactnum':
        errors.contactnum =
          value.match(/^[0-9]*$/) && value.length == 10
            ? '' : 'Length must be 10 & Only digits are allowed';

        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  }




  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info('Valid Form')
    } else {
      console.error('Invalid Form')
    }
  }




  render() {
    const { errors } = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2 className='heading'>Create Account</h2>
          <form onSubmit={(e) => signup(e)} noValidate>
            <div className='fullName'>
              <label className='formlabel'>Full Name</label>
              <input type='text' placeholder='Enter Full Name' name='fullName' id ='fullName'onChange={this.handleChange} noValidate />
              {errors.fullName.length > 0 &&
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='email'>
              <label className='formlabel'>Email</label>
              <input type='email' placeholder='Enter email address' name='email' id='email' onChange={this.handleChange} noValidate />
              {errors.email.length > 0 &&
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label className='formlabel'>Password</label>
              <input type='password' id='password' placeholder='Password' name='password' onChange={this.handleChange} noValidate />
              {errors.password.length > 0 &&
                <span className='error'>{errors.password}</span>}
            </div>
            <div className='confirmpassword'>
              <label className='formlabel'> Retype Password</label>
              <input type='password' id='cpassword' placeholder='Confirm password' name='confirmpassword' onChange={this.handleChange} noValidate />
              {errors.confirmpwd.length > 0 &&
                <span className='error'>{errors.confirmpwd}</span>}
            </div>
            <div className='contactnum'>
              <label className='formlabel'>Contact Number</label>
              <input type='text' name='contactnum' id='contact_number' placeholder='Enter mobile number' onChange={this.handleChange} noValidate />
              {errors.contactnum.length > 0 &&
                <span className='error'>{errors.contactnum}</span>}
            </div>

            <label class="form-check-label">
              <div>
                <input type="checkbox" className='checkbox' required="required" />
                <p className='formpara'>I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></p>
              </div>
            </label>
            <div className='submit'>
              <button className='createbutton'>Create</button>
              <div className='info'>
                <p >Already Have an account<Link className="links" to="Login">Sign In</Link></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}



async function signup(e) {
  e.preventDefault();
  let request = {
    fullName: document.getElementById('fullName').value,
    password: document.getElementById('cpassword').value,
    email: document.getElementById('email').value,
    contactNumber: document.getElementById('contact_number').value
  }


  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request)
};
await fetch('http://127.0.0.1:3333/onlinemedico/signup', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));

}

export default SignupForm;