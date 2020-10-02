import React from "react";
class NewAddress extends React.Component {
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
                <button type="submit" class="btn btn-info">
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