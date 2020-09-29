import React, { useState ,useContext} from "react";
import "../css/shipping.css";
import NewAddress from "./newAddress";
import SelectAddress from "./selectAddress";
import {DataContext} from '../Context';
import { v1 as uuidv } from "uuid";
import {Link} from 'react-router-dom';
const Shipping = (props) => {
  const dataContext = useContext(DataContext);
  const {addAddress,addresses,deleteAddress,editAddress,handleChangeAddress,handleSelectAddress,addr,id,canedit} = dataContext;
  //const [values, setValues] = useState([]);


  // const [addr, setAddr] = useState({
  //   firstname: "",
  //   mobile: "",
  //   address1: "",
  //   address2: "",
  //   state: "",
  //   zip: ""
  // });
  // const [id, setId] = useState(uuidv());
  // const [canedit, setcanedit] = useState(false);
  const handleSelectAddress1=(sid)=>{
   // console.log(sid);
    handleSelectAddress(sid);

  };
  const handleChange = (e) => {
    handleChangeAddress(e);
    // const value = e.target.value;
    // setAddr({ ...addr, [e.target.name]: value });
  };
  const handleSubmit = (e) => {

    e.preventDefault();
    // const newaddr = {
    //   id: id,
    //   newAddress: addr

    // };
    addAddress();

 //   const updatelist = [...values, newaddr];

  //  setValues(updatelist);
    // setId(uuidv());
    // setAddr({
    //   ...addr,
    //   firstname: "",
    //   mobile: "",
    //   address1: "",
    //   address2: "",
    //   state: "",
    //   zip: ""
    // });
    // setcanedit(false);
  };
  const handleEdit = (eid) => {
    console.log(eid);
    editAddress(eid);

   // const updatedItems = values.filter((item) => item.id !== id);
   // const editingItem = values.find((item) => item.id === id).newAddress;

  //  setValues(updatedItems);
    // setId(id);
    // setAddr({
    //   ...addr,
    //   firstname: editingItem.firstname,
    //   mobile: editingItem.mobile,
    //   address1: editingItem.address1,
    //   address2: editingItem.address2,
    //   state: editingItem.state,
    //   zip: editingItem.zip
  //   });
    // setcanedit(true);
   };

  const handleRemove = (rid) => {
    console.log(rid);
    // const filteredAddr = values.filter((item) => item.id !== id);
    // setValues(filteredAddr);
    deleteAddress(rid);
  };
  // function remove(id) {
  //   // const removed;
  //   var array1 = [...values];
  //   for (var i = 0; i < values.length; i++) {
  //     if (values[i].id === id) {
  //       array1.splice(i, 1);
  //       setValues(array1);
  //       break;
  //     }
  //   }
  // }

  return (
    
    <div className="shipping">
      <hr />
      <div className="heading">Shipping Details</div>
      <hr />
      <div className="main-info">
        <NewAddress
          handleSubmit={handleSubmit}
          addr={addr}
          handleChange={handleChange}
          canedit={canedit}
        />
        <div className="secondpart">
          <div className={addresses.length > 0 ? "address-list" : "address-list1"}>
            <h2>Select Address for delivery</h2>
            {addresses.length > 0 ? (
              addresses.map((v) => (
                <SelectAddress
                  key={v.id}
                  address={v}
                  handleEdit={handleEdit}
                  handleRemove={handleRemove}
                  handleSelectAddress={handleSelectAddress1}
                />
              ))
            ) : (
              <div className="address-list2">
                <span>No Addresses Were Added</span>
              </div>
            )}
          </div>
          <div className="endbuttons">
            <div className="checkout">
            <Link to="/onlinemedico/checkout"><button>Payment</button></Link>
              {/* <button>Checkout</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
