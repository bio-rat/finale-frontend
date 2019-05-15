import React, { Component } from "react";
import "./Login.css";
import Dropzone from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import uploadingImg from "./uploading.gif";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: "",
      is_broker: false
    };
  }

  handleTextChange(a, b, c, d) {
    let is_broker;
    if (d && typeof d === "string") {
      if (d === "true") {
        is_broker = true;
      } else if (d === "false") {
        is_broker = false;
      }
    }
    this.setState(
      {
        email: a ? a : this.state.email,
        password: b ? b : this.state.password,
        username: c ? c : this.state.username,
        is_broker: d ? is_broker : this.state.is_broker
      },
      () => console.log(this.state)
    );
  }

  onClickSignup = () => {
    this.props.onClickSignup(
      this.state.email,
      this.state.password,
      this.state.username,
      this.state.is_broker
    );
    this.props.history.push("/login/");
  };

  render() {
    let loadingtext;
    if (!this.props.uploadedFile && !this.props.imgurl) {
      loadingtext = (
        <span className="pl-3" style={{ color: "purple" }}>
          Click here to upload
        </span>
      );
    } else if (this.props.uploadedFile && !this.props.imgurl) {
      loadingtext = (
        <img
          className="mb-2 ml-4"
          style={{ color: "purple" }}
          src={uploadingImg}
          alt=""
        />
      );
    } else if (this.props.imgurl) {
      loadingtext = (
        <span className="pl-3 text-success">
          {this.props.uploadedFile.name}
        </span>
      );
    }
    return (
      <div>
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>

          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
            onChange={e => this.handleTextChange(e.target.value, "", "", "")}
          />

          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
            onChange={e => this.handleTextChange("", e.target.value, "", "")}
          />

          <input
            type="text"
            id="inputUsername"
            className="form-control"
            placeholder="Username"
            required
            onChange={e => this.handleTextChange("", "", e.target.value, "")}
          />
          <p className="mb-3">You are a...</p>

          <div
            className="d-block my-3"
            onChange={e => this.handleTextChange("", "", "", e.target.value)}
          >
            <div className="custom-control custom-radio">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                className="custom-control-input"
                value="true"
                required
              />
              <label className="custom-control-label" htmlFor="credit">
                Broker
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                id="debit"
                name="paymentMethod"
                type="radio"
                className="custom-control-input"
                value="false"
                required
              />
              <label className="custom-control-label" htmlFor="debit">
                Seller/ Buyer
              </label>
            </div>
          </div>

          <Dropzone
            onDrop={this.props.onImageDrop.bind(this)}
            accept="image/*"
            multiple={false}
          >
            {({ getRootProps, getInputProps }) => {
              return (
                <div className="upload-wrapper pl-3 my-2" {...getRootProps()}>
                  <input {...getInputProps()} />
                  <FontAwesomeIcon
                    icon={faCloudUploadAlt}
                    size="3x"
                    style={{ color: "purple", cursor: "pointer" }}
                  />
                  {loadingtext}
                </div>
              );
            }}
          </Dropzone>
          {/* {this.props.imgurl ? (
            <span className="text-success text-center">
              Uploaded successfully
            </span>
          ) : (
            <span className="text-danger text-center">Not ready!!</span>
          )} */}
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={() => this.onClickSignup()}
          >
            Sign in
          </button>
          {/* <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p> */}
        </form>
      </div>
    );
  }
}
