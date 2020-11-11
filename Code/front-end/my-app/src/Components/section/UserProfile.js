import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import '../css/UserProfile.css';
import ResetPasswordPage from './ResetPasswordPage';
import EditProfile from './EditProfile';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'


class UserProfile extends Component {
    static contextType = DataContext;
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {},
            showPwdPage: false,
            showEditPage: false

        }
    }
    componentDidMount() {
        console.log("etnereredfdf")
        const { userDetails } = this.context
        this.setState({
            userInfo: userDetails
        })
        console.log(this.state.userInfo)
    }
    pwdchangeHandler = () => {
        this.setState({ showPwdPage: true })
        if (this.state.showPwdPage === true) {
            return <ResetPasswordPage />
        }
    }
    editpageHandler = () => {
        this.setState({ showEditPage: true })
        if (this.state.showEditPage === true) {
            return <EditProfile userInfoArray={this.state.userInfo} />
        }

    }
    render() {


        return (


            <Card className='profileBody'>
                <Card.Body >
                    <Card.Title className='profileTitle'>User Profile</Card.Title>
                    <Card.Text>
                        <div className='row profileName' >
                            <div className='col-4 nameLabel'>
                                <p>Full Name   :</p>
                            </div>
                            <div className='col-8'>
                                <p>{this.state.userInfo.firstName}</p>
                            </div>
                        </div>
                        <div className='row profileName'>
                            <div className='col-4 nameLabel'>
                                <p>Email Id    :</p>
                            </div>
                            <div className='col-8'>
                                <p>{this.state.userInfo.email}</p>
                            </div>
                        </div>
                        <div className='row profileName'>
                            <div className='col-4 nameLabel'>
                                <p>Contact Number   :</p>
                            </div>
                            <div className='col-8'>
                                <p>{this.state.userInfo.contactNumber}</p>
                            </div>
                        </div>
                        <span>
                            <button className='changePwd'
                            // onClick={this.setState({showPwdPage:true})}
                            ><Link to="/onlinemedico/reset">Change Password</Link></button>
                            <button className='editProfile'
                            ><Link to="/onlinemedico/edituserprofile">Edit Profile</Link></button>
                        </span>
                    </Card.Text>
                </Card.Body>
            </Card>



        )

    }
}
export default UserProfile;