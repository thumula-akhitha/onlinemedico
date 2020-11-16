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
  handleChange(e) {
    console.log(e.target.value)
    if(e.target.value != "select"){
    axios.get(`http://127.0.0.1:3333/onlinemedico/ordersFilter/${e.target.value}`).then(res=>{
      console.log(res.data)
      this.setState({OrderDetails:res.data})
    })
  }
  }
  render() {
    return (
     
      <Container id="orderContainer">
        
        <Row >
          <Col md="8"><h4>Past Orders</h4></Col>
          <Col md="2">Filter By Status: </Col>
          <Col md="2">
          <Form>
  <Form.Group controlId="exampleForm.SelectCustomSizeSm">
    {/* <Form.Label>View By:</Form.Label> */}
    <Form.Control as="select" onChange={(e) => {this.handleChange(e)}} size="md" >
       <option value="select">Select Option</option>
      <option value="confirmed">confirmed</option>
      <option value="pending">pending</option>
      
      <option value="delivered">Delivered</option>
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