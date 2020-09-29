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
              <input type="text"  name="firstname"
                value={addr.firstname}
                onChange={handleChange}
                required class="form-control" id="custext"/>
            </div>
          <div className="cusdiv">
            <label id="cuslabel">Mobile:</label>
            <input
              type="tel"
              name="mobile"
              minLength="10"
              maxLength="10"
              value={addr.mobile}
              onChange={handleChange}
              required
              class="form-control"
              id="custext"/>
          </div >
          <div className="cusdiv">
            <label id="cuslabel">Address 1:</label>
            <input id="custext"
              type="text"
              name="address1"
              value={addr.address1}
              onChange={handleChange}
              class="form-control"
              required
            />
          </div>
          <div className="cusdiv">
            <label id="cuslabel">Address 2:</label>
            <input
              type="text"
              name="address2"
              value={addr.address2}
              onChange={handleChange}
              required
              class="form-control"
              id="custext"
            />
          </div>
          <div className="place">
            <div className="cusdiv">
              <label id="cuslabel">State:</label>
              <input
                type="text"
                name="state"
                value={addr.state}
                onChange={handleChange}
                required
                class="form-control"
                id="custext"
              />
            </div>
            <div className="cusdiv">
              <label id="cuslabel">Zip:</label>
              <input
                type="text"
                name="zip"
                minLength="5"
                maxLength="5"
                value={addr.zip}
                onChange={handleChange}
                required
                class="form-control"
                id="custext"
              />
            </div>
          </div>
          <div className="cusdiv" className="primary">
            <input
              type="checkbox"
              id="default"
              name="default"
              value="default"
              id="cuscheckout" class="form-control"
            />
            <label id="cusdefault" for="default">default</label>
          </div>
          <div className="submit-button">
            <button type="button" class="btn btn-info">
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
