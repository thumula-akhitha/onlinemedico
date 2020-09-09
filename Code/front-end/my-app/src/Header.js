import React, { Component } from "react";
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <spam className="websiteName">OnlineMedico.  </spam>
        <ul className = "header-ul">
          <li className = "header-li">  <a className="active" href="#home"> Home </a>   </li>
          <li className = "header-li">  <a href="#previousOrders">Upload Prescription</a>   </li>
          <li className = "header-li">  <a href="#previousOrders">Previous Orders</a>   </li>
          <li className = "header-li">  <a href="#activeOrders">Active Orders</a>   </li>
          <li className = "header-li"> <a href="#trackOrders">Track Orders</a> </li>
          <li className = "header-li">  <a href="#cart">Cart</a>  </li>
          <li className = "header-li">
            <div className="header-search">
              <input className="header-textBox" type="text" placeholder="Search Medicine" />
              <button className="header-searchButton"> Search</button>
            </div>
          </li>
          <li className = "header-li">
            <div className="dropdown">
              <button className="header-dropbtn">Settings</button>
              <div className="header-dropdown-content">
                <a href="#">MyProfile</a>
                <a href="#">FAQ's</a>
                <a href="#">About Us</a>
                <a href="#">Logout</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
