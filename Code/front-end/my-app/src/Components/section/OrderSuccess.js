import React, { Component } from 'react';
import '../css/OrderSuccess.css';
import Address from './address';
import {Link} from 'react-router-dom';


const success=require('../images/success.JPG');
class OrderSuccess extends Component{
    render(){
        return(
            <div className='OrderHeading'>
                <div className='thanksConfirm'>
                    <img className='successImg' src={success}></img>
                <h4 className='thanks'>THANK YOU</h4>
                <p className='confirmPara'>We got your Order and will send you a confirmation email soon.</p>
                </div>
                <div className='SuccessOrder'>
                    <p>Order Number</p>
                    <p>W09B2345BVC5</p>
                    <Link to ="./orderDetails">
                    <p className='orderdet'>View Order Details</p>
                    </Link>
                </div>
                <div className='paymnt'>
                    <p className='paymntTotal'>Payment Total</p>
                    <p className='amtTotal'>$19.85</p>
                </div>
                <div className='deliveryDate'>
                    <p className='Delievery'>Delivery</p>
                    <p className='dateEst'>Est.Delivery:Nov 17</p>
                </div>
                {/* <div className='Adder'>
                    <p className='shipAddr'>Shipping Address</p>
                </div> */}
                {/* <div className='thanksAddrs'><Address/></div> */}
                
            </div>


        )
    }
}
export default OrderSuccess;