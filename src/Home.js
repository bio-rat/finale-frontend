import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>hey this is home page :)</h1>
        <h1>this is user: {this.props.username}</h1>
        {this.props.is_broker ? (
          <h1 className="text-danger">You are a: broker</h1>
        ) : (
          <h1 className="text-success">You are a: normal user</h1>
        )}
      </div>
    );
  }
}
