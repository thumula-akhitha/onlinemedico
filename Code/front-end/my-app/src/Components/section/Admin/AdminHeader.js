import React, { Component } from 'react';
import Menu from '../../images/Menu.PNG';
import Close from '../../images/close.PNG';
import {Link} from 'react-router-dom';
import '../../css/Header.css';
import {DataContext} from '../../Context';

export class AdminHeader extends Component {
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
            
            <div>
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="logo">
                    <h1><Link to="/">OnlineMedico</Link></h1>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/mainadmin/product">Product</Link></li>
                        <li><Link to="/mainadmin/addproducts">Add Products</Link></li>
                        <li><Link to="/mainadmin/adminOrder">Orders</Link></li>
                        <li><Link to="/mainadmin/logout">Logout</Link></li>
                        <li><Link to="/mainadmin/chatUs">Chat Us</Link></li>
                        <li><Link to="/mainadmin/userrequest">User Request</Link></li>
                        <li className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="20"/>
                        </li>
                    </ul>
                </nav>
            </header>
           
            </div> 
        )
    }
}

export default AdminHeader