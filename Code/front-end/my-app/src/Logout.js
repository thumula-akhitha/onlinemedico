import React from 'react';
import './css/Logout.css';
class Logout extends React.Component {
    render() {
        return (
            <div className="logout-form">
              <p>You have logged out successfully.</p>
              <p>Please click here to  <a className="logout-link" href="http://localhost:3000/Login">Login</a> &nbsp;again.</p>
            </div>
        );
    }
}



export default Logout;
