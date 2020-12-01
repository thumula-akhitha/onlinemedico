import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Product.css'
import axios from 'axios';


export class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : "",
            productsData:[],
            tempValue:false
        }
    }
    static contextType = DataContext;
    handleChange(event) {
        const {addProduct} = this.context;
      
        this.setState({value: event.target.value});
        if(event.target.value != ''){
           
        axios.get(`http://127.0.0.1:3333/onlinemedico/search/${event.target.value}`)
        .then(res => {
         
          console.log("products page");
         if(res.data.length>0){
            this.setState({
                tempValue:false
            })
          console.log(res.data);
          addProduct(res.data);
         }
         else {
             this.setState({
                 tempValue:true
             })
         }
          // const persons = res.data;
          // this.setState({ persons });
        })
    }
    else {
        this.setState({
            tempValue:false
        })
        addProduct(this.state.productsData)

    }

      }
    componentDidMount() {
        axios.get(`http://127.0.0.1:3333/onlinemedico/medicines`)
          .then(res => {
            const {addProduct} = this.context;
            console.log("products page");
            console.log(res.data);
            addProduct(res.data);
            this.setState({
                productsData:res.data
            })
            // const persons = res.data;
            // this.setState({ persons });
          })
      }

    render() {
        const {products,addCart} = this.context;
        return (
            <div>
            <div className="input-group product-search">
            <input type="text" className="form-control" placeholder="Search product" value={this.state.value} onChange={(e) => {this.handleChange(e)}} />
           
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
                               <span><p>{product.description}</p></span>
                               <div>
                               <button className="productButton" onClick={()=> addCart(product.id)}>Add to cart</button>
                               </div>         
                           </div>
                       </div>
                   ))
               }
            </div>
            {this.state.tempValue == true ? <p> There are no products with this filter</p> : ''} 
            </div>
        )
    }
}

export default Products