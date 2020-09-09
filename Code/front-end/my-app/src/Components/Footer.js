import React, { Component } from "react";
import '../css/Footer.css';


class Footer extends Component {
  render() {
    return (
      // <div classNameNameName="Footer">
      //   <span classNameName="websiteNameFooter">OnlineMedico.</span>
      //   <ul classNameName="footer-ul">
      //     <li classNameName="footer-li">  <a> &copy; NWMSU-ACS-fall19 </a>   </li>
      //     <li classNameName="footer-li">  <a href="https://github.com/thumula-akhitha/onlinemedico">Source Code link</a>   </li>
      //     <li classNameName="footer-li">  <a href="https://goo.gl/maps/sGZyBkMCS2MFAn6J9" >Address: 800 University Dr, Maryville, MO 64468 </a>   </li>
      //     <li classNameName="footer-li">  <a href="#TandC">Terms & Conditions</a>   </li>
      //   </ul>
      // </div>
     <div>
       
     <footer className="footer-distributed">

			<div className="footer-left">

				<h3>OnlineMedico</h3>

				<p className="footer-links">
					<a href="#" className="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>

				<p className="footer-company-name">OnlineMedico © 2020</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>1115N Dr.college Drive</span>Maryville,Missouri</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+1.555.555.5555</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@onlinemedico.com">support@company.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
				</p>

				<div className="footer-icons">

        
				</div>

			</div>

		</footer>
      </div>
    );
  }
}

export default Footer;
