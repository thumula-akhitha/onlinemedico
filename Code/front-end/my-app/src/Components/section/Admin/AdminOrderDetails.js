import React, { Component } from "react";
import '../../css/admindetails.css';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

class AdminOrderDetails extends Component {
    state = {
        orderHistory: {order_address:[],order_medicines:[],user:[]},
      };
      componentDidMount() {
        axios
        .get(`http://127.0.0.1:3333/onlinemedico/orders/${this.props.match.params.id}`)
        .then((res) => {
            console.log("camee")
            console.log(res.data);
          this.setState({orderHistory:res.data[0]})
          
        });
      }
render(){
    return (
      <Card className="adminorder">
        <Card.Body>
          <div className="row">
            <div className="col-7">
               {this.state.orderHistory.order_medicines.map((r) => (
                <div className="row">
                  <div className="col-6">
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
            <div className="col-4 order-ship">
               <div className="col"> 
               <h4>Shipping Information:</h4>
               <p>{this.state.orderHistory.order_address.firstName}</p>
               <p>{this.state.orderHistory.order_address.address1}</p>
               <p>{this.state.orderHistory.order_address.address2}</p>
               <p>{this.state.orderHistory.order_address.mobile}</p>
               <p>{this.state.orderHistory.order_address.zipcode}<span>{this.state.orderHistory.order_address.state}</span></p>
               </div>
               <hr/>
               <div className="col"> 
               <h4>User Information:</h4>
               <p>{this.state.orderHistory.user.firstName}<span>{this.state.orderHistory.user.lastName}</span></p> 
               <p>{this.state.orderHistory.user.email}</p>
               <p>{this.state.orderHistory.user.contactNumber}</p>
               </div>
               </div>
               
            </div>

        </Card.Body>
      </Card>
    );
  }
}
                  
                               
                               
                            
                                
                               
                            
export default AdminOrderDetails;
