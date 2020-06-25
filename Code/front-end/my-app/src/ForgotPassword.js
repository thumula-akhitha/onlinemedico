import React from 'react';
import axios from 'axios';
import './css/ForgotPassword.css';
class ForgotPassword extends React.Component{
render()
{
 
  return (
    <div className="home">
      <form onSubmit={(e) => forgotpassword(e)} className="formforgot">
          <div className="forgot">
        <label htmlFor="email"> Give your reset link mail: </label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email address" aria-describedby="EmailHelp" />
        <br />
        <button type="submit" className="btn btn-info">Send Link</button>
        </div>
      </form>
    </div>
  );
}
}


    
function forgotpassword(e) {
  e.preventDefault();
  let request = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: document.getElementById('email').value

  }
  axios.post('http://localhost:5000/sendlink', request)
    .then(res => {
      alert(res.data.message);
    })
    .catch(err => {
      console.log(err);
    })
}

export default ForgotPassword;
