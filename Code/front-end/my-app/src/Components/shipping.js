import React, { useState } from "react";
import "../css/shipping.css";
import NewAddress from "./newAddress";
import SelectAddress from "./selectAddress";

const Shipping = (props) => {
  const [values, setValues] = useState([
    {
      id: Math.floor(Math.random() * 10) + 1,
      name: "Mike",
      phone: "8179523137",
      address1: "xyz",
      address2: "abc",
      State: "hyd",
      zip: "50037"
    },
    {
      id: Math.floor(Math.random() * 10) + 1,
      name: "Kavya",
      phone: "123456789",
      address1: "usa",
      address2: "college",
      State: "MS",
      zip: "8978878"
    },
    {
      id: Math.floor(Math.random() * 10) + 1,
      name: "bsdfbdsj,f",
      phone: "123456789",
      address1: "usa",
      address2: "college",
      State: "MS",
      zip: "56756756"
    }
  ]);
  const [editaddr, seteditaddr] = useState({});
  const [canedit, setcanedit] = useState(false);
  function submitValue(newaddr) {
    // setcanEmpty(true);
    if (newaddr != null) {
      console.log(newaddr);
      const updatedValues = [...values, newaddr];
      console.log(values);
      setValues(updatedValues);
      // setcanEmpty(false);
    }
  }
  function remove(id) {
    // const removed;
    var array1 = [...values];
    for (var i = 0; i < values.length; i++) {
      if (values[i].id === id) {
        array1.splice(i, 1);
        setValues(array1);
        break;
      }
    }
  }
  function editAddress(id) {
    const edititem = values.filter((item) => item.id === id);
    seteditaddr(edititem);
    setcanedit(true);
    //editing(edit)
    // console.log(edititem);
  }
  return (
    <div className="shipping">
      <hr />
      <div className="heading">Shipping Details</div>
      <hr />
      <div className="main-info">
        <NewAddress
          submitValue={submitValue}
          editingitem={editaddr}
          canedit={canedit}
        />
        <div className="secondpart">
          <div className="address-list">
            <h2>Select Address for delivery</h2>
            {values.map((v, i = 0) => (
              <SelectAddress
                key={i++}
                address={v}
                remove={remove}
                editAddress={editAddress}
              />
            ))}
          </div>
          <div className="endbuttons">
            <div className="checkout">
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
