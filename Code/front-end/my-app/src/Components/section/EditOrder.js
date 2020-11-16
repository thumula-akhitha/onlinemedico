import React, {useState } from 'react';
import { Card } from 'react-bootstrap';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import Modal from './Modal';
import axios from "axios";
import Toast from 'light-toast';
import {useHistory,Redirect} from 'react-router-dom';
import "../css/Return.css";
// import { withRouter } from 'react-router'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';



const returnItem = (props) => {
    const history=useHistory();
   console.log(props.returnArray.id)
   const handleToggle=(e)=>{  
       e.preventDefault();
       console.log('rddc ')   
        // history.push('/onlinemedico/pastOrder')
        Toast.success('Order Cancelled Successfully', 2000, () => {
            axios
            .get(`http://127.0.0.1:3333/onlinemedico/cancelOrder/${props.returnArray.id}`)
            .then((res) => {
             console.log("sucessfully deleted")
             history.push('/onlinemedico/pastOrder')
            });
           
            console.log("camee")
            
            //<Redirect to='/onlinemedico/pastOrder' />
           
            // do something after the toast disappears
          });
   // NotificationManager.success('Order Cancelled Succesfully','',5000)
   // history.goBack()
   
   }

    return (
        <div className='returnHead'>
        <p className='returnPara'>  If you are returning multiple items from one order, 
        you can avoid additional return fees by returning them together.</p>
        <Card className='returnItemHeader'>
            <Card.Text>
                <form>
                <div className='row'>
                    <div className='col'>
                    <label>Please give reason for return</label>
                    </div>
                    <div className='col'>
                    <input type='text' className='returnReason'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                    <label>Provide account details for refund</label>
                    </div>
                    <div className='col'>
                    <input type='text' className='refundDetails'  />
                    </div>
                </div>
                <button className='nextbtn'
                    onClick={handleToggle}
                    >CANCEL ORDER</button>
                    </form>
            </Card.Text>
        </Card>
        <NotificationContainer />
        </div>
    )

}
export default returnItem;