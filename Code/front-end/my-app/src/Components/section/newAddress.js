import React from "react";
import axios from 'axios';
class NewAddress extends React.Component {
  constructor() {
    super();
     this.cusname=React.createRef();
     this.cusmobile=React.createRef();
    this.cusaddress1=React.createRef();
    this.cusaddress2=React.createRef(); 
    this.cusstate=React.createRef(); 
    this.cuszip=React.createRef(); 
}
   addshipping=()=>{
      const addshippingaddress={
        customername: this.cusname.current.value,
        mobile: this.cusmobile.current.value,
        address1: this.cusaddress1.current.value,
        address2: this.cusaddress2.current.value,
        state: this.cusstate.current.value,
        zip: this.cuszip.current.value
      }
    axios.defaults.headers.post['Content-Type']='application/json';
    axios.post(`http://127.0.0.1:3333/onlinemedico/shippingaddress`,addshippingaddress)
    .then(res=>{
    console.log(res);
    console.log(res.data);
}) 
  }
  render() {
    const { addr, handleChange, handleSubmit, canedit } = this.props;
    return (
      <div className="contact-form">
        <h4 className="text">New Shipping Address</h4>
        <div id="addressdiv">
          <form onSubmit={handleSubmit}>
            <div className="names form-group">
              <div className="cusdiv">
                <label id="cuslabel">Customer Name:</label>
                <input
                  ref={this.cusname}
                  id="custext"
                  className="form-control"
                  type="text"
                  name="firstname"
                  value={addr.firstname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="cusdiv">
                <label id="cuslabel">Mobile:</label>
                <input
                  ref={this.cusmobile}
                  className="form-control"
                  id="custext"
                  type="tel"
                  name="mobile"
                  minLength="10"
                  maxLength="10"
                  value={addr.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="cusdiv">
                <label id="cuslabel">Address 1:</label>
                <input
                  ref={this.cusaddress1}
                  className="form-control"
                  id="custext"
                  type="text"
                  name="address1"
                  value={addr.address1}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="cusdiv">
                <label id="cuslabel">Address 2:</label>
                <input
                  ref={this.cusaddress2}
                  className="form-control"
                  id="custext"
                  type="text"
                  name="address2"
                  value={addr.address2}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="place cusdiv">
                <div className="cusdiv">
                  <label id="cuslabel">State:</label>
                  <input
                    ref={this.cusstate}
                    className="form-control"
                    id="custext"
                    type="text"
                    name="state"
                    value={addr.state}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="cusdiv">
                  <label id="cuslabel">Zip:</label>
                  <input
                    ref={this.cuszip}
                    className="form-control"
                    id="custext"
                    type="text"
                    name="zip"
                    minLength="5"
                    maxLength="5"
                    value={addr.zip}
                    onChange={handleChange}
                    required
                  />
                </div>
                </div>              
                <div className="primary cusdiv">
                <input
                  type="checkbox"
                  id="default"
                  id="cuscheckout"
                  className="form-control"
                  name="default"
                  value="default"
                />
                <label id="cusdefault" for="default">
                  Default
                </label>
              </div>
              <div className="submit-button">
                <button type="submit" class="btn btn-info" onClick={this.addshipping}>
                  {canedit ? "Update Address" : "Add Address"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewAddress;
