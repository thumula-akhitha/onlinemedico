import React, { Component, useState, useEffect } from "react";
import "../css/OrderHistory.css";
import { Card } from "react-bootstrap";
import Review from "./Review";
import Tracking from "./Tracking ";
import { Link } from "react-router-dom";
import ReturnItem from "./ReturnItem";
import EditOrder from "./EditOrder";
import axios from "axios";
import moment from "moment";
const OrderHistory = (props) => {
  const [orderHistory, setorderHistory] = useState({
    order_address: {},
    order_medicines: [],
    pivot: {},
  });
  const [reviewStatus, setReviewStatus] = useState(false);
  const [trackStatus, setTrackStatus] = useState(false);
  const [returnItem, setReturnItem] = useState(false);
  const [editOrder, setEditOrder] = useState(false);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3333/onlinemedico/orders/${props.match.params.id}`)
      .then((res) => {
        setorderHistory(res.data[0]);
        console.log(res.data);
      });
  }, []);
  if (trackStatus == true) {
    return <Tracking trackingArray={orderHistory} />;
  }
  if (returnItem == true) {
    return <ReturnItem returnArray={orderHistory} />;
  }
  if (reviewStatus == true) {
    return <Review orderedArray={orderHistory} />;
  }
  if (editOrder == true) {
    return <EditOrder returnArray={orderHistory} />;
  } else {
    return (
      <Card className="order">
        <Card.Header>
          <div className="row">
            <div className="col-3">
              <div className="row">
                <h5 className="orderedOn">Order Placed on </h5>
              </div>
              <div className="row">
                {moment(orderHistory.created_at).format("MMMM Do YYYY, h:mm a")}
              </div>
            </div>
            <div className="col-3">
              <div className="row">
                <h5>Total</h5>
              </div>

              <div className="row">
                <p className="cost">${orderHistory.total}</p>
              </div>
            </div>
            <div className="col-3">
              <div className="row">
                <h5>Ship To </h5>
              </div>
              <div className="row">
                <p className="custName">
                  {orderHistory.order_address.firstName}
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="row">
                <h5 className="orderDate">Order#{orderHistory.orderId}</h5>
              </div>
              <div className="row">
                <Link to="/onlinemedico/orderDetails" className="reciept">
                  Order Details
                </Link>
              </div>
            </div>
          </div>
        </Card.Header>
        {console.log(orderHistory.order_medicines)}
        <Card.Body>
          <p className="status"></p>
          <div className="row">
            <div className="col-7">
              {orderHistory.order_medicines.map((r) => (
                <div className="row" key={r.id}>
                  <div className="col-7">
                    <Card.Img className="orderItem" src={r.src} />
                  </div>
                  <div className="col-4 his-6">
                    <Card.Title>
                      Title: {r.title}
                    </Card.Title>
                    <Card.Text>Quantity: {r.pivot.quantity}</Card.Text>
                    <Card.Text>Sold by: Walmart</Card.Text>
                    <Card.Text>Return eligible for 30 days after order</Card.Text>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-5 track-col-5">
              <div className="row">
              {
                                    orderHistory.status==='delivered'?'':
                                    <button type="button" className='btn btn-primary track'
                                        onClick={() => setTrackStatus(true)}
                                        >Track package</button>
                                }
              </div>
              <div className="row">
              {
                                      orderHistory.status==='delivered'?
                                      <button type="button" className='btn btn-primary replace' 
                                      onClick={()=>setReturnItem(true)}
                                     >Return or replace items</button>:''
                                }
                                
              </div>
             
              <div className="row">
              {
                                    orderHistory.status==='delivered'?
                                    <button type="button" className='btn btn-primary review' 
                                    onClick={()=>setReviewStatus(true)}
                                    >Write a product review</button>:''
                                }
              </div>
              <div className="row">
              {
                                     orderHistory.status!='delivered'?
                                     <button type="button" 
                                     className='btn btn-primary cancel'
                                     onClick={()=>setEditOrder(true)}
                                     >Cancel order</button>:''     
                                }
              </div>
              <div className="row">
                <button type="button" className="btn btn-primary buyAgainBtn">
                  Buy it again
                </button>
                
                  
               
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }
};
                  
                               
                               
                            
                                
                               
                            
export default OrderHistory;
