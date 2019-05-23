import React, { Component } from "react";
import socketIOClient from "socket.io-client";

export default class Messages extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      messages: [],
      room_id: null
    };
    this.socket = socketIOClient("http://localhost:5000/");
  }

  componentWillReceiveProps(nextProps) {
    console.log("leaved", this.props.match.params.id);
    this.socket.emit("leave", { room_id: this.props.match.params.id });

    console.log("joined", nextProps.match.params.id);
    this.socket.emit("join", { room_id: nextProps.match.params.id });
  }

  componentDidMount() {
    console.log("joined", this.props.match.params.id);
    this.socket.emit("join", { room_id: this.props.match.params.id });

    this.socket.on("back_message", data => {
      let messages = this.state.messages.concat([
        { message: data["message"], username: data["username"] }
      ]);
      this.setState({
        messages: messages
      });
    });
  }

  handleTextChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      message: ""
    });

    this.socket.emit("my_message", {
      message: this.state.message,
      user_id: this.props.user_id,
      username: this.props.username,
      room_id: this.props.match.params.id
    });
  }

  render() {
    return (
      <div className="container text-center">
        <h6>Room {this.props.match.params.id}</h6>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            value={this.state.message}
            onChange={e => this.handleTextChange(e)}
            required
          />
          <input type="submit" value="Send" />
        </form>
        <div style={{ padding: 50, backgroundColor: "lightgray" }}>
          <ul>
            {this.state.messages.map((message, index) => (
              <li key={index}>
                <b>{message.username}</b>: {message.message}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
