import React from "react";

const SelectAddress = (props) => {
  const { address, remove, editAddress } = props;
  return (
    <div className="address-card">
      <div className="radio-class">
        <input type="radio" name="select-address" />
      </div>
      <div className="address-info">
        <div>
          <p>
            {address.name},{address.phone},
          </p>
          <p>
            {address.address1},{address.address2}
          </p>
          <p>
            {address.State},{address.zip}
          </p>
        </div>
        <div className="edit-row">
          <span onClick={(e) => editAddress(address.id)}>Edit</span>

          <span onClick={(e) => remove(address.id)}>Remove</span>
        </div>
      </div>
    </div>
  );
};

export default SelectAddress;
