import React, { Component } from "react";
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <span className="websiteNameFooter">OnlineMedico.</span>
        <ul className="footer-ul">
          <li className="footer-li">  <a> &copy; NWMSU-ACS-fall19 </a>   </li>
          <li className="footer-li">  <a href="https://github.com/thumula-akhitha/onlinemedico">Source Code link</a>   </li>
          <li className="footer-li">  <a href="https://goo.gl/maps/sGZyBkMCS2MFAn6J9" >Address: 800 University Dr, Maryville, MO 64468 </a>   </li>
          <li className="footer-li">  <a href="#TandC">Terms & Conditions</a>   </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
