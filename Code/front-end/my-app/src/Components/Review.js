import React, {Component} from 'react';
import classes from './Review.css';
import { Card } from 'react-bootstrap';
import StarComponent from './StarComponent';
import Profile from './images/Profile.PNG';



class Review extends Component{
    constructor() {
        super();
    }
    
    
    render(){
        return(
            <div className={classes.reviewPage}>
               <p className={classes.reviewTitle}>Create Review</p>
              <div className={classes.imageCard}>
              <div className='row'>
                <div className='col-5'>
            {this.props.orderedArray.map(
              orderimage=>{return ( <img src={orderimage.image} width='131px' height='100px'/>)}
            )}
            </div>
            <div className='col-7'>
            {this.props.orderedArray.map( orderedItem => `${orderedItem.title}` )}
            </div>
            </div>
            </div>
            <div className={classes.otherFeatures}>
            <p className={classes.overall}>Overall rating</p>
            {/* {this.props.onStarClick} */}
            {/* {this.state.errors.reciept == true && 
                <span className='error'>{this.state.errors.reciept}</span>}
            <span></span> */}
            <StarComponent/>
            <p className={classes.features}>Rate features</p>    
            <p className={classes.quality}>Quality</p>
            <StarComponent/>
            <p className={classes.logistic}>Logistic Service</p>
            <StarComponent/>
            <p className={classes.reviewHeadline}>Add headline</p>
            <input type='text' placeholder='what is most important to know'/>
            <p className={classes.reviewText}>Write your Review</p>
            <textarea placeholder='like or dislike about'></textarea>
            <p className={classes.publicName}>Choose your public Name</p>
            <img className={classes.profile} src={Profile}></img>
            <input className={classes.reviewName}/>
            <p className={classes.nameChange}>You can change this name anytime in the profile</p>
            {/* <input type='button' className={classes.reviewSubmit} value='Submit'/> */}
            <button className={classes.reviewSubmit}>Submit</button>


            </div>
            </div>
            )
           
    }
   
}
export default Review;