import React, { Component } from "react"
import {Container, Row, Col, Card, Form, Button,Accordion} from "react-bootstrap";
import { withRouter } from "react-router";
import {FaCaretRight,FaEye,FaPlus,FaPencilAlt,FaFolderOpen, FaTrashAlt} from "react-icons/fa"
import {Link} from 'react-router-dom'
import axios from 'axios';
import '../../css/AdminOrder.css';


class AdminOrder extends Component {
  constructor(props){
    super(props);
    this.state = {
      cardInfo : [
        {
            image: 'https://coupons.hunt4freebies.com/wp-content/uploads/2017/12/DayQuil-NyQuil.png',
            title: "nytQuill",
            text: "",
            sold: 'Walmart',
            price: '20$',
            status: 'Prcoessing',
            address: '1121 N collge Dr'
        },
        {
            image: "https://cdn.shopify.com/s/files/1/1346/8165/products/1129154_1400x.jpg?v=1575891053",
            title: "IRESSA",
            text: "Cold tablet",
            sold: 'Walmart',
            price: '20$',
            status: 'Prcoessing',
            address: '1121 N collge Dr'
        },
        

    ]
  
    }
  }
      render() {
        
        return (
          <div>

            <Accordion>
            <Card>
              <Card.Header className="adminCard">
              <Row>
                <Col className="adminOrdrid">
               <Accordion.Toggle as={Button} className="adminButton" variant="link" eventKey="0" >
               <FaCaretRight />W09B2345BVC5
                </Accordion.Toggle>
                </Col>
                <Col className="adminDate"><b>Order Date: </b> 11/11/2020</Col><Col className="adminDate"><b>Status:</b><span id="adStatus"><b>Processing</b></span></Col>
                <Col className="adminDel"><Button className="adminTrash" variant="secondary"><FaTrashAlt /></Button> </Col>
                </Row>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                {
                this.state.cardInfo.map((cd,index) =>(
                <Card className="order">
                <Card.Body>
                    <p className='status'>{cd.status}</p>
                    <div className='row'>
                        <div className='col-4'>
                            <Card.Img className='orderItem' src={cd.image}/>
                        </div>
                        <div className='col-3'>
                            <Card.Title className='orderTitle'>{cd.title}</Card.Title>
                            <Card.Text> {cd.text} </Card.Text>
                            <p>Sold by:{cd.sold}</p>
                            <p>Return eligible for 30 days after order</p>
                            <p className='cost'>{cd.price}</p>
                            
                        </div>
                    </div>
                </Card.Body>
                
            </Card>
            ))}
                  <Row>
                  <Col>
                   <div className="a-1"><p>Shipping Information: </p></div>
                  <div className="a-2"><p>Akhitha Tumula<br />1115N College Dr<br />Apt L<br /></p></div></Col>
                  <Col>
                  <div className="a-1"><p>Contact Information: </p></div>
                  <div className="a-2"><p>Akhitha Tumula<br />akhitha.tumula@gmail.com<br />9898989898<br /></p></div></Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            </Accordion>

            {/* <Accordion>
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
            </Accordion> */}

            </div>
            

            


           
                     
                      
          );
      }
}

export default AdminOrder;