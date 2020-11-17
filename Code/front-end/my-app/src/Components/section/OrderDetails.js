import React, { Component } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import "../css/OrderDetails.css";
import { Link } from 'react-router-dom';
import { DataContext } from '../Context';
import moment from 'moment';



class OrderDetails extends Component {
  static contextType = DataContext;
  state = {
    userInfo: {}
  }
  componentDidMount() {
    const { orders } = this.context
    // this.setState({userInfo:orders})
    console.log('orderdetails', orders)
  }
  
  render() {
    const {userDetails}=this.context
    console.log('details',userDetails)
    const { orders } = this.context
   const tax=orders.total-((orders.total)*(5/100))
   const taxtotal=orders.total-tax
   const orderTotal=taxtotal+orders.total
    return (
      <Container className="orderContainer">
        <Row>
          <Col md="7" className="summaryDiv">

            <div className="orderSummary1">
              <p><b>Order Date</b>:{ moment(orders.order_address.created_at).format('MMMM Do YYYY, h:mm a')}</p>
    <p><b>Order Number</b>: {orders.order_address.orderId}</p>
              <p><b>Total</b>{orders.orderTotal}</p>
            </div>
            <div className="orderSummary2">
              <p><b>Ship To</b></p>
              <p>{orders.order_address.firstName}</p>
              <p>{orders.order_address.mobile}</p>
              <p>{orders.order_address.address1}</p>
              <p>{orders.order_address.address2}</p>
              <p>{orders.order_address.state}</p>
              <p>{orders.order_address.zip}</p>
            </div>
            <div className="orderSummary3">
          <div className="orderSummary"><p><b>Status: {orders.status}</b></p><p>Shipment 1 0f 1</p></div>
              <div className="orderSummary"><p>Tracking Number</p><p>#98765434567</p></div>
            </div>

          </Col>
          <Col md="4" className="summaryDiv2">
            <div className="p-1"><p>Order Summary</p></div>
            <div className="p-2">
    <div className="orderSummary"><p>SubTotal:</p><p>{orders.total}</p></div>
              <div className="orderSummary"><p>Discounts/Coupon</p><p>$0</p></div>
              <div className="orderSummary"><p>Shipping and Handling</p><p>$2.00</p></div>
              <div className="orderSummary"><p>tax</p><p>{Math.round(taxtotal * 100) / 100}</p></div>
              <div className="orderSummary"><p>Total:</p><p>{orderTotal}</p></div>
            </div>
            <div className="p-4"><p>Billing Information</p></div>
            <div className="p-3"><p>Total may not reflect returns, cancelled items, or other charge backs to your credit card.</p></div>
            <div className="p-1"><p>Shipping Information</p></div>
            <div className="orderSummary">
            <p>{orders.order_address.firstName}</p>
              <p>{orders.order_address.address1}</p>
              <p>{orders.order_address.state}</p>
              <p>{orders.order_address.zip}</p>
              </div>
            <div className="p-1"><p>Contact Information</p></div>
    <div className="orderSummary"><p>{userDetails.firstName}<br />{userDetails.email}<br />{userDetails.contactNumber}<br /></p></div>
          </Col>
        </Row>
      </Container>
    )


  }
}
export default OrderDetails;
