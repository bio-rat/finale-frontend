/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark secondary-color lighten-1 nav-style">
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
                    pathname: "/home/"
                  }}
                >
                  <span className="nav-link">Home</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  to={{
                    pathname: "/sell/"
                  }}
                >
                  <span className="nav-link">Sell</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink-555"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <div
                  className="dropdown-menu dropdown-secondary"
                  aria-labelledby="navbarDropdownMenuLink-555"
                >
                  <a className="dropdown-item" href="#">
                    Frontend Development
                  </a>
                  <a className="dropdown-item" href="#">
                    Backend Development{" "}
                  </a>
                  <a className="dropdown-item" href="#">
                    Design UI/UX{" "}
                  </a>
                </div>
              </li>
              <li className="nav-item active">
                <Link
                  to={{
                    pathname: "/discovery/"
                  }}
                >
                  <span className="nav-link">Agent finder</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={{
                    pathname: "/messages/"
                  }}
                >
                  <span className="nav-link">Messages</span>
                </Link>
              </li>
            </ul>
            {/* messagesssssssssssss */}
            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item avatar dropdown ml-auto">
                <a
                  className="nav-link dropdown-toggle"
                  onClick={() => this.props.handleFetchContactList()}
                  id="navbarDropdownMenuLink-55"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    size="2x"
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
                          pathname: `/message/${x.room_id}`
                        }}
                        className="dropdown-item message-nav"
                      >
                        <div className="col-1">
                          <img
                            src={x.imgurl}
                            className="fit-cover"
                            alt="avatar image"
                            height="42"
                            width="42"
                          />
                        </div>

                        <div className="col-4 text-start">
                          <b>{x.username}</b>
                          <div>{x.address}</div>
                        </div>
                      </Link>
                      <div className="dropdown-divider" />
                    </span>
                  ))}
                </div>
              </li>
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
                      height="42"
                      width="42"
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
                      className="dropdown-item"
                    >
                      Account
                    </Link>
                    <div className="dropdown-divider" />
                    <span className="dropdown-item">Create new: </span>
                    <a
                      className="dropdown-item pl-5"
                      href="{{ url_for('create_post')}}"
                    >
                      <small>New post</small>
                    </a>
                    <a
                      className="dropdown-item pl-5"
                      href="{{ url_for('create_topic')}}"
                    >
                      <small>New topic</small>
                    </a>
                    <a
                      className="dropdown-item text-primary pointy-cursor"
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
                    className="nav-link"
                  >
                    <span style={{ color: "white" }}>Login</span>
                  </Link>
                  <Link
                    to={{
                      pathname: "/signup/"
                    }}
                    className="nav-link"
                  >
                    <span style={{ color: "white" }}>Signup</span>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
