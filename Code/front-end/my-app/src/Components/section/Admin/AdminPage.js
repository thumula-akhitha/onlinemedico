import { Card } from 'react-bootstrap';
import React, { Component} from 'react';
import axios from 'axios';
import '../../css/Admin.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


class AdminPage extends Component {
    constructor() {
        super();
         this.prodctLink=React.createRef();
         this.productName=React.createRef();
        this.productCost=React.createRef();
        this.productQuantity=React.createRef(); 
        this.productDesc=React.createRef(); 
    }
      addedAlert(){
      //  event.preventDefault();
         // console.log(this.productCode.current.value)
          const addProduct={
            src: this.prodctLink.current.value,
            title: this.productName.current.value,
            price: this.productCost.current.value,
            count: this.productQuantity.current.value,
            description: this.productDesc.current.value
          }

          console.log(addProduct.productCost);
        axios.defaults.headers.post['Content-Type']='application/json';
        axios.post(`http://127.0.0.1:3333/onlinemedico/user/addProduct`,addProduct)
        .then(res=>{
        console.log(res);
        console.log(res.data);
        NotificationManager.success('success','Added product to the products', 8000);
    }) 
        

      }
    render() {
            return (
                <Card>
                    <Card.Title className='addTitle'>Enter Product Details to add into the database</Card.Title>
                    <Card.Text className='cardText'>
                        {/* <div className={classes.addItem}> */}
                        <form>
                        <div className='row'>
                            <div className='col'>
                                <label>Enter product name</label>
                            </div>
                            <div className='col'>
                                <input type='text' className='itemname' ref={this.productName} required/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label>Enter product cost</label>
                            </div>
                            <div className='col'>
                                <input type='text' className='itemCost' ref={this.productCost} required/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label>Enter product Quantity</label>
                            </div>
                            <div className='col'>
                                <input type='text' className='itemQuantity' ref={this.productQuantity} required/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label>Enter product Description</label>
                            </div>
                            <div className='col'>
                                <input type='text' className='itemDesc' ref={this.productDesc} required/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label>Enter Image Link:</label>
                            </div>
                            <div className='col'>
                                <input type='text' className='itemQuantity' ref={this.prodctLink}  required/>
                            </div>
                        </div>
                        <button className='addbtn'
                        onClick={()=>this.addedAlert()}>Add Item</button>
                        </form>
                    </Card.Text>
                    <NotificationContainer/>
                </Card>
                
            )
    }

}
export default AdminPage