import React, {useState } from 'react';
import { Card } from 'react-bootstrap';
import {useHistory,Redirect} from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import Modal from './Modal';
import Toast from 'light-toast';
import axios from "axios";
import "../css/Return.css";
import { withRouter } from 'react-router'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const returnItem = (props) => {
    const [open, setOpen] = useState(false);
    const history=useHistory();
    const useStyles = makeStyles((theme) => ({
        backdrop: {
          zIndex: theme.zIndex.drawer + 1,
          color: '#fff',
        },
      }));
    const classes = useStyles();
   
      const handleToggle=(e)=>{  
        e.preventDefault();
        console.log('rddc ')  
        let reason = document.getElementById('returnReason').value;
        let reason2 = document.getElementById('refundDetails').value;
        if(reason==='' || reason2===''){ 
        alert('provide return reason')
        }
        else{
        Toast.success('Order Returned Successfully', 2000, () => {
          axios
          .get(`http://127.0.0.1:3333/onlinemedico/orderStatus/${props.returnArray.id}/return`)
          .then((res) => {
           console.log("sucessfully deleted")
           history.push('/onlinemedico/pastOrder')
          });
           
          });
        }
        
       
     //NotificationManager.success('Return placed succesfully','',5000)
    // setInterval(()=>props.history.push('/onlinemedico/pastOrder'),2000)   
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
                    <input type='text' className='returnReason' id='returnReason'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                    <label>Provide account details for refund</label>
                    </div>
                    <div className='col'>
                    <input type='text' className='refundDetails' id='refundDetails'/>
                    </div>
                </div>
                <button className='nextbtn'
                    onClick={handleToggle}>Confirm Return</button>
                    </form>
            </Card.Text>  
        </Card>
       
        </div>
    )

}
export default returnItem;