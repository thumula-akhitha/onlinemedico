import React, { Component,useState } from 'react';
import  '../css/OrderHistory.css';
import { Card } from 'react-bootstrap';
import Review from './Review';
import Tracking from './Tracking ';
import {Link} from 'react-router-dom';
import ReturnItem from './ReturnItem';



const OrderHistory = (props) => {
    const cardInfo = [
        {
            image: require("../images/tablet.jpg"),
          // image : require("https://mk0ehealtheletsj3t14.kinstacdn.com/wp-content/uploads/2020/05/Paracetamol.jpg"),
            title: "Paracetamol",
            text: "It can treat minor aches and pains, and reduces fever",
            sold: 'Walmart',
            price: '20$',
            status: 'Delivered',
            date: 'OCT 08th 2020',
            name: 'Akhitha',
            orderId: 'W09B2345BVC5',
            address: '1121 N collge Dr'
        },
    ];
    const [reviewStatus,setReviewStatus]=useState(false);
    const [trackStatus,setTrackStatus]=useState(false);
    const [returnItem,setReturnItem]=useState(false);
    if(trackStatus==true)
    {
        return <Tracking trackingArray= {cardInfo}/>
    }
    if(returnItem == true){
        return <ReturnItem returnArray = {cardInfo}/>
    }
    if(reviewStatus==true){
        return <Review orderedArray = { cardInfo }/>
    }
    else{
    // const renderCard = (card, index) => {
        return (
            cardInfo.map((cd,index) =>(
                <Card className="order">
                <Card.Header>
                    <div className='row'>
                        <div className='col-3'>
                            < div className='row'>
                                <p className='orderedOn'>Order Placed on</p>
                            </div>
                            <div className='row'>
                                <p className='orderDate'>{cd.date}</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='row'>
                                <p>Total</p>
                            </div>
                            <div className='row'>
                                <p className='totalPrice'>{cd.price}</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='row'>
                                <p >SHIP TO </p>
                            </div>
                            <div className='row'>
                                <p className='custName'> {cd.name}</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='row'>
                                <p className='orderDate'>Order# {cd.orderId} </p>
                            </div>
                            <div className='row'>
                            <Link to="/onlinemedico/orderDetails" className='reciept'>Order Details</Link>
                               
                            </div>
                        </div>

                    </div>
                </Card.Header>
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
                            <button type="button" className="btn btn-primary buyAgainBtn">Buy it again</button>
                        </div>
                        
                        <div className='col-5 track-col-5'>
                            <div className='row'>
                            <button type="button" className='btn btn-primary track'
                                onClick={() => setTrackStatus(true)}
                                >Track package</button>
                            </div>
                            <div className='row'>
                                <button type="button" className='btn btn-primary replace' 
                                 onClick={()=>setReturnItem(true)}
                                >Return or replace items</button>
                            </div>
                            <div className='row'>
                                <button type="button" className='btn btn-primary view' >View your order</button>
                            </div>
                            <div className='row'>
                                <button type="button" className='btn btn-primary review' 
                                onClick={()=>setReviewStatus(true)}
                                >Write a product review</button>
                            </div>
                            {/* <div className='row'>
                                <button type="button" className='btn btn-primary cancel'>Edit/Cancel order</button>
                            </div> */}

                        </div>
                    </div>

                </Card.Body>

            </Card>
            ))

        );
    };
}

    // console.log(cardInfo);
    // return <div className="grid">
    // {/* {cardInfo.map(renderCard)} */}
    // </div>;




export default OrderHistory;