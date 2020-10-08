import React, { useState, Component } from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import '../css/EditProfile.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


const saveChanges=()=>{
    NotificationManager.success('Success','your profile is updated successfully',8000);
}
class EditProfile extends Component {
    constructor (props) {
        super(props);
        this.state = {           
            name:props.userInfoArray[0].fullname,
            mail:props.userInfoArray[0].email,
            mobile:props.userInfoArray[0].contact,
        };
      }
    handleChange(event) {
       
        this.setState({
            [event.target.name] : event.target.value
      })

    }
   
    render(){
        console.log(this.props.userInfoArray)
        return(
            <Card className='editProfileHeader'>
            <Card.Body>
                <Card.Title className='accountTitle'>Account Information</Card.Title>
                <Card.Text className='accountText'>
                    <div className='row'>
                        <div className='col'>
                            <lable className='nameEditLabel'>Full Name:</lable>
                        </div>
                        <div className='col'>
                            <input type='text' name = "name" className='editName'
                            value= {this.state.name}
                            onChange={this.handleChange.bind(this)}
                            />  
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <lable className='emailEditLabel'>Email:</lable>
                        </div>
                        <div className='col'>
                            <input type='email' name = "mail" className='editEmail'
                             value= {this.state.mail}
                             onChange={this.handleChange.bind(this)}/>
                             
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <lable className='editContactLabel'>Contact Number:</lable>
                        </div>
                        <div className='col'>
                            <input type='text' name= "mobile" className='editContact'
                             value={this.state.mobile}
                             onChange={this.handleChange.bind(this)}/>


                        </div>
                    </div>

                    <button className='saveProfile' onClick={saveChanges}>Save Changes</button>

                </Card.Text>

            </Card.Body>
            <NotificationContainer/>
        </Card>

        )
    }
 
}

export default EditProfile;