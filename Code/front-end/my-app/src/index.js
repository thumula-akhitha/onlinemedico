import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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
import Contact from './Components/Contact';
ReactDOM.render(
  
  <Router>
    <Header/>
      <Route path="/Home" component={Home}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Signup" component={signup}/>
      <Route path="/ForgotPassword" component={ForgotPassword}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/Reset" component={ResetPasswordPage}/>
      <Route path="/logout" component={logout}/>
      <Route path="/image-file" component={file}/>
      <Route path="/dropdown" component={selectdropdown}/>
      <Route path="/checkout" component={Shipping}/>
      <Footer/>
    </Router>
    
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
