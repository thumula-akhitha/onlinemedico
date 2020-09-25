import React, { Component,useState } from 'react';
import tablet from './images/tablet.jpg';
import classes from './OrderHistory.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Review from './Review';
import Tracking from './Tracking';
import ReturnItem from './ReturnItem';



const OrderHistory = (props) => {
    const cardInfo = [
        {
            image: require("./images/tablet.jpg"),
            title: "IRESSA",
            text: "Cold tablet",
            sold: 'Walmart',
            price: '20$',
            status: 'Delivered',
            date: 'Aug 2nd 2020',
            name: 'Shravs',
            orderId: 'G34DC12334',
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
            cardInfo.map((card,index) =>(
                <Card className={classes.order}>
                <Card.Header>
                    <div className='row'>
                        <div className='col-3'>
                            < div className='row'>
                                <p className={classes.orderedOn}>Order Placed on</p>
                            </div>
                            <div className='row'>
                                <p className={classes.orderDate}>{card.date}</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='row'>
                                <p className={classes.total}>Total</p>
                            </div>
                            <div className='row'>
                                <p className={classes.totalPrice}>{card.price}</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='row'>
                                <p >SHIP TO </p>
                            </div>
                            <div className='row'>
                                <p className={classes.custName}> {card.name}</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='row'>
                                <p className={classes.orderDate}>Order# {card.orderId} </p>
                            </div>
                            <div className='row'>
                                <p className={classes.reciept}>Order Details </p>
                            </div>
                        </div>

                    </div>
                </Card.Header>
                <Card.Body>
                    <p className={classes.status}>{card.status}</p>
                    <div className='row'>
                        <div className='col-3'>
                            <Card.Img className={classes.orderItem} src={card.image}/>
                        </div>
                        <div className='col-4'>
                            <Card.Title className={classes.orderTitle}>{card.title}</Card.Title>
                            <Card.Text> {card.text} </Card.Text>
                            <p>Sold by:{card.sold}</p>
                            <p>Return eligible for 30 days after order</p>
                            <p className={classes.cost}>{card.price}</p>
                            <button className={classes.buyAgainBtn}>Buy it again</button>
                        </div>
                        <div className='col-5'>
                            <div className='row'>
                                <button className={classes.track}
                                onClick={() => setTrackStatus(true)}
                                >Track package</button>
                            </div>
                            <div className='row'>
                                <button className={classes.replace} 
                                 onClick={()=>setReturnItem(true)}
                                >Return or replace items</button>
                            </div>
                            <div className='row'>
                                <button className={classes.view} >View your order</button>
                            </div>
                            <div className='row'>
                                <button className={classes.review} 
                                onClick={()=>setReviewStatus(true)}
                                >Write a product review</button>
                            </div>
                            <div className='row'>
                                <button className={classes.cancel} >Edit/Cancel order</button>
                            </div>

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