import React, {Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import classes from './StarComponent.css';
import { Link } from 'react-router-dom'


class StarComponent extends Component{
    constructor() {
        super();
     
        this.state = {
          rating: 0,
          isSubmit:false,
        };
      }
      
      clearRating(){
          console.log('werfdcfv');
          if(this.state.rating == 0){
          }
          this.setState({rating:0});
      }
      
      onStarClick(nextValue, prevValue) {
        this.setState({rating: nextValue,
            isSubmit:true}
            );
            // const { isSubmit } = this.state;
            // if(isSubmit == true){
            //     this.state.errors.reciept=
            //     <div className='row'>
            //     <div className='col'>
            //     <p>submitted {this.state.rating} stars</p>
            //     </div>
            //     <div className='col'>
            //     <p className={classes.clear}>clear</p>
            //     </div>
            // </div>
            
            
      }
      render(){
        const { rating } = this.state;
          return(
              <div>
            <StarRatingComponent className={classes.starrating}
            name="rate1" 
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
            />
             <div className='row'>
                <div className='col'>
                <p>submitted {this.state.rating} stars</p>
                </div>
                <div className='col'>
                    <p><a href='#' onClick={this.clearRating.bind(this)}>clear</a></p>
                </div>
            </div>

          </div>
          );
         
      }
}
export default StarComponent;