import React, { Component } from "react";
import './AdminHeader.css';

class AdminHeader extends Component {
  render() {
    return (
      <div className="AdminHeader">
        <spam className = "websiteName">
           OnlineMedico.
        </spam>
        <ul className = "admin-header-ul">
          <li className = "admin-header-li"> <a className="active" href="#home"> Home </a> </li>     
          <li className = "admin-header-li"> <a href="#previousOrders">Pending Orders</a> </li>
          <li className = "admin-header-li"> <a href="#activeOrders">Completed Orders</a> </li>
          <li className = "admin-header-li"> <a href="#trackOrders">Track Orders</a> </li>
          <li className = "admin-header-li"> 
            <div className="admin-header-search"> 
              <input className = "admin-header-textBox" type="text" placeholder="Search Medicine"/>
              <button className="admin-header-searchButton" > Search</button>
            </div>
          </li>
          <li className = "admin-header-li"> 
            <div className="dropdown">
              <button className="admin-header-dropbtn" >Settings</button>
              <div className="admin-header-dropdown-content">
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

export default AdminHeader;
