import React, { Component } from 'react';
import './css/Footer.css'
import {FaTwitter,FaFacebook,FaMapMarker,FaPhone,FaEnvelope,FaLinkedin} from "react-icons/fa"
export class Footer extends Component {


    render() {
    
        return (
            <div>
           
            <footer class="footer-distributed">
            
                        <div class="footer-left">
            
                            <h3>Online<span>Medico</span></h3>
            
                            <p class="footer-links">
                                <a href="#" class="link-1">Home</a>
                                
                                <a href="#">Blog</a>
                            
                                <a href="#">Pricing</a>
                            
                                <a href="#">About</a>
                                
                                <a href="#">Faq</a>
                                
                                <a href="#">Contact</a>
                            </p>
            
                            <p class="footer-company-name">OnlineMedico © 2020</p>
                        </div>
            
                        <div class="footer-center">
            
                            <div>
                                <FaMapMarker/>
                                <p><span>1115N Dr.colleeDrive</span></p>
                            </div>
            
                            <div>
                                <FaPhone/>
                                <p>+11234567890</p>
                            </div>
            
                            <div>
                               <FaEnvelope/>
                                <p><a href="mailto:support@company.com">onlinemedico@gmail.com</a></p>
                            </div>
            
                        </div>
            
                        <div class="footer-right">
            
                            <p class="footer-company-about">
                                <span>About the company</span>
                               
                            </p>
            
                            <div class="footer-icons">
            
                                <a href="#"><FaFacebook/></a>
                                <a href="#"><FaTwitter/></a>
                                <a href="#"><FaLinkedin/></a>
                            
            
                            </div>
            
                        </div>
            
                    </footer>
                    </div>
        )
    }
}

export default Footer;