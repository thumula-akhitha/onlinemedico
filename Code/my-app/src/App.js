import React from 'react';
import UserStore from './UserStore';
import InputField from './InputField';
import LoginForm from './LoginForm';
import SubmitButton from './SubmitButton';
import './App.css';
class App extends React.Component{
  render(){
  return (
    <div className="app">
       <div className='container'>
      <LoginForm />
      </div>
    </div>
  );
  }
}

export default App;
