import React from "react";
import credit from "../images/credit.PNG";
import { FaCreditCard, FaPlus } from "react-icons/fa";
import "../css/newcard.css";

const NewCard = ({ card, handleChange, handleSubmit }) => {
  
  return (

    <div className="credit-card-box">
      <div class="panel-heading display-table">
        <div className="display-tr">
          <h3 className="panel-title display-td">Payment Details</h3>
          <div className="display-td">
            <img className="img-responsive pull-right" src={credit} />
          </div>
        </div>
      </div>
      <div className="panel-body">
        <form onSubmit={handleSubmit} role="form">
          <div className="row">
            <div className="col-xs-12">
              <div className="card-form-group">
                <label for="cardNumber" className="panel-label">
                  CARD NAME
                </label>
                <div id="input-group">
                  <input
                    className="panel-form-control cardnum"
                    type="text"
                    name="nameOnCard"
                    placeholder="Name On card"
                    value={card.nameOnCard}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="card-form-group">
                <label for="cardNumber" className="panel-label">
                  CARD NUMBER
                </label>
                <div id="input-group">
                  <input
                    className="panel-form-control cardnum"
                    type="text"
                    name="cardNo"
                    itemType="number"
                    maxLength="16"
                    minLength="16"
                    placeholder="Valid Card Number"
                    value={card.cardNo}
                    onChange={handleChange}
                    required
                  />
                  <span className="input-group-addon">
                    <i>
                      <FaCreditCard />
                    </i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-xs-12">
              <div className="card-form-group">
                <label className="panel-label" for="cardExpiry">
                  <span className="hidden-xs">EXPIRATION DATE</span>
                </label>
                <input
                  type="number"
                  name="exp"
                  className="panel-form-control"
                  placeholder="Month"
                  min="1"
                  max="12"
                  value={card.exp}
                  required
                  onChange={handleChange}
                />
                <span>/</span>
                <input
                  type="number"
                  name="year"
                  className="panel-form-control"
                  placeholder="Year"
                  min="2021"
                  max="2030"
                  value={card.year}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-xs-4 col-md-4 pull-right">
              <div className="card-form-group">
                <label className="panel-label" for="cardCVC">
                  CV CODE
                </label>
                <input
                  className="panel-form-control"
                   type="number"
                   name="cvv"
                   value={card.cvv}
                   placeholder="CVV"
                   min="100"
                   max="9999"                  
                   onChange={handleChange}
                   required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <button
                id="btn-block"
                className="btn btn-lg"
                type="submit"
                onClick={this.addshipping}
              >
                Add Card
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCard;
