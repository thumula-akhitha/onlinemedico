import React, { Component } from 'react';
import AdminProdcts from './AdminProduct';
import {Route} from "react-router-dom";
import AdminPage from './AdminPage';
import Logout from '../Logout';
import Chat from '../Chat/Chat';
import AdminOrder from './AdminOrder'

export class AdminSection extends Component {
    render() {
        return (
            <section >
                <Route path="/mainadmin/addproducts" component={AdminPage}  />                            
                <Route path="/mainadmin/product" component={AdminProdcts} exact />
                <Route path="/mainadmin/ChatUs" component={Chat} exact/>
                <Route path="/mainadmin/logout" component={Logout} exact />
                <Route path="/mainadmin/adminOrder" component={AdminOrder} exact />
            </section>
            
        )
    }
}

export default AdminSection