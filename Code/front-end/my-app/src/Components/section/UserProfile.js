import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import '../css/UserProfile.css';
import ResetPasswordPage from './ResetPasswordPage';
import EditProfile from './EditProfile';

const userProfile = (props) => {
    const userInfo = [
        {
                fullname:'Shravani',
                email:'A@b.com',
                contact:'9000789654'
        },
    ];
    const[showPwdPage,setshowPwdPage]=useState(false);
    const[showEditPage,setShowEditPage]=useState(false);
    if(showPwdPage == true){
        return <ResetPasswordPage />
    }
    if(showEditPage==true){
        return <EditProfile userInfoArray={userInfo}/>
    }
    return (
        userInfo.map((user,index)=>(
            <Card className='profileBody'>
            <Card.Body >
                <Card.Title className='profileTitle'>User Profile</Card.Title>
                <Card.Text>
                    <div className='row profileName' >
                        <div className='col-4 nameLabel'>
                            <p>Full Name</p>
                        </div>
                        <div className='col-8'>
                            <p>{user.fullname}</p>
                        </div>
                    </div>
                    <div className='row profileName'>
                        <div className='col-4 nameLabel'>
                            <p>Email Id</p>
                        </div>
                        <div className='col-8'>
                            <p>{user.email}</p>
                        </div>
                    </div>
                    <div className='row profileName'>
                        <div className='col-4 nameLabel'>
                            <p>Contact Number</p>
                        </div>
                        <div className='col-8'>
                            <p>{user.contact}</p>
                        </div>
                    </div>
                    <button className='changePwd'
                    onClick={()=>setshowPwdPage(true)}
                    >Change Password</button>
                    <button className='editProfile'
                    onClick={()=>setShowEditPage(true)}
                    >Edit Profile</button>
                </Card.Text>
            </Card.Body>
        </Card>

        ))
       
    )

}

export default userProfile;