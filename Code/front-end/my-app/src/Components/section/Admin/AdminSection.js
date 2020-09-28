import React, { Component } from 'react';
import Products from '../Products';
import {Route} from "react-router-dom";
import AdminPage from './AdminPage';


export class AdminSection extends Component {
    render() {
        return (
            <section >
                <Route path="/admin/addproducts" component={AdminPage}  />                            
                <Route path="/admin/product" component={Products} exact />
            </section>
            
        )
    }
}

export default AdminSection