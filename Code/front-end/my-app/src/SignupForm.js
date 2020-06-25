import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
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
      confirmpwd:null,
      contactnum:null,
      errors: {
        fullName: '',
        email: '',
        password: '',
        confirmpwd:'',
        contactnum:''
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
          value.length < 5
            ? 'Full Name must be 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 6
            ? 'Password must be 6 characters long!'
            : '';
        break;
        case 'confirmpwd':
                errors.confirmpwd = 
            this.state.password !== this.state.confirmpwd 
            ? 'does not match':'';
           
            break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Create Account</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' onChange={this.handleChange} noValidate />
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            <div className='confirmpassword'>
              <label htmlFor="confirmpassword"> Retype Password</label>
              <input type='confirmpassword' name='confirmpassword' onChange={this.handleChange} noValidate />
              {errors.confirmpwd.length > 0 && 
                <span className='error'>{errors.confirmpwd}</span>}
            </div>
            <div className='contactnum'>
              <label htmlFor="contactnum">Contact Number</label>
              <input type='text' name='contactnum' onChange={this.handleChange} noValidate />
              {errors.contactnum.length > 0 && 
                <span className='error'>{errors.contactnum}</span>}
            </div>
           
            <label class="form-check-label">
                <div>
              <input type="checkbox" className='checkbox' required="required" /> 
              <p>I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></p>
              </div>
              </label>
            <div className='submit'>
              <button>Create</button>
              <div className='info'>
              <p>Already Have an account<Link className="links" to="Login">Sign In</Link></p>
            </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}



function signup(e) {
    e.preventDefault();
    let request = {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        password: document.getElementById('password').value,
        email: document.getElementById('email').value,
        contact_number: document.getElementById('contact_number').value,
        dob: document.getElementById('dob').value,
        confirm_pwd: document.getElementById('confirm_pwd').value,
      street: document.getElementById('street').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      zip: document.getElementById('zip').value,
      country:document.getElementById('country').value
    }
    axios.post('http://192.168.0.10:3333/login', request)
      .then(res => {
        alert(res.data.message);
      })
      .catch(err => {
        console.log(err);
      })
  }
  

export default SignupForm;