/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="mb-1 navbar navbar-expand-lg navbar-dark secondary-color lighten-1 nav-style">
          <span className="navbar-brand">RealtorLand</span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-555"
            aria-controls="navbarSupportedContent-555"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent-555"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link
                  to={{
                    pathname: "/"
                  }}
                >
                  <span className="nav-link">Home</span>
                </Link>
              </li>
              {!this.props.is_broker && (
                <>
                  <li className="nav-item active">
                    <Link
                      to={{
                        pathname: "/sell/"
                      }}
                    >
                      <span className="nav-link">Sell</span>
                    </Link>
                  </li>

                  <li className="nav-item active">
                    <Link
                      to={{
                        pathname: "/discovery/"
                      }}
                    >
                      <span className="nav-link text-link">Agent finder</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <ul className="navbar-nav nav-flex-icons">
              {this.props.username && (
                <li
                  onClick={() => {
                    console.log("fetch contact list again");
                    this.props.handleFetchContactList();
                  }}
                  className="nav-item avatar dropdown ml-auto"
                >
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink-55"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon
                      icon={faComment}
                      size="1x"
                      style={{ color: "white", cursor: "pointer" }}
                    />
                  </a>

                  <div
                    className="dropdown-menu dropdown-menu-right dropdown-secondary row"
                    aria-labelledby="navbarDropdownMenuLink-55"
                  >
                    {this.props.contactList.map(x => (
                      <span key={x.room_id}>
                        <Link
                          to={{
                            pathname: `/messages/${x.room_id}`,
                            state: {
                              user2img: x.imgurl
                            }
                          }}
                          className="dropdown-item message-nav text-link"
                        >
                          <span className="col-1">
                            <b>{x.username} </b>

                            <img
                              src={x.imgurl}
                              className="fit-cover boder-shadow"
                              alt="avatar image"
                              height="42"
                              width="42"
                            />
                          </span>

                          <span className="col-4 text-start">
                            <span>{x.address}</span>
                          </span>
                        </Link>
                        {/* <div className="dropdown-divider" /> */}
                      </span>
                    ))}
                  </div>
                </li>
              )}

              {this.props.username ? (
                <li className="nav-item avatar dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink-55"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src={this.props.imgurl}
                      className="fit-cover boder-shadow"
                      alt="avatar image"
                      // height="42"
                      // width="42"
                    />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right dropdown-secondary"
                    aria-labelledby="navbarDropdownMenuLink-55"
                  >
                    <Link
                      to={{
                        pathname: `/profile/${this.props.user_id}`
                      }}
                      className="dropdown-item text-link"
                    >
                      Account
                    </Link>
                    <div className="dropdown-divider" />
                    <span className="dropdown-item">Create new: </span>
                    <a className="dropdown-item pl-5" href="">
                      <small>New post</small>
                    </a>
                    <a className="dropdown-item pl-5" href="">
                      <small>New topic</small>
                    </a>
                    <a
                      className="dropdown-item pointy-cursor"
                      style={{ color: "#FF4D79" }}
                      onClick={() => this.props.onClickLogout()}
                    >
                      Log Out
                    </a>
                  </div>
                </li>
              ) : (
                <>
                  <Link
                    to={{
                      pathname: "/login/"
                    }}
                    className="nav-link text-link"
                  >
                    <span style={{ color: "white" }}>Login</span>
                  </Link>
                  <Link
                    to={{
                      pathname: "/signup/"
                    }}
                    className="nav-link text-link"
                  >
                    <span style={{ color: "white" }}>Signup</span>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
