import React, { Component } from 'react';
import '../css/OrderSuccess.css';
import Address from './address';

class OrderSuccess extends Component{
    render(){
        return(
            <div className='OrderHeading'>
                <div className='thanksConfirm'>
                <h4 className='thanks'>THANK YOU</h4>
                <p className='confirmPara'>We got your Order and will send you a confirmation email soon.</p>
                </div>
                <div className='SuccessOrder'>
                    <p>Order Number</p>
                    <p>W09B2345BVC5</p>
                    <p>View Order Details</p>
                </div>
                <div className='paymnt'>
                    <p className='paymntTotal'>Payment Total</p>
                    <p className='amtTotal'>$50.98</p>
                </div>
                <div className='deliveryDate'>
                    <p className='Delievery'>Delivery</p>
                    <p className='dateEst'>Est.Delivery:Oct 24</p>
                </div>
                <div className='Adder'>
                    <p className='shipAddr'>Shipping Address</p>
                </div>
                <div><Address/></div>
                
            </div>


        )
    }
}
export default OrderSuccess;