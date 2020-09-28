import React from "react";

const NewCard = ({ card, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
       
      <div>
        <input
          type="text"
         // value="/^[a-zA-Z]{1,}$/"
          
          name="nameOnCard"
          placeholder="Name On card"
          value={card.nameOnCard}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="cardNo"
          itemType="number"
          maxLength="16"
          minLength="16"
          placeholder="1111-2222-3333-4444"
          value={card.cardNo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="number"
          name="exp"
          placeholder="Month"
          min="1"
          max="12"
          value={card.exp}
          required
          onChange={handleChange}
        />
        /
        <input
          type="number"
          name="year"
          placeholder="Year"
          min="2021"
          max="2030"
          value={card.year}
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="number"
          name="cvv"
          value={card.cvv}
          placeholder="123"
          min="100"
          max="9999"
         
          onChange={handleChange}
          required
        />
      </div>
      <div className="addCardButton">
        <button>
          <i className="fa fa-plus"></i>Add
        </button>
      </div>
    </form>
  );
};

export default NewCard;
