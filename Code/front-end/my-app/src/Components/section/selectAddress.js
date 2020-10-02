import React from "react";

const SelectAddress = (props) => {
  const { address, handleEdit, handleRemove ,handleSelectAddress} = props;
  return (
    <div className="address-card">
      <div className="radio-class">
        <input 
        type="radio" 
        name="select-address" 
        onChange={(()=>handleSelectAddress(address.id))}
        />
        
      </div>
      <div className="address-info">
        <div id="addressess">
          <p id="address-p">
            {address.newAddress.firstname},{address.newAddress.mobile},
          </p>
          <p id="address-p">
            {address.newAddress.address1},{address.newAddress.address2}
          </p>
          <p id="address-p">
            {address.newAddress.State},{address.newAddress.zip}
          </p>
        </div>
        <div className="edit-row">
          <span onClick={() => handleEdit(address.id)}>Edit</span>

          <span onClick={() => handleRemove(address.id)}>Remove</span>
        </div>
      </div>
    </div>
  );
};

export default SelectAddress;
