import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './UserStore';
class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password: '',
            buttonDisabled: false 
        }
    }
    setInputValue(property, val){
        val = val.trim();
        if(val.length > 12){
            return;
        }

    }
  render(){
  return (
    <div className="loginForm">
      <InputField type="text" 
      placeholder="Username" 
      value= {this.state.username ? this.state.username:''}
      onChange={(val)=> this.setInputValue('username',val)}/>
      <InputField type="text" 
      placeholder="Password" 
      value= {this.state.password ? this.state.password:''}
      onChange={(val)=> this.setInputValue('username',val)}/>
      <SubmitButton text='Login'/>      
    </div>
  );
  }
}

export default LoginForm;
