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
        <h4>Password Assistance</h4>
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

async function forgotpassword(e) {
  e.preventDefault();
  let request = {
   
    email: document.getElementById('email').value

    }
    axios.post('http://localhost:5000/sendlink', request)
      .then(res => {
        alert(res.data.message);
      })
      .catch(err => {
        console.log(err);
      })
  }

    
  axios.post('http://127.0.0.1:3333/onlinemedico/forgotpassword', request)
    .then(res => {
      console.log(res)
      alert(res.data.message);
    })
    .catch(err => {
      alert(err);
    })
}

export default ForgotPassword;
