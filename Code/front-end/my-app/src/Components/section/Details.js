import React, { Component } from 'react';
import {DataContext} from '../Context';
import {Link} from 'react-router-dom';
import '../css/Details.css';


class Details extends Component {
    constructor(props){
        console.log("constuctorrr")
        super(props);
        this.state = {
            product : []
        }
    }
    static contextType = DataContext;
    // state = {
    //     product: []
    // }

    getProduct = () =>{
        console.log("etnereddddddddddddd")
        if(this.props.match.params.id){
            console.log("etnereddddddddddddd")
            const {products} = this.context;
            console.log(products)
           // this.data = products.filter(item => item.id === this.props.match.params.id)
            this.data = products[this.props.match.params.id]
            console.log("dataaa")
            console.log(this.data)
            this.setState({product: this.data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }



    render() {
        const {product} = this.state;
        const {addCart} = this.context;
        return (
            <div>
                {
                    
                        <div className="details" key={product.id}>
                            <img src={product.src} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{product.title}</h2>
                                    <span>${product.price}</span>
                                </div>
                                <p>{product.description}</p>
                               
                                <Link to="/onlinemedico/cart" className="cart" onClick={() => addCart(product.id)}>
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                   
                }
            </div>
        )
    }
}

export default Details