import React from "react";
const CartItem = ({ thing }) => {
  return (
    <tr>
      {/* <td>
        <img src={thing.src} alt="dfbd" />
      </td> */}
      <td>{thing.title}</td>
      <td>{thing.count}</td>
      {/* <td>{thing.quantity}</td> */}
      <td>${thing.price}</td>
      
      <td>${thing.price * thing.count}</td>
    </tr>
  );
};

export default CartItem;
