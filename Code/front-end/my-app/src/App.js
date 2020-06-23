import React from 'react';
import LoginForm from './LoginForm';
import './App.css';
import logo from './images/logo.PNG';
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className='container'>
          <div>
          <div className="logo">
            <img src={logo} alt="logo" width="100" height="100" />
            <h2>OnlineMedico</h2>
          </div>
          <div>
            <LoginForm />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
