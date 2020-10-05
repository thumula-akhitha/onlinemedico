import React, { Component } from "react";
import {Row, Col,Container,Form,Image} from "react-bootstrap";
import "../css/PastOrder.css";
import {Link} from 'react-router-dom';
import "../images/tablet.jpg"


class PastOrder extends Component {
  constructor(props) {
    super(props);

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
       <Col md="1"></Col>
     <Col>Order Date</Col>
     <Col>Order Number</Col>
     <Col>Order Status</Col>
   </Row>
   <Row className="orderDetails">
   <Col md={1} >
      <Image id="orderImage" src={require("../images/tablet.jpg")}  rounded />
    </Col>
<Col>September 30</Col>
<Col className="orderNumber"><Link to="/onlinemedico/history">9876545678987</Link></Col>
<Col style={{color:"Green"}}><h5>Shipped</h5></Col>
   </Row>
   </Container>
    )
  }
}

export default PastOrder;