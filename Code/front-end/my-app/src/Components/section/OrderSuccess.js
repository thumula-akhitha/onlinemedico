import React, { Component } from 'react';
import '../css/OrderSuccess.css';
import {DataContext} from '../Context';
import Address from './address';
import axios from 'axios';
import {Link} from 'react-router-dom';
import moment from 'moment';

const success=require('../images/success.JPG');
class OrderSuccess extends Component{
    static contextType = DataContext;
    componentDidMount(){
        const {cart,selectedAddress,userDetails,total,addOrder,clearCart}=this.context;
        console.log("suces page")
        console.log(cart)
        console.log(selectedAddress)
        console.log(total)
        const order = {}
        order.addressId = selectedAddress.id;
        order.cardId = 1;
        order.status = "confirmed";
        order.customerId = 1;
        order.total = total;
        const medicine = cart.map((value) =>  value.id)
        const count = cart.map((value) =>  value.count)
        console.log(medicine)
        const totalOrder = {
            order : order,
            medicines: medicine,
            count:count
        }
        console.log(totalOrder)
        console.log("cameeeeee")
        axios.post(`http://127.0.0.1:3333/onlinemedico/createOrder`,totalOrder)
        .then(res=>{
            console.log("sucesss")
       // console.log(res);
        console.log(res.data);
        addOrder(res.data[0])
        clearCart()
    }) 




       // this.context.getTotal();
    }
    render(){
        const { orders } = this.context
        const tax=orders.total-((orders.total)*(5/100))
        const taxtotal=orders.total-tax
        const orderTotal=taxtotal+orders.total
        let newDate=moment(orders.created_at,"DD-MM-YYYY")
        let newDate1=newDate.add(7, 'days')
        console.log('success',newDate1)
        return(
            //const {cart,total}=this.context;
            <div className='OrderHeading'>
                <div className='thanksConfirm'>
                    <img className='successImg' src={success}></img>
                <h4 className='thanks'>THANK YOU</h4>
                <p className='confirmPara'>We got your Order and will send you a confirmation email soon.</p>
                </div>
                <div className='SuccessOrder'>
                    <p>Order Number</p>
        <p>{orders.orderId}</p>
                    <Link to ="./orderDetails">
                    <p className='orderdet'>View Order Details</p>
                    </Link>
                </div>
                <div className='paymnt'>
                    <p className='paymntTotal'>Payment Total</p>
        <p className='amtTotal'>{orderTotal}</p>
                </div>
                <div className='deliveryDate'>
                    <p className='Delievery'>Delivery</p>
        <p className='dateEst'>{moment(orders.created_at,"YYYY-MM-DD").add('days', 7).format('YYYY-MM-DD')}</p>
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