import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import classes from './StarComponent.css';
import { Link } from 'react-router-dom'
import Rating from '@material-ui/lab/Rating';


class StarComponent extends Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
      isSubmit: false,

    };
  }

  clearRating() {
    if (this.state.rating == 0) {
    }
    this.setState({ rating: 0 });
  }

  onStarClick(nextValue, prevValue) {
    this.setState({
      rating: nextValue,
      isSubmit: true
    }
    );
  }

  render() {
    const { rating } = this.state;
    return (
      <div>
        <StarRatingComponent className={classes.starrating} 
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
          emptyStarColor='darkgrey'
        />
        <div className='row'>
          <div className='col'>
            <p>submitting {this.state.rating} stars</p>
          </div>
          {/* <div className='col'>
            <p><a href='#' onClick={this.clearRating.bind(this)}>clear</a></p>
          </div> */}
        </div>

      </div>
    );
  }
}
export default StarComponent;