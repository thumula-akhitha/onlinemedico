import React, { Component } from "react";
import { Dropdown,DropdownButton} from "react-bootstrap";
import Menu from "./images/Menu.PNG";
import Close from "./images/close.PNG";
import CartIcon from "./images/Icon.PNG";
import { Link } from "react-router-dom";
import "./css/Header.css";
import { DataContext } from "./Context";
import { FaShoppingCart,FaUser } from "react-icons/fa";
// import Dropdown, { DropdownTrigger, DropdownContent} from 'react-simple-dropdown';

const profile=require('./images/Account.PNG')
export class Header extends Component {
  static contextType = DataContext;

  state = {
    toggle: false,
  };

  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { toggle } = this.state;
    const { cart } = this.context;
    return (
      <header>
        <div className="menu" onClick={this.menuToggle}>
          <img src={Menu} alt="" width="20" />
        </div>
        <div className="logo">
          <h1>
            <Link to="/">OnlineMedico</Link>
          </h1>
        </div>

        <nav>
          <ul className={toggle ? "toggle" : ""}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/onlinemedico/product">Product</Link>
            </li>
            <li>
              <Link to="/onlinemedico/contact">Contact</Link>
            </li>
            <li>
              <Link to="/onlinemedico/upload">UploadPrescription</Link>
            </li>
           
            <li className="close" onClick={this.menuToggle}>
              <img src={Close} alt="" width="20" />
            </li>
          </ul>
          <div className="nav-cart">
            <span>{cart.length}</span>
            <Link to="/onlinemedico/cart">
              <FaShoppingCart style={{color:"white"}}/>
              {/* <img src={CartIcon} alt="" width="20" /> */}
            </Link>
          </div>
          <div className="headerdropdown" >
            <DropdownButton id="dropdown-basic-button" title={
        <span><FaUser style={{marginBottom:"4px",marginRight:"3px"}}/>My Account</span>}>
            {/* <img src={profile}/> */}
              <Dropdown.Item href="http://localhost:3000/onlinemedico">
                My Profile
              </Dropdown.Item>
              <Dropdown.Item href="http://localhost:3000/onlinemedico/pastOrder">Previous Orders</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Current Orders</Dropdown.Item>
              <Dropdown.Item href="http://localhost:3000/onlinemedico/logout">Logout</Dropdown.Item>
              </DropdownButton>
          </div>
        </nav>
      
      </header>
    );
  }
}

export default Header;
