import React from 'react';
import axios from 'axios'; 
class LoginForm extends React.Component {
  render() {
    return (
      <div className="loginForm">
        <form onSubmit={(e) => login (e)}>
          <h3>Sign In</h3>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email address" aria-describedby="EmailHelp" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" id="password" />
          </div>
          <button type="submit" className="btn btn-info">Login</button>
        </form>
       
      </div>
    );
  }
}
function login(e){
  e.preventDefault();
  let request = {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value 

  }
  console.log(request.email)
  console.log(request.password)
  axios.post('http://localhost:3333/onlinemedico/login',request)
  .then(res => {
    alert(res.data.data);
  })
  .catch( err => {
    console.log(err);
  })
}

export default LoginForm;
