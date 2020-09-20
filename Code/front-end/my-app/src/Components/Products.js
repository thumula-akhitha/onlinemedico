import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from './ContextData'
import '../css/Product.css'

export class Products extends Component {

    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
        return (
            <div id="product">
               {
                   products.map(product =>(
                       <div className="card" key={product.id}>
                           <Link to={`/product/${product.id}`}>
                               <img src={product.src} alt=""/>
                           </Link>
                           <div className="content">
                               <h3>
                                   <Link to={`/product/${product.id}`}>{product.title}</Link>
                               </h3>
                               <span>${product.price}</span>
                               <p>{product.description}</p>
                               <button onClick={()=> addCart(product.id)}>Add to cart</button>
                           </div>
                       </div>
                   ))
               }
            </div>
        )
    }
}

export default Products
