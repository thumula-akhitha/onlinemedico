import React, { Component } from "react";
import {Row, Col,Container,Form,Image} from "react-bootstrap";
import "../css/PastOrder.css";
import axios from 'axios';
import {Link} from 'react-router-dom';
import "../images/tablet.jpg"
import moment from 'moment';


class PastOrder extends Component {
  constructor(props) {
    super(props);

  }
  state={
    OrderDetails : []
    } 
  componentDidMount(){
    console.log("entered component function")
    axios.get('http://127.0.0.1:3333/onlinemedico/orders').then(res=>{
      console.log(res.data)
      this.setState({OrderDetails:res.data})
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  render() {
    return (
     
      <Container id="orderContainer">
        
        <Row >
          <Col md="9"><h4>Past Orders</h4></Col>
          <Col md="1">View By: </Col>
          <Col md="2">
          <Form>
  <Form.Group controlId="exampleForm.SelectCustomSizeSm">
    {/* <Form.Label>View By:</Form.Label> */}
    <Form.Control as="select" size="md" custom>
      <option>last 30 days</option>
      <option>last 60 days</option>
      <option>last 90 days</option>
      </Form.Control>
  </Form.Group>
  </Form>
  </Col>
  </Row>
   <Row className="orderHeader">
     <Col>Order Date</Col>
     <Col>Order Total</Col>
     <Col>Order Status</Col>
   </Row>
   {this.state.OrderDetails.map(od=>
     <Row className="orderDetails">
     <Col><Link to={`/onlinemedico/history/${od.id}`}>{moment(od.created_at).format('MMMM Do YYYY, h:mm a')}</Link></Col>
   <Col className="orderNumber">${od.total}</Col>
   <Col style={{color:"Green"}}><h5>{od.status}</h5></Col>
   {od.order_address.firstName}
   
    </Row>
   )}   
   </Container>
    )
  }
}

export default PastOrder;