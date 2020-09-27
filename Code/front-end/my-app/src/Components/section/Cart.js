import React, { Component } from 'react';
import {DataContext} from '../Context';
import {Link} from 'react-router-dom';
import '../css/Details.css';
import '../css/Cart.css';

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
        }else{
            return ( 
                <div>              
                    {
                        cart.map(item =>(
                            <div className="details cart" key={item.id}>
                                <img src={item.src} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${item.price * item.count}</span>
                                    </div>
                                    <p>{item.description}</p>
                                    <p>{item.content}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item.id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item.id)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item.id)}>X</div>
                            </div>
                        ))
                    }
                    
                    <div className="total">
                    <Link to="/shipping">Checkout</Link>
                        <h3>Total: ${Math.floor(total* 100) / 100}</h3>
                    </div>
                    </div> 
                )
            }
        }
}

export default Cart