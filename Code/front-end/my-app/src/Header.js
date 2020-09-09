import React, { Component } from "react";
import './Header.css';
import './css/Home.css';
import cart from "./images/cart.PNG";
import logo1 from './images/logo.PNG';
class Header extends Component {
  render() {
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
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Upload Presciption</a></li>
                            <li><a href="#">Locations</a></li>
                            <li><a href="#">ContactUs</a></li>
                        </ul>
                       
                            <input className='typesearch' type="search" placeholder="Search" aria-label="Search" />
                           
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
