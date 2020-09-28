import React, { Component } from "react";
import CartItem from "./cartitem";
import {DataContext} from '../Context';
import {cart} from "./Cart";

 class CheckoutCart extends Component {
  static contextType = DataContext;

  componentDidMount(){
      this.context.getTotal();
  }
  
  
 // const { total } = require('./Cart.js')
  render(){
    const {cart,total}=this.context;
    ////const {things}=this.props;
  
  return (
    
    <div>
      <table>
        <tbody>
          <tr>
            {/* <td>Product</td> */}
            <td>Name</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Total</td>
          </tr>
          {cart.map((t) => (
            <CartItem key={t.id} thing={t} />
          ))}
          <tr>
            <td colSpan="3">Tax (5%): </td>
            
            <td> ${Math.floor(total* 5) / 100}</td>

            
            
          </tr>
          <tr>
            <td colSpan="3">Total(with tax): </td>
            
            <td> ${(Math.floor(total* 100) / 100)+(Math.floor(total* 5) / 100)}</td>

            
            
          </tr>
        </tbody>
      </table>
    </div>
  )
          }
         // }        
};

export default CheckoutCart;
