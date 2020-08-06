import React from 'react';
import axios from 'axios';

import './css/ForgotPassword.css';
class ForgotPassword extends React.Component{
  constructor(props){

    super(props)
    this.forgotpassword = this.forgotpassword.bind(this);
  }
  forgotpassword(e){
    e.preventDefault();

  let request = {
   
    email: document.getElementById('mail').value

    }
    axios.post('http://127.0.0.1:3333/onlinemedico/forgotpassword', request)
      .then(res => {
           console.log(res)
        if(res.data===""){  
          document.getElementById("forgot-error").innerHTML="" 

          document.getElementById("forgot-success").innerHTML = "Email Sent Successfully" 
          document.getElementById("mail").value=" " 

        }
        else {
          document.getElementById("forgot-success").innerHTML=""
          document.getElementById("forgot-error").innerHTML = "Email doesn't exist please provide the correct email address" 
          document.getElementById("mail").value=" " 

        }
      })

      .catch(err => {

        console.log(err);
      })
  }
render()
{
 return (
    <div className="home">

      <form onSubmit={this.forgotpassword} className="formforgot">

        <div className="forgot">
        <h4>Password Assistance</h4>
        <label htmlFor="email"> Give your reset link mail: </label>
        <input type="email" className="form-control" id="mail" placeholder="Enter your email address" aria-describedby="EmailHelp" required/>
        <br />
        <button type="submit" className="send-btn btn-info">Send Link</button>
        <p id="forgot-error"></p>
        <p id="forgot-success"></p>
        </div>
      </form>
    </div>
  );
}
}


  



export default ForgotPassword;
