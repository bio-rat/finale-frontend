import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleTextChange(a, b) {
    this.setState(
      {
        email: a ? a : this.state.email,
        password: b ? b : this.state.password
      },
      () => console.log(this.state)
    );
  }

  onClickLogin = () => {
    this.props.onClickLogin(this.state.email, this.state.password);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
            onChange={e => this.handleTextChange(e.target.value, "")}
          />

          <input
            type="password"
            id="inputPassword"
            className="form-control mb-2"
            placeholder="Password"
            required
            onChange={e => this.handleTextChange("", e.target.value)}
          />
          <button
            className="button button-primary button-shadow"
            onClick={() => this.onClickLogin()}
          >
            Sign in
          </button>
          {/* <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p> */}
        </form>
      </div>
    );
  }
}
