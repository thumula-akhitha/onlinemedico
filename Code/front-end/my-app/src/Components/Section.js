import React, { Component } from 'react';
import Products from './section/Products';
import Details from './section/Details';
import {Route,Redirect} from "react-router-dom";
import Cart from './section/Cart';
import Contact from './section/Contact';
import Shipping from './section/Shipping';
import Upload from './section/ImageFile';
import Star from './section/StarComponent';
import OrderHistory from './section/OrderHistory';
import AdminPage from '../Components/section/Admin/AdminPage';
import Admin from '../Components/section/Admin/Admin';
import Chat from '../Components/section/Chat/Chat';
import Tracking from './section/Tracking ';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Login from '../Components/section/LoginForm';
import SignIn from '../Components/section/SignupForm';
import Forgot from '../Components/section/ForgotPassword';
import Reset from '../Components/section/ResetPasswordPage';
import Checkout from '../Components/section/checkout';
import CheckoutCart from '../Components/section/checkoutcart';
import Logout from '../Components/section/Logout';
import OrderDetails from '../Components/section/OrderDetails'; 
import PastOrder from '../Components/section/PastOrder';

export class Section extends Component {
    render() {
        return (
            <div>	
            <Route path="/onlinemedico" component={Header}  />
            <Route path="/mainadmin" component={Admin}  />  
            
            <Route path="/" exact>
                     <Redirect to="/login" />
            </Route> 
            <section >                                                         
                <Route path="/onlinemedico/product" component={Products} exact />
                <Route path="/onlinemedico/product/:id" component={Details} />
                <Route path="/onlinemedico/cart" component={Cart} />
                <Route path="/onlinemedico/contact" component={Contact}/>
                <Route path="/onlinemedico/upload" component={Upload} exact/>
                <Route path="/onlinemedico/shipping" component={Shipping}/>
                <Route path="/onlinemedico/star" component={Star}/>
                <Route path="/onlinemedico/history" component={OrderHistory}/>
                <Route path="/onlinemedico/admin" component={AdminPage}/>
                <Route path="/onlinemedico/ChatUs" component={Chat}/>
                <Route path="/onlinemedico/track" component={Tracking}/>
                <Route path="/login" component={Login}/>
                <Route path="/onlinemedico/sign" component={SignIn}/>
                <Route path="/onlinemedico/forgot" component={Forgot}/>
                <Route path="/onlinemedico/reset" component={Reset}/>
                <Route path="/onlinemedico/checkout" component={Checkout}/>
                <Route path="/onlinemedico/orderDetails" component={OrderDetails}/>
                <Route path="/onlinemedico/checkcart" component={CheckoutCart}/>
                <Route path="/onlinemedico/pastOrder" component={PastOrder}/>
                <Route path="/onlinemedico/logout" component={Logout}/>
            </section>
            <Route path="/onlinemedico" component={Footer}/> 	
            </div>
        )
    }
}

export default Section