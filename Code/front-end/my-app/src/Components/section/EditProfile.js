import React, { useState, Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../css/EditProfile.css';
import axios from 'axios';
import { DataContext } from '../Context'
import { NotificationContainer, NotificationManager } from 'react-notifications';


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
class EditProfile extends Component {
    static contextType = DataContext;
    constructor(props){
        super(props);
    }
    //     
    state = {
            editInfo:{},
            errors:{
                name:'',
                email:'',
                mobile:''

            }
        };
    handleChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
        }
     saveChanges(e){
        const { errors } = this.state;
        NotificationManager.success('Success', 'your profile is updated successfully', 3000);
         // e.preventDefault();
         let request = {
            firstName: document.getElementById("name").value,
            email: document.getElementById("mails").value,
            contactNumber: document.getElementById("mobile").value,
        }
        errors.name=
        request.firstName.match(/^[a-zA-Z][a-zA-Z\s]*$/)?'':'Only letters are allowed'
        let name=errors.name
        this.setState({name:name})
        errors.email=
        validEmailRegex.test(request.email)?'':'Email is not valid!';
        let mail=errors.email
        this.setState({mail:mail})
        errors.mobile=
        request.contactNumber.match(/^[0-9]*$/) && request.contactNumber.length == 10
          ? '' : 'Length must be 10 & Only digits are allowed';
          let mobile=errors.mobile
          this.setState({mobile:mobile});
        axios.post(`http://127.0.0.1:3333/onlinemedico/user/updateProfile/${this.state.editInfo.id}`, request)
        .then((res) => {
                console.log(res.body)
                setTimeout(()=>{
                    this.props.history.push('/onlinemedico/UserProfile')
                },2000)
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
        const { errors } = this.state;
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
                                <input type='text' id='name' name="firstName" className='editName'
                                    defaultValue={this.state.editInfo.firstName}
                                    onChange={()=>this.handleChange.bind(this)}
                            />                               
                            </div>
                           
                        </div>
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col">
                        
                                 {errors.name.length > 0 &&
                                <span className='editerrors'>{errors.name}</span>
                                }
                                
                                </div>
                                </div>
                        <div className='row'>
                            <div className='col'>
                                <lable className='emailEditLabel'>Email:</lable>
                            </div>
                            <div className='col'>
                                <input type='email' id='mails'name="email" className='editEmail'
                                    defaultValue={this.state.editInfo.email}
                                    onChange={()=>this.handleChange.bind(this)} />
                                   
                            </div>
                           
                        </div>
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col">
                        
                            {errors.email.length > 0 &&
                                <span className='editerrors'>{errors.email}</span>}
                                
                                
                                </div>
                                </div>
                        
                        <div className='row'>
                            <div className='col'>
                                <lable className='editContactLabel'>Contact Number:</lable>
                            </div>
                            <div className='col'>
                                <input type='text' id='mobile' name="contactNumber" className='editContact'
                                    defaultValue={this.state.editInfo.contactNumber}
                                    onChange={()=>this.handleChange.bind(this)} />
                                   
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col">
                        
                            {errors.mobile.length > 0 &&
                                    <span className='editerrors'>{errors.mobile}</span>}
                                
                                
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