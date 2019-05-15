/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

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
            </ul>
            {this.props.username ? (
              <ul className="navbar-nav ml-auto nav-flex-icons">
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
                      className="avatar-img"
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
                    {/* <a href="/profile/" className="dropdown-item">
                      Account
                    </a> */}
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
              </ul>
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
          </div>
        </nav>
      </div>
    );
  }
}
