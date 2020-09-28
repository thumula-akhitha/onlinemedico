import React from "react";

const Card = ({ card, handleDelete }) => {
  return (
    <div className="card-view">
      <div className="cardSelect">
        <input type="radio" name="card" />
      </div>
      <div className="cardDetails">
        <div>
          <p>Name: {card.CardAdded.nameOnCard}</p>
        </div>
        <div>
          <p>
            Card Number:{" "}
            {card.CardAdded.cardNo.substring(0, 2) +
              card.CardAdded.cardNo.substring(2, 12).replace(/[0-9]/g, "*") +
              card.CardAdded.cardNo.substring(12, card.CardAdded.cardNo.length)}
          </p>
        </div>
        <div>
          <p>
            Exp: {card.CardAdded.exp}/{card.CardAdded.year}
          </p>
        </div>
        <div>
          <p>
            CVV:
            {card.CardAdded.cvv.substring(0, 1) +
              card.CardAdded.cvv.substring(1, 3).replace(/[0-9]/g, "*")}
          </p>
        </div>
      </div>
      <div className="cardSelect">
        <button onClick={() => handleDelete(card.id)}>x</button>
      </div>
    </div>
  );
};

export default Card;
