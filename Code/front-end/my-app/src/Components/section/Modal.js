import React from 'react';
// import returnImg from './images/success.JPG';
import "../css/Modal.css";
import { Card } from 'react-bootstrap';


const modal = ( props ) => {
  const returnImage=require('../images/success.JPG');
  const imgStyle={
    width: '39px',
    marginLeft: '23em',
    marginTop: '2em'
  }
  return(
    <Card className='returnCard'>
      <img className='returnSuccess' src={returnImage} style={imgStyle}></img>
        <Card.Title className='returnConfirm'>
          Your return Confirmed
        </Card.Title>
        <Card.Text className='returnMail'>Return for your order is confirmed.you will get mail with return tracking number shortly</Card.Text>
      
      </Card>

  )
  }

export default modal;