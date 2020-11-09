import React, { useState, Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../css/EditProfile.css';
import axios from 'axios';
import { DataContext } from '../Context'
import { NotificationContainer, NotificationManager } from 'react-notifications';



class EditProfile extends Component {
    static contextType = DataContext;
    // constructor(props){
    //     super(props);
    state = {
            editInfo:{}
        //     name: props.userInfoArray[0].fullname,
        //     mail: props.userInfoArray[0].email,
        //     mobile: props.userInfoArray[0].contact,
        };
        //this.handleChange=this.handleChange.bind(this);
    
    
        
        // this.editprofile=this.editprofile.bind(this);
      
    handleChange(event) {
        // if(isNaN(event)){
        //     this.setState({
                
        //     })
        // }
        // else{
        this.setState({
            [event.target.name]: event.target.value
        })
    

    }
     saveChanges(e){

        NotificationManager.success('Success', 'your profile is updated successfully', 8000);
         // e.preventDefault();
         let request = {
            firstName: document.getElementById("name").value,
            email: document.getElementById("mail").value,
            contactNumber: document.getElementById("mobile").value,
        }
        axios.post(`http://127.0.0.1:3333/onlinemedico/user/updateProfile/${this.state.editInfo.id}`, request)
        .then((res) => {
                console.log(res.body)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    componentDidMount() {
        const { userDetails } = this.context
        this.setState({
            editInfo: userDetails
        })
        let userID=this.state.editInfo.id;
       
    }
    render() {
        console.log(this.props.userInfoArray)
        return (
            <Card className='editProfileHeader'>
                <Card.Body>
                    <Card.Title className='accountTitle'>Account Information</Card.Title>
                    <Card.Text className='accountText'>
                        <div className='row'>
                            <div className='col'>
                                <lable className='nameEditLabel'>Full Name:</lable>
                            </div>
                            <div className='col'>
                                <input type='text' id='name' name="name" className='editName'
                                    defaultValue={this.state.editInfo.firstName}
                                    onChange={()=>this.handleChange.bind(this)}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <lable className='emailEditLabel'>Email:</lable>
                            </div>
                            <div className='col'>
                                <input type='email' name="mail" className='editEmail'
                                    defaultValue={this.state.editInfo.email}
                                    onChange={()=>this.handleChange.bind(this)} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <lable className='editContactLabel'>Contact Number:</lable>
                            </div>
                            <div className='col'>
                                <input type='text' id='mobile' name="mobile" className='editContact'
                                    defaultValue={this.state.editInfo.contactNumber}
                                    onChange={()=>this.handleChange.bind(this)} />
                            </div>
                        </div>
                        <button className='saveProfile' onClick={()=>this.saveChanges()}>Save Changes</button>

                    </Card.Text>

                </Card.Body>
                <NotificationContainer />
            </Card>
        )
    }

}

export default EditProfile;