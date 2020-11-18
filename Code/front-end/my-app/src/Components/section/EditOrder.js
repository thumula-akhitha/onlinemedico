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
//   console.log('cancelreson',this.returnReason.value)
   const handleToggle=(e)=>{  
       e.preventDefault();
        let reason = document.getElementById('returnReason').value;
        let reason2 = document.getElementById('refundDetails').value;
        console.log(reason,reason2);
        if(reason===""||reason2===""){
            alert('Please provide cancel reason')
        }
        else{
        Toast.success('Order Cancelled Successfully', 2000, () => {
            axios
            .get(`http://127.0.0.1:3333/onlinemedico/cancelOrder/${props.returnArray.id}`)
            .then((res) => {
             console.log("sucessfully deleted")
             history.push('/onlinemedico/pastOrder')
            });
           
            console.log("camee")
            
          });
        }
   // NotificationManager.success('Order Cancelled Succesfully','',5000)
   // history.goBack()
   
   }
  

    return (
        <div className='returnHead'>
        <p className='returnPara'>  Cancel your order before it is delivered.</p>
        <form>
        <Card className='returnItemHeader'>
            <Card.Text>
                <div className='row'>
                    <div className='col'>
                    <label>Please give reason for cancel</label>
                    </div>
                    <div className='col'>
                    <input type='text' className='returnReason' name='returnReason' id='returnReason' required/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                    <label>Provide account details for refund</label>
                    </div>
                    <div className='col'>
                    <input type='text' className='refundDetails' name='refundDetails' id='refundDetails' required />
                    </div>
                </div>
                <button className='nextbtn'
                    onClick={handleToggle}
                    >CANCEL ORDER</button>
                  
            </Card.Text>
        </Card>
        </form>
        <NotificationContainer />
        </div>
    )

}
export default returnItem;