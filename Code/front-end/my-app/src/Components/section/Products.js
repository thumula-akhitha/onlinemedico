import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Product.css'
import axios from 'axios';
import {FaSearch} from "react-icons/fa"

export class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : ""
        }
    }
    static contextType = DataContext;
    handleChange(event) {
        console.log("entered searh product")
        console.log(event.target.value)
        this.setState({value: event.target.value});
        axios.get(`http://127.0.0.1:3333/onlinemedico/search/${event.target.value}`)
        .then(res => {
          const {addProduct} = this.context;
          console.log("products page");
          console.log(res.data);
          addProduct(res.data);
          // const persons = res.data;
          // this.setState({ persons });
        })

      }
    componentDidMount() {
        axios.get(`http://127.0.0.1:3333/onlinemedico/medicines`)
          .then(res => {
            const {addProduct} = this.context;
            console.log("products page");
            console.log(res.data);
            addProduct(res.data);
            // const persons = res.data;
            // this.setState({ persons });
          })
      }

    render() {
        const {products,addCart} = this.context;
        return (
            <div>
            <div className="input-group product-search">
            <input type="text" class="form-control" placeholder="Search product" value={this.state.value} onChange={(e) => {this.handleChange(e)}} />
            {/* <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                    <i className="fa fa-search"><FaSearch/></i>
                </button>
            </div> */}
            </div>
            <div id="product">
               {
                   products.map(product =>(
                       <div id="card" key={product.id}>
                           <Link to={`${this.props.match.path}/${product.id}`}>
                               <img src={product.src} alt=""/>
                           </Link>
                           <div className="content">
                               <h3>
                                   <Link to={`${this.props.match.path}/${product.id}`}>{product.title}</Link>
                               </h3>
                               <span>${product.price}</span>
                               <p>{product.description}</p>

                               <button className="productButton" onClick={()=> addCart(product.id)}>Add to cart</button>
                           </div>
                       </div>
                   ))
               }
            </div>
            </div>
        )
    }
}

export default Products