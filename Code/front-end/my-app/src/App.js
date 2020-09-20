import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './Components/LoginForm';
import signup from './Components/SignupForm';
import Home from './Components/Home';
import logout from './Components/Logout';
import ForgotPassword from './Components/ForgotPassword';
import * as serviceWorker from './serviceWorker';
import file from './Components/ImageFile';
import ResetPasswordPage from './Components/ResetPasswordPage ';
import selectdropdown from './Components/SelectDropDown';
import Shipping from './Components/shipping';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Products from './Components/Products';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import axios from 'axios';
import './App.css';
import {ContextData} from './Components/ContextData'
class App extends React.Component {
  render() {
    return (
      <ContextData>
      <div className="app"> 
      <Router>
    <Header/>
    
      <Route exact path="/Home" component={Home}/>
     
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/Signup" component={signup}/>
      <Route exact path="/ForgotPassword" component={ForgotPassword}/>
      <Route  exact path="/contact" component={Contact}/>
      <Route exact path="/Reset" component={ResetPasswordPage}/>
      <Route exact path="/logout" component={logout}/>
      <Route exact path="/image-file" component={file}/>
      <Route exact path="/dropdown" component={selectdropdown}/>
      <Route exact path="/checkout" component={Shipping}/>
      <Route path="/product" component={Products} exact />
      <Route path="/product/:id" component={Details} />
      <Route path="/cart" component={Cart} />
     
      <Footer/>
     
    </Router>
          </div>
          </ContextData>
    );
  }
}

export default App;
