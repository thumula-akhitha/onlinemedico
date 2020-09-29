import React, { useState } from "react";
import "../css/checkout.css";
import CheckoutCart from "./checkoutcart";
import { v1 as uuidv } from "uuid";
import Card from "./cards";
import Address from "./address";
import NewCard from "./newCard";
import {Link} from 'react-router-dom';
///import {DataContext} from '../Context';
const Checkout = (props) => {
  //const dataContext = useContext(DataContext);
  //const {selectedAddress}=dataContext;
  const [values, setValues] = useState([]);
  const [card, setCard] = useState({
    nameOnCard: "",
    cardNo: "",
    exp: "",
    year: "",
    cvv: ""
  });
  const [id, setId] = useState(uuidv());
  // const things = [
  //   {
  //     id: Math.floor(Math.random() * 100) + 1,
  //     item: "Advil PM",
  //     image: "https://via.placeholder.com/60x60",
  //     price: 200,
  //     quantity: 4
  //   }
  // ];

  const handleChange = (e) => {
    var value = e.target.value;
    setCard({ ...card, [e.target.name]: value });
  };
  const handleDelete = (id) => {
    const filteredCard = values.filter((item) => item.id !== id);
    setValues(filteredCard);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      id: id,
      CardAdded: card
    };

    // console.log(newCard);
    const updatelist = [...values, newCard];
    // console.log(updatelist);
    setValues(updatelist);
    setId(uuidv());
    setCard({
      ...card,
      nameOnCard: "",
      cardNo: "",
      exp: "",
      year: "",
      cvv: ""
    });
  };
  return (
   // const {cart,increase,reduction,removeProduct,total} = this.context;
    <div className="checkout">
      <div className="mainheading">
        <h2>Checkout</h2>
      </div>
      <div className="first-block">
        <Address/>
        <div className="cart">
          <div className="address-heading">
            <hr />
            <span id="heading">
              <i className="fa fa-shopping-cart"></i>Items Selected
            </span>
            <hr />
          </div>
          <CheckoutCart/>
        </div>
        <div className="payments">
          <div className="address-heading">
            <hr />
            <span id="heading">
              <i className="fa fa-money"></i>Payments
            </span>
            <hr />
          </div>
          <div className="cards">
            <div className="cards-info">
              <div>
                <hr />
                Add New Card
                <hr />
              </div>
              <NewCard
                card={card}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </div>
            <div className="allCards">
              <div className="address-heading">
                <hr />
                <span id="heading">
                  <i className="fa fa-credit-card"></i>Select Card
                </span>
                <hr />
              </div>
              {values.length > 0 ? (
                values.map((v) => (
                  <Card key={v.id} card={v} handleDelete={handleDelete} />
                ))
              ) : (
                <div className="address-list2">
                  <span>No Addresses Were Added</span>
                </div>
              )}
            </div>
            <div className="block">
            <Link to="/onlinemedico/track"><button>
            <i className="fa fa-check"></i>Make Payment
              </button></Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
