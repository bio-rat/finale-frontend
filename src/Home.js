import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          {/* <img src="https://images.pexels.com/photos/1288482/pexels-photo-1288482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
          {/* <h1> Unlock your dreams today</h1> */}
        </div>
        <div className="container text-center">
          <h1>hey this is home page :)</h1>
          {this.props.username ? (
            <>
              <h3>you are: {this.props.username}</h3>
              {this.props.is_broker ? (
                <h3 className="text-danger">You are a: broker</h3>
              ) : (
                <h3 className="text-success">You are a: normal user</h3>
              )}
            </>
          ) : (
            <h3>you are not logged in</h3>
          )}
        </div>
      </div>
    );
  }
}
