import React, { Component } from "react";
import '../css/Header.css';
import '../css/Home.css';
import {Link} from 'react-router-dom'
import cart from "../images/cart.PNG";

import icon from "../images/Icon.PNG";
import {DataContext} from './ContextData'
import logo1 from '../images/logo.PNG';

class Header extends Component {
  static contextType = DataContext;
  render() {
    
   //const {toggle} =this.state;
    const {cart} = this.context;
    return (
      <div className="Header">
        {/* <ul className="header-ul">
          <li className="header-li">  <a className="active" href="#home"> Home </a>   </li>
          <li className="header-li">  <a href="#previousOrders">Upload Prescription</a>   </li>
          <li className="header-li">  <a href="#previousOrders">Previous Orders</a>   </li>
          <li className="header-li">  <a href="#activeOrders">Active Orders</a>   </li>
          <li className="header-li"> <a href="#trackOrders">Track Orders</a> </li>
          <li className="header-li">  <a href="#cart">Cart</a>  </li>
          <li className="header-li">
            
           
          </li>
          <li className="header-li">
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
        </ul> */}

          
                <header>
                    <nav>
                    <p className="name">OnlineMedico</p>
                        <ul>
                            <li><Link to="/product">Products</Link></li>
                            <li><Link to="/dropdown">Upload Presciption</Link></li>
                            <li><Link to="/checkout">Order Details</Link></li>
                            <li><Link to="/contact">ContactUs</Link></li>
                        </ul>
                        <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    MyAccount
                                 </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" >
                                    Previousorder
                                    </a>
                                    <a className="dropdown-item" href="#">ActiveOrders</a>
                                    <a className="dropdown-item" href="#">Settings</a>
                                    <a className="dropdown-item" href="/Logout">Logout</a>
                                </div>
                                <div className="nav-cart">
                                <span>{cart.length}</span>
                                <Link to="/cart">
                                <img className="cart-image" src={icon} alt="cart slide" />
                                </Link>
                                </div>
                                </div>
                       
                            {/* <input id="search-id" className='typesearch' type="search" placeholder="Search" aria-label="Search" />
                            */}
                            {/* <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    MyAccount
                                 </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Previousorder</a>
                                    <a class="dropdown-item" href="#">ActiveOrders</a>
                                    <a class="dropdown-item" href="#">Settings</a>
                                    <a class="dropdown-item" href="http://localhost:3000/Logout">Logout</a>
                                </div>
                                <img className="cart-image" src={cart} alt="cart slide" />
                            </div> */}
                    </nav>

                </header>
    
      </div>
    );
  }
}

export default Header;
