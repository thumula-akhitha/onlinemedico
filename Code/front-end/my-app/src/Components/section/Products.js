import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Product.css'
import Star from './StarComponent'

export class Products extends Component {

    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
        return (
            <div id="product">
               {
                   products.map(product =>(
                       <div id="card" key={product.id}>
                           <Link to={`/product/${product.id}`}>
                               <img src={product.src} alt=""/>
                           </Link>
                           <div className="content">
                               <h3>
                                   <Link to={`/product/${product.id}`}>{product.title}</Link>
                               </h3>
                               <span>${product.price}</span>
                                <span><Star /></span>
                               <p>{product.description}</p>

                               <button className="productButton" onClick={()=> addCart(product.id)}>Add to cart</button>
                           </div>
                       </div>
                   ))
               }
            </div>
        )
    }
}

export default Products