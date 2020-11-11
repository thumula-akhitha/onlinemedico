import React, { Component } from "react";
import {Row, Col,Container,Form} from "react-bootstrap";
import "../css/OrderDetails.css";
import {Link} from 'react-router-dom';


class OrderDetails extends Component {
  constructor(props) {
    super(props);
  }
render(){
    return(
    <Container className="orderContainer">
        <Row>
       <Col md="7" className="summaryDiv"> 
           
               <div className="orderSummary1">
               <p><b>Order Date</b>: October 10,2020</p>
               <p><b>Order Number</b>: W09B2345BVC5</p>
               <p><b>Total</b>: $19.85</p>
               </div>
        <div className="orderSummary2">
            <p><b>Ship To</b></p>
            <p>Akhitha Tumula, 1115N College Dr,Apt L,64468</p>
        </div>
          <div className="orderSummary3">
          <div className="orderSummary"><p><b>Status: Pending</b></p><p>Shipment 1 0f 1</p></div>
         <div className="orderSummary"><p>Tracking Number</p><p>#98765434567</p></div> 
          </div>
           
       </Col>
       <Col md="4" className="summaryDiv2">
        <div className="p-1"><p>Order Summary</p></div>
        <div className="p-2">
      <div className="orderSummary"><p>SubTotal:</p><p>$17.00</p></div>
      <div className="orderSummary"><p>Discounts/Coupon</p><p>$0</p></div>
      <div className="orderSummary"><p>Shipping and Handling</p><p>$2.00</p></div>
      <div className="orderSummary"><p>tax</p><p>$0.85</p></div>
      <div className="orderSummary"><p>Total:</p><p>$19.85</p></div>
      </div>
      <div className="p-4"><p>Billing Information</p></div>
      <div className="p-3"><p>Total may not reflect returns, cancelled items, or other charge backs to your credit card.</p></div>
      <div className="p-1"><p>Shipping Information</p></div>
      <div className="orderSummary"><p>Akhitha Tumula<br />1115N College Dr<br />Apt L<br /></p></div>
      <div className="p-1"><p>Contact Information</p></div>
      <div className="orderSummary"><p>Akhitha Tumula<br />akhitha.tumula@gmail.com<br />9898989898<br /></p></div>    
     </Col>
       </Row>
    </Container>
    )
   
 
}
}
export default OrderDetails;
