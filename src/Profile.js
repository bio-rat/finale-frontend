import React, { Component } from "react";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

import "./Profile.css";

export default class SellerProfile extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      imgurl: "",
      showModal: false,
      housesList: []
    };
  }

  componentDidMount() {
    this.getUserData();
    console.log("token", this.props.token);
  }

  getUserData() {
    const url = `https://realtorland.herokuapp.com/profile/${this.props.match.params.id}`;
    const token = "Token " + this.props.token;
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState(
          {
            username: data.username,
            imgurl: data.imgurl
          }
          // () => console.log(this.state)
        );
      });
  }

  getHousesList() {
    const url = "https://realtorland.herokuapp.com/houseslist";
    const token = "Token " + this.props.token;

    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          housesList: data["housesList"]
        });
      });
  }

  handleShowModal = () => {
    this.setState({ showModal: true });
    this.getHousesList();
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleChooseAgent = house_id => {
    const url = "https://realtorland.herokuapp.com/chooseAgent";
    const token = "Token " + this.props.token;

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        house_id: house_id,
        broker_id: this.props.match.params.id
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      });
    // remove img url
    this.setState({
      uploadedFileCloudinaryUrl: "",
      uploadedFile: null
    });

    // go to home page
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="text-center">
              <h2>{this.state.username}</h2>
              <p>
                <i>Special agent</i>
              </p>

              <img
                src={this.state.imgurl}
                className="profile-img rounded-circle"
                height="200"
                width="200"
                alt="hhelll"
              />
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  size="1x"
                  style={{ color: "#FF4D79", cursor: "pointer" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="1x"
                  style={{ color: "#FF4D79", cursor: "pointer" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="1x"
                  style={{ color: "#FF4D79", cursor: "pointer" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="1x"
                  style={{ color: "#FF4D79", cursor: "pointer" }}
                />
                <FontAwesomeIcon
                  icon={faStarHalf}
                  size="1x"
                  style={{ color: "#FF4D79", cursor: "pointer" }}
                />
              </div>
              <div>
                <i className="text-primary">369 Reviews</i>
              </div>
              {/* <h6>Upload a different photo...</h6>
              <input
                type="file"
                className="text-center center-block file-upload"
              /> */}
            </div>
            <hr />
            <br />

            <div className="">
              <h3>About Us</h3>
              <img
                src="https://www.fortunebuilders.com/wp-content/uploads/2017/08/real-estate-agent-2-800x533.jpg"
                className="img-fluid"
                alt=""
              />
              <h6>Broker - Certified Expert Advisor (12 years experience)</h6>
              <i>
                Specialties: Buyer's Agent, Listing Agent, Relocation, Staging
              </i>
              <p>
                The Wall St Journal ranked The Brett Jennings Team as one of the
                Top Real Estate Teams in the U.S.A. for one reason…Our systems
                flat out work! We are also 5 star rated on Zillow, Trulia &
                Yelp. Why do clients love us?.... (See More) Our Buyers
                Advantage Program has helped hundreds of Buyer clients purchase
                their dream home at a great price and has cumulatively saved our
                clients over $1,000,000 off of the market price. For details on
                our Buyers Advantage Program and actual client results see video
                linked here
              </p>
              <h6>HONORS & AWARDS</h6>
              <h6>TOP 1000 AGENTS IN USA </h6>
              <p>
                Wall Street Journal - RIS Media - March 2013 In 2013, the Wall
                Street Journal and RIS Media recognized Brett Jennings as being
                in the top 1000 real estate agents in the USA. With over one
                million agents in the country, this prestigious award places
                Brett in the top 1/10th of the top 1% among his peers.
              </p>
              <h6>TOP 500 REAL ESTATE MARKETERS IN USA </h6>
              <p>
                National Association of Expert Advisors - September 2014 The
                National Association of Expert Advisors, an association
                dedicated to high performing, high achieving Real Estate
                Professionals, recognized Brett Jennings as one of the Top 500
                most innovative marketing experts in the real estate industry.
              </p>
              <h6>SPECIALTIES</h6>
              <p>
                Buyers Agent Listing Agent Luxury Marketing Expert Certified
                Negotiation Expert Investment Property Specialist Founder - San
                Jose Real Estate Investor Grou
              </p>
            </div>

            <div>
              <h3>Our Past Sales</h3>
              <table style={{ width: "100%" }}>
                <tr>
                  <th>PROPERTY ADDRESS</th>
                  <th>REPRESENTED</th>
                  <th>SOLD DATE</th>
                  <th>PRICE</th>
                </tr>
                <tr>
                  <td>
                    <div className="row">
                      <div className="col">
                        <img
                          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=50&w=70"
                          alt=""
                        />
                      </div>
                      <div className="col">
                        <span className="text-primary">
                          15412 Charmeran Ave San Jose, CA 95124
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>Seller</td>
                  <td>05/10/2019</td>
                  <td>$2,250,000</td>
                </tr>

                <tr>
                  <td>
                    <div className="row">
                      <div className="col">
                        <img
                          src="https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=50&w=70"
                          alt=""
                        />
                      </div>
                      <div className="col">
                        <span className="text-primary">
                          1644 Troon Dr San Jose, CA 95116
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>Buyer</td>
                  <td>05/01/2019</td>
                  <td>$839,000</td>
                </tr>
              </table>
            </div>

            <div className="card mt-4">
              <div className="card-header">Social Media</div>
              <div className="card-body">
                <i className="fa fa-facebook fa-2x" />
                <i className="fa fa-github fa-2x" />{" "}
                <i className="fa fa-twitter fa-2x" />{" "}
                <i className="fa fa-pinterest fa-2x" />{" "}
                <i className="fa fa-google-plus fa-2x" />
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane active" id="home">
                <hr />
                <form
                  className="form"
                  action="##"
                  method="post"
                  id="registrationForm"
                >
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="first_name">
                        <h4>Contact us: </h4>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        id="first_name"
                        placeholder="name"
                        title="enter your first name if any."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      {/* <label htmlFor="last_name">
                        <h4>Last name</h4>
                      </label> */}
                      <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        id="last_name"
                        placeholder="email"
                        title="enter your last name if any."
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-xs-6">
                      {/* <label htmlFor="phone">
                        <h4>Phone</h4>
                      </label> */}
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        id="phone"
                        placeholder="phone number"
                        title="enter your phone number if any."
                      />
                    </div>
                  </div>

                  {/* <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="mobile">
                        <h4>Mobile</h4>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="mobile"
                        id="mobile"
                        placeholder="enter mobile number"
                        title="enter your mobile number if any."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="email">
                        <h4>Email</h4>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="you@email.com"
                        title="enter your email."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="email">
                        <h4>Location</h4>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="location"
                        placeholder="somewhere"
                        title="enter a location"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="password">
                        <h4>Password</h4>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder="password"
                        title="enter your password."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="password2">
                        <h4>Verify</h4>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password2"
                        id="password2"
                        placeholder="password2"
                        title="enter your password2."
                      />
                    </div>
                  </div> */}
                  <div className="form-group">
                    <div className="col-xs-12">
                      <br />
                      <button
                        className="button button-primary button-shadow"
                        type="submit"
                      >
                        <i className="glyphicon glyphicon-ok-sign" /> Contact us
                      </button>
                      {/* <button
                        className="ml-3 button button-primary button-shadow"
                        type="reset"
                      >
                        <i className="glyphicon glyphicon-repeat" /> Reset
                      </button> */}
                    </div>
                  </div>
                </form>

                <hr />
              </div>
              <div className="tab-pane" id="messages">
                {/* tab content here */}
                <h1>heyyyyyyyyyy</h1>
                <h1>deooo ra vcl</h1>
              </div>
              <div className="tab-pane" id="settings">
                {/* tab contetn 2 */}
              </div>
            </div>
            {/* end herer */}
          </div>
        </div>

        {/* Choose Agents modal/ only show when not user profile */}
        {this.props.user_id !== this.props.match.params.id && (
          <div className="card-footer text-center">
            <button
              className="button button-primary button-shadow"
              onClick={this.handleShowModal}
            >
              Connect with this agent
            </button>
            <div
              className="modal fade bd-example-modal-lg"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <ReactModal
                    ariaHideApp={false}
                    isOpen={this.state.showModal}
                    onRequestClose={this.handleCloseModal}
                    style={{
                      overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                        // background:
                        //   "linear-gradient(65deg, #FF4D79 0, #FF809F 100%)"
                      },
                      content: {
                        position: "absolute",
                        top: "40px",
                        left: "120px",
                        right: "120px",
                        bottom: "40px",
                        border: "",
                        background:
                          "linear-gradient(65deg, #FF4D79 0, #FF809F 100%)",
                        overflow: "scroll",
                        WebkitOverflowScrolling: "touch",
                        borderRadius: "0",
                        outline: "none",
                        padding: "0"
                        // backgroundColor: "black"
                      }
                    }}
                  >
                    <div className="modal-style">
                      {/* <h1>Which house??</h1> */}
                      <div className="row">
                        {this.state.housesList.map(x => (
                          <div key={x.house_id} className="col-md-3">
                            <div className="card card-style">
                              <div className="card-body">
                                <p className="pink-text">{x.address}</p>
                                <img
                                  src="https://images.pexels.com/photos/2287310/pexels-photo-2287310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                  alt=""
                                  width={70}
                                  height={70}
                                  className="house-img"
                                />
                              </div>
                              <div className="card-footer">
                                {x.is_chosen ? (
                                  <span className="text-danger">CHOSEN</span>
                                ) : (
                                  <button
                                    className="button button-primary button-shadow"
                                    onClick={() =>
                                      this.handleChooseAgent(x.house_id)
                                    }
                                  >
                                    Choose this house
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ReactModal>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
