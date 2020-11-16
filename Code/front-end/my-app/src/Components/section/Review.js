import React, { Component } from 'react';
import '../css/Review.css';
import { Card } from 'react-bootstrap';
import StarComponent from './StarComponent';
import Profile from '../images/Profile.PNG';
import axios from "axios";

class Review extends Component {
    constructor() {
        super();
        this.review = this.review.bind(this);
        }
        clickHandler(e){
        e.preventDefault();
        alert('Review Submitted succesfully');
        }
        review(e) {
            e.preventDefault();
            let request = {
                headline: document.getElementById("headline").value,
                likeDislike: document.getElementById("likeDislike").value,
                reviewName: document.getElementById("reviewName").value,
            };
            axios
              .post("http://127.0.0.1:3333/onlinemedico/user/userReview", request)
              .then((res) => {
                  console.log(res.data)
              })
              .catch((err) => {
                console.log(err);
              });
            }
    render() {
        return (
            <form >
                <div className='reviewPage'>
                    <p className='reviewTitle'>Create Review</p>
                    <div className='otherFeatures'>
                        <div className='overallReview'>
                            <p className='overall'>Overall rating</p>
                            <StarComponent />
                        </div>
                        <p className='features'>Rate features</p>
                       
                        <div className='qualityReview'>
                            <p className='quality'>Quality</p>
                            <StarComponent />
                        </div>
                        <div className='logisticReview'>
                            <p className='logistic'>Logistic Service</p>
                            <StarComponent />
                        </div>
                        <div className='addlineReview'>
                            <p className='reviewHeadline'>Add headline</p>
                            <input type='text' className='headline' id='headline' placeholder='most important to know' />

                            <p className='reviewText'>Write your Review</p>
                            <textarea className='dislike' id='likeDislike' placeholder='like or dislike about'></textarea>
                            <p className='publicName'>Choose your public Name</p>
                            <img className='profile' src={Profile}></img>
                            <input className='reviewName' id='reviewName' onChange={this.handleInputChange}/>
                            {/* <span className='errors'>{this.state.errors.publicName}</span> */}
                            <p className='nameChange'>You can change this name anytime in the profile</p>
                        </div>
                        <button className='reviewSubmit' onClick={this.clickHandler}>Submit</button>
                    </div>
                </div>
            </form>
        )

    }

}
export default Review;