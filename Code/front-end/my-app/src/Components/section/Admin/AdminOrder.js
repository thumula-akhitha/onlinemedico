import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Accordion,
} from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../css/AdminOrder.css";

class AdminOrder extends Component {
  state = {
    OrderDetails: [],
  };
  componentDidMount() {
    axios
      .get("http://127.0.0.1:3333/onlinemedico/orders")
      .then((res) => {
        this.setState({ OrderDetails: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChange(e,k) {
    console.log(e.target.value)
    if(e.target.value != "select"){
    axios.get(`http://127.0.0.1:3333/onlinemedico/orderStatus/${k}/${e.target.value}`).then(res=>{
      console.log("cameeee")
      console.log(res.data)
      this.setState({OrderDetails:res.data})
    })
  }
  }
  render() {
    return (
      <Container id="orderContainer">
        <Row>
          <Col md="8">
            <h4>Orders by users</h4>
          </Col>
        </Row>
        <Row className="orderHeader">
          <Col className="col-3">Order Date</Col>
          <Col className="col-3">Order Total</Col>
          <Col className="col-3">Order Status</Col>
          <Col className="col-3">User Name</Col>
        </Row>
        {this.state.OrderDetails.map((od) => (
          <Row className="orderDetails">
            <Col className="col-3"> 
              <Link to={`/mainadmin/adminhistory/${od.id}`}>
                {moment(od.created_at).format("MMMM Do YYYY, h:mm a")}
              </Link>
            </Col>
            <Col className="orderNumber col-3">${od.total}</Col>
            <Col className="col-3">
            <Form>
              <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Control
                  as="select"
                  onChange={(e) => {
                    this.handleChange(e, od.id);
                  }}
                  value = {od.status}
                  size="md"
                >
                  <option value="select">Select Option</option>
                  <option value="confirmed">confirmed</option>
                  <option value="pending">pending</option>
                  <option value="returned">returned</option>
                  <option value="delivered">Delivered</option>
                </Form.Control>
              </Form.Group>
            </Form>
            </Col>
            <Col className="col-3">{od.order_address.firstName}</Col>
            
          </Row>
        ))}
      </Container>
    );
  }
}

export default AdminOrder;
