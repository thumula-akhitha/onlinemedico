import React, { Component } from 'react';
import Products from './section/Products';
import Details from './section/Details';
import {Route} from "react-router-dom";
import Cart from './section/Cart';

import Contact from './section/Contact';
import Shipping from './section/Shipping';
import Upload from './section/SelectDropDown';
import Star from './section/StarComponent';
import OrderHistory from './section/OrderHistory';
import Admin from './section/Admin';
import Tracking from './section/Tracking ';
import Checkout from './section/checkout';
// import Tracking from './section/Tracking';

export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={Products} exact />
                <Route path="/product" component={Products} exact />
                <Route path="/product/:id" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/contact" component={Contact}/>
                <Route path="/upload" component={Upload} exact/>
                <Route path="/shipping" component={Shipping}/>
                <Route path="/star" component={Star}/>
                <Route path="/history" component={OrderHistory}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/track" component={Tracking}/>



            </section>
        )
    }
}

export default Section