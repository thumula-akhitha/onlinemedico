import React from 'react';
import './css/Home.css';
import tablets from './images/tablets.jpeg';
import vitamins from './images/vitamins.jpeg';
import cough from './images/skincare.jpeg';
import cart from "./images/cart.PNG";
import logo1 from './images/logo.PNG';
class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="search-bar container-fluid">
                    <div className="row">
                    <div className="col-2">
                    <img className="logo" src={logo1} />   
                    <p className="name">OnlineMedico</p>
                    </div>
                    <div className="col-6">              
                        <input type="search" placeholder="Search" aria-label="Search" />
                        <button className="search-btn" type="submit">Search</button>
                        </div>
                    <div className="col-4">
                    <p className="btn sign-up"><a href="#">MyAccount</a></p>
                    <img className="cart-image" src={cart} alt="cart slide"/>
                    </div>
                    </div>
                </div>
                <header>
                    <nav>
                        <ul>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Upload Presciption</a></li>
                            <li><a href="#">Locations</a></li>
                            <li><a href="#">ContactUs</a></li>

                        </ul>
                    </nav>

                </header>
                <div>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block" src={tablets} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block" src={vitamins} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block" src={cough} alt="Third slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon carousel-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon carousel-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>


        );
    }
}



export default Home;
