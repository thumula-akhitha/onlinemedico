import React, { Component,useState } from 'react';
import  '../../css/admincustorder.css';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const OrderHistory = (props) => {
    const cardInfo = [
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
        

    ];
    
        return (
            cardInfo.map((cd,index) =>(
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
            ))

        );
    };

    // console.log(cardInfo);
    // return <div className="grid">
    // {/* {cardInfo.map(renderCard)} */}
    // </div>;




export default OrderHistory;