import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import './css/Signup.css';

function ValidationMessage(props) {
    if (!props.valid) {
      return(
        <div className='error-msg'>{props.message}</div>
      )
    }
    return null;
  }

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updatable: false,
            firstname: '',firstnameValid:false,
            lastname: '',lastnameValid:false,
            password: '',passwordValid:false,
            email: '',emailValid: false,
            contact_number: '',contactValid:false,
            dob: new Date(),
            passwordConfirm: '', passwordConfirmValid: false,
            street: '',streetValid:false,
            state: '',stateValid:false,
            city: '',cityValid:false,
            zip: '',zipValid:false,
            country:'',countryValid:false,
            formValid: false,
            errorMsg: {}
        }
    }
    validateForm = () => {
        const {firstnameValid,lastnameValid, emailValid, passwordValid, passwordConfirmValid,contactValid,streetValid,stateValid,cityValid,countryValid,zipValid} = this.state;
        this.setState({
          formValid: firstnameValid && lastnameValid && emailValid && passwordValid && passwordConfirmValid && contactValid && streetValid && stateValid && cityValid && countryValid && zipValid
        })
      }
    
      updateFirstname = (firstname) => {
        this.setState({firstname}, this.validateFirstname)
      }
    
      validateFirstname = () => {
        const {firstname} = this.state;
        let firstnameValid = true;
        let errorMsg = {...this.state.errorMsg}
    
        if (firstname.length < 3) {
          firstnameValid = false;
          errorMsg.firstname = 'Must be at least 3 characters long'
        }
    
        this.setState({firstnameValid, errorMsg}, this.validateForm)
      }

      updateLastname = (lastname) => {
        this.setState({lastname}, this.validateLastname)
      }
    
      validateLastname = () => {
        const {lastname} = this.state;
        let lastnameValid = true;
        let errorMsg = {...this.state.errorMsg}
    
        if (lastname.length < 3) {
          lastnameValid = false;
          errorMsg.lastname = 'Must be at least 3 characters long'
        }
    
        this.setState({lastnameValid, errorMsg}, this.validateForm)
      }


    
      updateEmail = (email) => {
        this.setState({email}, this.validateEmail)
      }
    
      validateEmail = () => {
        const {email} = this.state;
        let emailValid = true;
        let errorMsg = {...this.state.errorMsg}
    
        // checks for format _@_._
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
          emailValid = false;
          errorMsg.email = 'Invalid email format'
        }
    
        this.setState({emailValid, errorMsg}, this.validateForm)
      }
    
      updatePassword = (password) => {
        this.setState({password}, this.validatePassword);
      }
    
      validatePassword = () => {
        const {password} = this.state;
        let passwordValid = true;
        let errorMsg = {...this.state.errorMsg}
    
        // must be 6 chars
        // must contain a number
        // must contain a special character
    
        if (password.length < 6) {
          passwordValid = false;
          errorMsg.password = 'Password must be at least 6 characters long';
        } else if (!/\d/.test(password)){
          passwordValid = false;
          errorMsg.password = 'Password must contain a digit';
        } else if (!/[!@#$%^&*]/.test(password)){
          passwordValid = false;
          errorMsg.password = 'Password must contain special character: !@#$%^&*';
        }
    
        this.setState({passwordValid, errorMsg}, this.validateForm);
      }
    
      updatePasswordConfirm = (passwordConfirm) => {
        this.setState({passwordConfirm}, this.validatePasswordConfirm)
      }
    
      validatePasswordConfirm = () => {
        const {passwordConfirm, password} = this.state;
        let passwordConfirmValid = true;
        let errorMsg = {...this.state.errorMsg}
    
        if (password !== passwordConfirm) {
          passwordConfirmValid = false;
          errorMsg.passwordConfirm = 'Passwords do not match'
        }
    
        this.setState({passwordConfirmValid, errorMsg}, this.validateForm);
      }
      updateCountry = (country) => {
        this.setState({country}, this.validateCountry)
      }
    
      validateCountry = () => {
        const {country} = this.state;
        let countryValid = true;
        let errorMsg = {...this.state.errorMsg}
    
        if (country.length < 3) {
          countryValid = false;
          errorMsg.country = 'Must be at least 3 characters long'
        }
    
        this.setState({countryValid, errorMsg}, this.validateForm)
      }
    render() {
        return (
            <div class="signup-form">


<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
            <form action="" method="post">
                <h2>Register</h2>
                <p class="hint-text">Create your account. It's free and only takes a minute.</p>
                <div class="form-group">
                    <div class="row">
                    < ValidationMessage valid={this.state.firstnameValid} message={this.state.errorMsg.firstname} />
                        <div class="col"><input type="text" class="form-control" name="firstname" placeholder="First Name" required="required"/>
                        {/* value={this.state.firstname} */}
                         {/* onChange={(e) => this.updateFirstname(e.target.value)}  */}
                         </div>
                        <div class="col"><input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required"/></div>
                    </div>        	
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" name="email" placeholder="Email" required="required"/>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" name="password" placeholder="Password" required="required"/>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
                </div>        
                <div class="form-group">
                    <label class="form-check-label"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-success btn-lg btn-block">Register Now</button>
                </div>
                
            </form>
            <div class="text-center">Already have an account? <Link className="links" to="/Login">SignIn</Link></div>
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