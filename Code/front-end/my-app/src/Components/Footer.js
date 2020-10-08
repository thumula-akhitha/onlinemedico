import React, { Component } from 'react';
import './css/Footer.css'
import { FaTwitter, FaFacebook, FaMapMarker, FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa"
import Contact from './section/Contact';
import {Link} from 'react-router-dom'
import Signup from './section/SignupForm';

// const brandLogo = require('../Components/images/logo.PNG');
export class Footer extends Component {
    constructor(){
        super();
        // this.handleSignUp=this.handleSignUp.bind(this);
      
    }
    
    render() {

        return (
            <div>
                <footer class="footer-distributed">

                    <div class="footer-left">
                        <div className='footerHEading'>
                        <div>
                            <h4 className='signMeUp'> SIGN ME UP</h4>
                            <p className='firsttoknow'>Be the first to know more about the products and offers</p>
                        </div>
                        <div>
                            <div className='btnIn'>
                                <input className='signupemail' type="text" id="enter" placeholder='email here' />
                                <Link to='/onlinemedico/sign'>
                                <button className='clearbtn' id="clear" 
                                 >SignUp</button>
                                 </Link>
                                {/* <Link className="links" to="/onlinemedico/sign"><u>Signup</u></Link> */}
                            </div>
                            </div>
                        </div>
                      
                    </div>
                    <div class="footer-center">
                        <p className='contactheader'>Contact information</p>
                        <div className='location'>
                            <FaMapMarker />
                            <p><span  className='locationPara'>1115N Dr.colleeDrive</span></p>
                        </div>
                        <div className='footerMobile'>
                            <FaPhone />
                            <p><span  className='mobilePara'>+11234567890</span></p>
                        </div>
                        <div>
                            <FaEnvelope />
                            <p ><a href="mailto:support@company.com" className='mailPara'>onlinemedico@gmail.com</a></p>
                        </div>
                    </div>

                    <div class="footer-right">

                        <p class="footer-company-about">
                            <span className='aboutCompany'>About the company</span>
                        </p>
                      <ul className='MyAccountList'>
                      <li className='MyAccountList'><Link to="/onlinemedico/contact" className='contactList'>Contact</Link></li>
                      <li className='MyAccountList'><Link to="/onlinemedico/UserProfile" className='contactList'>My Account</Link></li>
                      <li className='MyAccountList'><Link to="/onlinemedico/about" className='contactList'>About Us</Link></li>
                      </ul>
                        <div class="footer-icons">
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedin /></a>


                        </div>

                    </div>
                    <div>
                    <p class="footer-company-name">OnlineMedico © 2020 <span>All rights reserved</span></p>
                    </div>
                    <div className='worksTime'>
                    <p className='workingHours'>Working Days/Hours</p>
                    <p className='timings'>Mon-Sun/9:00AM-9:00PM</p>
                    </div>

                </footer>
            </div>
        )
    }
}

export default Footer;

