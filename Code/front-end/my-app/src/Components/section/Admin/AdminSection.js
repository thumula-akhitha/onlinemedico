import React, { Component } from 'react';
import Products from '../Products';
import {Route} from "react-router-dom";
import AdminPage from './AdminPage';
import Logout from '../Logout';
import Chat from '../Chat/Chat';

export class AdminSection extends Component {
    render() {
        return (
            <section >
                <Route path="/mainadmin/addproducts" component={AdminPage}  />                            
                <Route path="/mainadmin/product" component={Products} exact />
                <Route path="/mainadmin/ChatUs" component={Chat} exact/>
                <Route path="/mainadmin/logout" component={Logout} exact />
            </section>
            
        )
    }
}

export default AdminSection