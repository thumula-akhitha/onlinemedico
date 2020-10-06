import React, { useState } from 'react';
import Slider from 'react-animated-slider';
import Carousel from 'react-bootstrap/Carousel';
import '../css/Home.css';
import Contact from './Contact';
import Products from './Products';
const Home = (props) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const firstImage = require('../images/offer.jpg')
    const secondImage = require('../images/trust.jpg')
    const thirdImage = require('../images/skincare.jpg')
    const walmartLogo=require('../images/walmart.png')
    const walgreensLogo=require('../images/walgreens.png')
    const targetLogo=require('../images/Target.jpg')
    const minuteLogo=require('../images/minute.jfif')
    const hyveeLogo=require('../images/Hyvee.png')
    const cvsLogo=require('../images/cvs.jpg')
    const quickReponse=require('../images/quickResponse.JPG')
    const fastDelivery=require('../images/fastDelivery.JPG')
    const careImg=require('../images/care.JPG')
    const easyTrackImg=require('../images/easyTrack.JPG')

    const saleStyle = {
        fontWeight: 'bolder',
        fontFamily: 'serif',
        fontSize: '3em'
    }
    const saleTextSTyle = {
        fontFamily: 'serif',
        color: 'black',
        fontSize: '22px',
        fontWeight: 'bold'
    }
    const[showProducts,setShowProducts]=useState(false);

    
    if(showProducts==true){
        return <Products/>
        
     //   console.log(showProducts);
    }
    
    return (
        <div>
        <Carousel className='home' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={firstImage}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className='carousal-caption'>
                        <h3 className='sale' style={saleStyle} >SALE</h3>
                        <p style={saleTextSTyle}>20% Discount on all products</p>
                        <a className="btn btn-primary" id='shopbtn' href="#" role="button" onClick={()=>setShowProducts(true)}>See products</a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <button className='shopbtn'  onClick={()=>setShowProducts(true)}>See products</button> */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={secondImage}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <div className='babyCare'>
                        <h3 className='baby'>Baby care</h3>
                        <p className='babyCareDesc'>Natures nourishing care for baby's delicate skin</p>
                        <a className="btn btn-primary" id='BabyCareBtn' href="#" role="button" onClick={()=>setShowProducts(true)}>Shop Now</a>
                    </div>
                </Carousel.Caption>
               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={thirdImage}
                    alt="Third slide"
                />
                <Carousel.Caption className='skincare'>
                    <h3>Hurry Up</h3>
                    <p>
                        Flat 5% off on skin care products</p>
                        <a className="btn btn-primary" id='viewMore' href="#" role="button" onClick={()=>setShowProducts(true)}>View products</a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
         <div className='store1'>
         <p className='accept'>Online medico is accepted at more than 500 pharmacies, including</p>
         <div className="row storesLogo">
             <div className='col'>
             <img className='walmrt'src={walmartLogo} ></img>
             </div>
             <div className='col'>
             <img className='walgreens' src={walgreensLogo}></img>
             </div>
              <div className='col'>
             <img className='cvs'src={cvsLogo}></img>
             </div>
              <div className='col'>
             <img className='minute' src={minuteLogo}></img>
             </div>
              <div className='col'>
              <img className='hyvee'src={hyveeLogo}></img>
             </div>  
         </div>
        
         <div className='row'>
        <div className='col servicesPara'>
        <h1 className='serviceHeader'>Services we offer</h1>
         <p className='servicesDesc'>Online Medico has one of the largest selections of medical products and equipemnts.
         We treat each patient as an individual and work hard to help them meet their healthcare goals.</p>
         </div>
         <div className='col service'>
             <div className='row'>
             <div className='col'>
            <p className='quickDesc'>Quick Response</p>
             <img className='quickImg' src={quickReponse}/>
             <p></p>
             </div>
             <div className='col'>
                 <p className='deliveryDesc'>Express Shipping</p>
                 <img className='Delivery' src={fastDelivery}/>
            </div>
             </div>
             <div className='row'>
             <div className='col'>
                 <p className='careDesc'>Superior care</p>
             <img className='careImage' src={careImg}/>
             </div>
             <div className='col'>
                 <p className='trackDesc'>Easy Tracking</p>
                 <img className='TrackImg' src={easyTrackImg}/>
            </div>
             </div>

         </div>
         
         </div>
     </div>
       
     </div>
    );
}
export default Home;