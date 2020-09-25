import { Card } from 'react-bootstrap';
import React, { Component} from 'react';
import axios from 'axios';
import '../css/Admin.css';;


class Admin extends Component {
    constructor() {
        super();

        this.state = {
            showForm: false,

        };
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:3333/onlinemedico/addItem')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      }
      addedAlert(){
          alert('Successfully added item to the database')
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
                                <input type='text' className='itemCode' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label>Enter product name</label>
                            </div>
                            <div className='col'>
                                <input type='text' className='itemname' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label>Enter product cost</label>
                            </div>
                            <div className='col'>
                                <input type='text' className='itemCost' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label>Enter product Quntity</label>
                            </div>
                            <div className='col'>
                                <input type='text' className='itemQuantity' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label>Enter product Description</label>
                            </div>
                            <div className='col'>
                                <input type='text' className='itemDesc' />
                            </div>
                        </div>
                        <button className='addbtn'
                        onClick={this.addedAlert}>Add Item</button>

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
export default Admin