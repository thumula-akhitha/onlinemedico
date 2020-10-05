import React, { useState ,useContext} from "react";
import "../css/shipping.css";
import NewAddress from "./newAddress";
import SelectAddress from "./selectAddress";
import {DataContext} from '../Context';
import {Link} from 'react-router-dom';
const Shipping = (props) => {
  const dataContext = useContext(DataContext);
  const {addAddress,addresses,deleteAddress,editAddress,handleChangeAddress,handleSelectAddress,addr,id,canedit} = dataContext;
  const handleSelectAddress1=(sid)=>{
    handleSelectAddress(sid);

  };
  const handleChange = (e) => {
    handleChangeAddress(e);
    };
  const handleSubmit = (e) => {

    e.preventDefault();
    addAddress();
  };
  const handleEdit = (eid) => {
    console.log(eid);
    editAddress(eid);
   };

  const handleRemove = (rid) => {
    console.log(rid);
    deleteAddress(rid);
  };
  

  return (    
    <div className="shipping">
      <div className="heading">Shipping Details</div>
      <div className="main-info">
        <NewAddress
          handleSubmit={handleSubmit}
          addr={addr}
          handleChange={handleChange}
          canedit={canedit}
        />
        <div className="secondpart">
          <div className={addresses.length > 0 ? "address-list" : "address-list1"}>
            <h4 style={{color:"crimson"}}>Select Address for delivery</h4>
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
            <Link to="/onlinemedico/checkout">
            <button type="button" class="btn btn-outline-success">
             Payment</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
