import React, { Component } from "react"
import {Container, Row, Col, Card, Form, Button,Accordion} from "react-bootstrap";
import { withRouter } from "react-router";
import {FaCaretRight,FaEye,FaPlus,FaPencilAlt,FaFolderOpen, FaTrashAlt} from "react-icons/fa"
import {Link} from 'react-router-dom'
import axios from 'axios';
import '../../css/AdminOrder.css';


class AdminOrder extends Component {
   
      render() {
        return (
          <div>

            <Accordion>
            <Card>
              <Card.Header className="adminCard">
              <Row>
                <Col className="adminOrdrid">
               <Accordion.Toggle as={Button} className="adminButton" variant="link" eventKey="0" >
               <FaCaretRight />#9876534567
                </Accordion.Toggle>
                </Col>
                <Col className="adminDate"><b>Order Date: </b> 09/20/2020</Col><Col className="adminDate"><b>Status:</b><span id="adStatus"><b>Shipped</b></span></Col>
                <Col className="adminDel"><Button className="adminTrash" variant="secondary"><FaTrashAlt /></Button> </Col>
                </Row>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Row>
                  <Col>
                   <div className="a-1"><p>Shipping Information: </p></div>
                  <div className="a-2"><p>Rohan Bandari<br />1121 N College Dr<br />Horizons West Apartment 2<br /></p></div></Col>
                  <Col>
                  <div className="a-1"><p>Contact Information: </p></div>
                  <div className="a-2"><p>Rohan Bandari<br />rohan@gmail.com<br />9876543456<br /></p></div></Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            </Accordion>

            <Accordion>
            <Card>
              <Card.Header className="adminCard">
              <Row>
                <Col className="adminOrdrid">
               <Accordion.Toggle as={Button} className="adminButton" variant="link" eventKey="0" >
               <FaCaretRight />#9876234564
                </Accordion.Toggle>
                </Col>
                <Col className="adminDate"><b>Order Date: </b> 10/02/2020</Col><Col className="adminDate"><b>Status:</b><span id="adStatus"><b>In Transit</b></span></Col>
                <Col className="adminDel"><Button className="adminTrash" variant="secondary"><FaTrashAlt /></Button> </Col>
                </Row>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Row>
                  <Col>
                   <div className="a-1"><p>Shipping Information: </p></div>
                  <div className="a-2"><p>Rohan Bandari<br />1121 N College Dr<br />Horizons West Apartment 2<br /></p></div></Col>
                  <Col>
                  <div className="a-1"><p>Contact Information: </p></div>
                  <div className="a-2"><p>Rohan Bandari<br />rohan@gmail.com<br />9876543456<br /></p></div></Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            </Accordion>


            <Accordion>
            <Card>
              <Card.Header className="adminCard">
              <Row>
                <Col className="adminOrdrid">
               <Accordion.Toggle as={Button} className="adminButton" variant="link" eventKey="0" >
               <FaCaretRight />#9876576830
                </Accordion.Toggle>
                </Col>
                <Col className="adminDate"><b>Order Date: </b> 09/30/2020</Col><Col className="adminDate"><b>Status:</b><span id="adStatus"><b>Cancelled</b></span></Col>
                <Col className="adminDel"><Button className="adminTrash" variant="secondary"><FaTrashAlt /></Button> </Col>
                </Row>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Row>
                  <Col>
                   <div className="a-1"><p>Shipping Information: </p></div>
                  <div className="a-2"><p>Rohan Bandari<br />1121 N College Dr<br />Horizons West Apartment 2<br /></p></div></Col>
                  <Col>
                  <div className="a-1"><p>Contact Information: </p></div>
                  <div className="a-2"><p>Rohan Bandari<br />rohan@gmail.com<br />9876543456<br /></p></div></Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            </Accordion>

            </div>
            

            


           
                     
                      
          );
      }
}

export default AdminOrder;