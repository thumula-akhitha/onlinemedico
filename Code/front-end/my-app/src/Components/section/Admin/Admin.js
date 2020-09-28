import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import AdminFooter from '../../Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import AdminSection from './AdminSection';
import {DataProvider} from '../../Context';
export class Admin extends Component {
    render(){
        return(
            <DataProvider>
            <div className="app">
              <Router>
                 <AdminHeader/>
                <AdminSection/>
                <AdminFooter/>                  
              </Router>
            </div>
          </DataProvider>
            
        )
    }
}
export default Admin 