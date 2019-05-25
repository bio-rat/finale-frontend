import React, { Component } from "react";
import "./SellForm.css";

export default class SellForm extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      city: "",
      district: "",
      ward: "",
      street: "",
      number: ""
    };
  }

  handleTextChange(a, b, c, d, e, f) {
    this.setState(
      {
        address: a ? a : this.state.address,
        city: b ? b : this.state.city,
        district: c ? c : this.state.district,
        ward: d ? d : this.state.ward,
        street: e ? e : this.state.street,
        number: f ? f : this.state.number
      },
      () => console.log(this.state)
    );
  }

  onClickListHouse = () => {
    this.props.onClickListHouse(
      this.state.address,
      this.state.city,
      this.state.district,
      this.state.ward,
      this.state.street,
      this.state.number
    );
    this.props.history.push("/discovery/");
  };

  render() {
    return (
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-12 order-md-1">
            <h4 className="mb-3">Enter address to list your house</h4>
            <form className="needs-validation" noValidate>
              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  onChange={e =>
                    this.handleTextChange(e.target.value, "", "", "", "", "")
                  }
                  required
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="country">City</label>
                  <select
                    className="custom-select d-block w-100"
                    id="country"
                    onChange={e =>
                      this.handleTextChange("", e.target.value, "", "", "", "")
                    }
                    required
                  >
                    <option value="">Choose...</option>
                    <option>Ho Chi Minh</option>
                    {/* <option>Hanoi</option> */}
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="district">District</label>
                  <select
                    className="custom-select d-block w-100"
                    id="district"
                    onChange={e =>
                      this.handleTextChange("", "", e.target.value, "", "", "")
                    }
                    required
                  >
                    <option value="">Choose...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="ward">Ward</label>
                  <select
                    className="custom-select d-block w-100"
                    id="ward"
                    onChange={e =>
                      this.handleTextChange("", "", "", e.target.value, "", "")
                    }
                    required
                  >
                    <option value="">Choose...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="street">Street</label>
                  <input
                    type="text"
                    className="form-control"
                    id="street"
                    placeholder="Main St"
                    onChange={e =>
                      this.handleTextChange("", "", "", "", e.target.value, "")
                    }
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="number">Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="number"
                    placeholder="Main St"
                    onChange={e =>
                      this.handleTextChange("", "", "", "", "", e.target.value)
                    }
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your street number.
                  </div>
                </div>
              </div>

              <button
                className="button button-primary button-shadow"
                onClick={() => this.onClickListHouse()}
              >
                List this house
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
