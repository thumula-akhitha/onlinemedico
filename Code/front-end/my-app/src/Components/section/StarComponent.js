import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import '../css/StarComponent.css';
import Close from '../images/close.PNG';
import axios from "axios";



class StarComponent extends Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      isSubmit: true,
    };
  }

  clearRating() {
    if (this.state.rating != 0) {
      this.setState({ rating: 0 });
    }
  }

  onStarClick(nextValue, prevValue) {
    console.log(nextValue, prevValue)
    this.setState({
      rating: nextValue,
      isSubmit: false,
    });

    // make db call
   
    axios
      .post("http://127.0.0.1:3333/onlinemedico/review",{rating:nextValue})
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { rating } = this.state;
    return (
      <div>
        {this.state.rating != 0 ? <div className="float-right">Submitted: {this.state.rating} </div> : null}
        <StarRatingComponent className='starrating'
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
          emptyStarColor='darkgrey'
        />
        <img className='closeImg' src={Close} onClick={this.clearRating.bind(this)}></img>
        <div>

        </div>
      </div>

    );
  }
}
export default StarComponent;