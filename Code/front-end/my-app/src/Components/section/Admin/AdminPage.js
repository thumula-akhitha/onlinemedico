import { Card } from 'react-bootstrap';
import React, { Component} from 'react';
import axios from 'axios';
import '../../css/Admin.css';


class AdminPage extends Component {
    constructor() {
        super();
         this.productCode=React.createRef();
         this.productName=React.createRef();
        this.productCost=React.createRef();
        this.productQuantity=React.createRef(); 
        this.productDesc=React.createRef(); 
        this.state = {
            showForm: false,

        };
    }
      addedAlert(){
          console.log(this.productCode.current.value)
          const addProduct={
            productCode: this.productCode.current.value,
            productName: this.productName.current.value,
            productCost: this.productCost.current.value,
            productQuantity: this.productQuantity.current.value,
            productDesc: this.productDesc.current.value
          }
          console.log(addProduct.productCost);
        axios.defaults.headers.post['Content-Type']='application/json';
        axios.post(`http://127.0.0.1:3333/onlinemedico/user/addProduct`,addProduct)
        .then(res=>{
        console.log(res);
        console.log(res.data);
    }) 
      }
    render() {
        if (this.state.showForm == true) {
            return (
                <Card>
                    <Card.Title className='addTitle'>Enter Product Details to add into the database</Card.Title>
                    <Card.Text className='cardText'>
                        {/* <div className={classes.addItem}> */}
                        <div className='row'>
                            <div className='col'>
                                <label>Enter product Code</label>
                            </div>
                            <div className='col'>
                                <input type='text' className='itemCode' ref={this.productCode} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label>Enter product name</label>
                            </div>
                            <div className='col'>
                                <input type='text' className='itemname' ref={this.productName} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label>Enter product cost</label>
                            </div>
                            <div className='col'>
                                <input type='text' className='itemCost' ref={this.productCost} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label>Enter product Quntity</label>
                            </div>
                            <div className='col'>
                                <input type='text' className='itemQuantity' ref={this.productQuantity}  />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label>Enter product Description</label>
                            </div>
                            <div className='col'>
                                <input type='text' className='itemDesc' ref={this.productDesc}  />
                            </div>
                        </div>
                        <button className='addbtn'
                        onClick={()=>this.addedAlert()}>Add Item</button>

                    </Card.Text>
                </Card>
            )
        }
        return (
            <div>
                <button className='admnaddItem'
                    onClick={() => this.setState({ showForm: true })}
                >Add New Item</button>
            </div>
        )
       
    }

}
export default AdminPage