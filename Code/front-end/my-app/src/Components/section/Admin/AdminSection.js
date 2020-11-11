import React, { Component } from 'react';
import AdminProdcts from './AdminProduct';
import {Route} from "react-router-dom";
import AdminPage from './AdminPage';
import Logout from '../Logout';
import Chat from '../Chat/Chat';
import AdminOrder from './AdminOrder';
import AdminRequest from './AdminRequest';
import ChatUs from './ChatUs';
import AdminCustOrder from './AdminCustOrder';

export class AdminSection extends Component {
    render() {
        return (
            <section style ={{"minHeight":"350px"}}>
                <Route path="/mainadmin/userrequest" component={AdminRequest}/>
                <Route path="/mainadmin/addproducts" component={AdminPage}/>                            
                <Route path="/mainadmin/product" component={AdminProdcts} exact />
                <Route path="/mainadmin/ChatUs" component={ChatUs} exact/>
                <Route path="/mainadmin/logout" component={Logout} exact />
                <Route path="/mainadmin/adminOrder" component={AdminOrder} exact />
                <Route path ='/mainadmin/admincustorder' component ={AdminCustOrder} exact/>
            </section>
            
        )
    }
}

export default AdminSection