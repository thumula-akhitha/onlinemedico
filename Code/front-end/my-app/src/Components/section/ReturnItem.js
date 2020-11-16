import React, {useState } from 'react';
import { Card } from 'react-bootstrap';
import {useHistory,Redirect} from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import Modal from './Modal';
import Toast from 'light-toast';
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
        Toast.info('Order Returned Successfully', 2000, () => {
            history.push('/onlinemedico/pastOrder')
            console.log("camee")
            // do something after the toast disappears
          });
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
                    <input type='text' className='returnReason'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                    <label>Provide account details for refund</label>
                    </div>
                    <div className='col'>
                    <input type='text' className='refundDetails'/>
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