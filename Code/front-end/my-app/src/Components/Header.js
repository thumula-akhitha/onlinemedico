import React, { Component } from 'react';
import Menu from './images/Menu.PNG';
import Close from './images/close.PNG';
import CartIcon from './images/Icon.PNG';
import {Link} from 'react-router-dom';
import './css/Header.css';
import {DataContext} from './Context';



export class Header extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }


    render() {
        const {toggle} = this.state;
        const {cart} = this.context;
        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="logo">
                    <h1><Link to="/">OnlineMedico</Link></h1>
                </div>
               
           
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/onlinemedico/product">Product</Link></li>
                        <li><Link to="/onlinemedico/contact">Contact</Link></li>
                        <li><Link to="/onlinemedico/upload">UploadPrescription</Link></li>
                        <li><Link to="/onlinemedico/login">Login / Register</Link></li>
                        <li className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="20"/>
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/onlinemedico/cart">
                            <img src={CartIcon} alt="" width="20"/>
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header