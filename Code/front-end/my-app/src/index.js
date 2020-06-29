import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './LoginForm';
import signup from './SignupForm';
import ForgotPassword from './ForgotPassword';
import * as serviceWorker from './serviceWorker';
import ResetPasswordPage from './ResetPasswordPage ';

ReactDOM.render(
  <Router>
    
      <Route path="/" component={App}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Signup" component={signup}/>
      <Route path="/ForgotPassword" component={ForgotPassword}/>
      <Route path="/Reset" component={ResetPasswordPage}/>
    </div>
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
