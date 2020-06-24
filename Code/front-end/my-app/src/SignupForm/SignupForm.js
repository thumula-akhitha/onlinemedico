import React, { useState } from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import 'react-calendar/dist/Calendar.css';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            password: '',
            email: '',
            contact_number: '',
            dob: new Date(),
            confirm_pwd: '',
            street: '',
            state: '',
            city: '',
            zip: '',
            country: '',
            buttonDisabled: false
        }
    }
    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    render() {
        return (
            <div className="signupForm">
                <form action="" method="post">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>

                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>


                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
              
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-1">
                        <label for="name">Name</label></div>
                    <div class="col-2">
                        <InputField type="text"
                            placeholder="Firstname"
                            value={this.state.firstname ? this.state.firstname : ''}
                            onChange={(val) => this.setInputValue('firstname', val)} />
                    </div>

                    <div class="col-2">
                        <InputField type="text"
                            placeholder="Lastname"
                            value={this.state.lastname ? this.state.lastname : ''}
                            onChange={(val) => this.setInputValue('lastname', val)} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-1">
                        <label for="email">Email</label></div>
                    <div class="col-4">
                        <InputField type="text"
                            placeholder="Email"
                            value={this.state.email ? this.state.email : ''}
                            onChange={(val) => this.setInputValue('email', val)} />
                    </div>

                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-1">
                        <label for="contact">Contact Number</label></div>
                    <div class="col-4">
                        <InputField type="text"
                            placeholder="Contact Number"
                            value={this.state.contact_number ? this.state.contact_number : ''}
                            onChange={(val) => this.setInputValue('contact_number', val)} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-1">
                        <label for="dateofbirth">DOB</label></div>
                    <div class="col-7">
                        <DatePicker
                            placeholder="Date of Birth"
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-1">
                        <label for="password" >Password</label></div>
                    <div class="col-4">
                        <InputField type="text"
                            placeholder="Password"
                            value={this.state.password ? this.state.password : ''}
                            onChange={(val) => this.setInputValue('password', val)} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-1">
                        <label for="street">Street</label>
                    </div>
                    <div class="col-4">
                        <InputField type="text"
                            placeholder="Street"
                            value={this.state.street ? this.state.street : ''}
                            onChange={(val) => this.setInputValue('street', val)} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-1">
                        <label for="City">City</label></div>
                    <div class="col-4">
                        <InputField type="text"
                            placeholder="City"
                            value={this.state.city ? this.state.city : ''}
                            onChange={(val) => this.setInputValue('city', val)} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-1">
                        <label for="state">State</label></div>
                    <div class="col-4">
                        <InputField type="text"
                            placeholder="State"
                            value={this.state.state ? this.state.state : ''}
                            onChange={(val) => this.setInputValue('state', val)} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-1">
                        <label for="zip">PostCode/zip</label></div>
                    <div class="col-4">
                        <InputField type="text"
                            placeholder="Zip"
                            value={this.state.zip ? this.state.zip : ''}
                            onChange={(val) => this.setInputValue('zip', val)} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-1">
                        <label for="country">Country</label></div>
                    <div class="col-4">
                        <InputField type="text"
                            placeholder="Country"
                            value={this.state.country ? this.state.country : ''}
                            onChange={(val) => this.setInputValue('country', val)} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-2"></div>
                    <label class="form-check-label"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                    </div>
                    <div class="row">
                        <div class="col-2"></div>
                        <div class="col-4">
                        <button type="submit" class="btn btn-success btn-sm ">Register Now</button>
                        </div>
                        
                    </div>
                    </form>
                    
                    <div class="acc">
                        <p>Already have an account? <a href="#">Sign in</a></p></div>
                
                        </div>
                );
            }
        }
        
export default SignupForm;