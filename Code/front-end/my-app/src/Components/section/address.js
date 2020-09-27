import React from "react";
import {DataContext} from '../Context';

class Address extends React.Component{
  static contextType = DataContext;

  render(){
    const {selectedAddress}=this.context;
    //console.log(selectedAddress);
  return (
    <div className="address-card">
      <div className="address-heading">
        <hr />
        <span id="heading">
          <i className="fa fa-truck"></i>Shipping Address
        </span>
        <hr />
      </div>
      <div>
        <div>
          <p className="username">{selectedAddress.newAddress.firstname}</p>
        </div>
        <div>
          <p>{selectedAddress.newAddress.address1}</p>
        </div>
        <div>
          <p>{selectedAddress.newAddress.address2}</p>
        </div>
        <div>
          <p>{selectedAddress.newAddress.mobile}</p>
        </div>
        <div>
        <p>{selectedAddress.newAddress.state},{selectedAddress.newAddress.zip}</p>
        
        </div>
      </div>
    </div>
  );
  }
};

export default Address;
