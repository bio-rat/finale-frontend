import React, { Component } from "react";
import socketIOClient from "socket.io-client";

export default class Messages extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      messages: []
    };
    this.socket = socketIOClient("http://localhost:5000/");
    // window.test = this.socket;
  }

  componentDidMount() {
    this.socket.on("back_message", data => {
      let messages = this.state.messages.concat([data["message"]]);
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

  handleChooseRoom = room_id => {
    this.setState(
      {
        room_id: room_id
      },
      () => {
        this.socket.emit("join", { room_id: this.state.room_id });
        console.log(this.state.room_id);
      }
    );
  };

  handleSubmit(e) {
    e.preventDefault();
    // alert(this.state.message);
    this.setState({
      message: ""
    });

    this.socket.emit("my_message", {
      message: this.state.message,
      user_id: this.props.user_id,
      room_id: this.state.room_id
    });
  }

  render() {
    return (
      <div className="container text-center">
        <div>
          <button
            className="btn btn-success"
            onClick={() => this.handleChooseRoom(215)}
          >
            Choose room 215
          </button>

          <button
            className="btn btn-success"
            onClick={() => this.handleChooseRoom(519)}
          >
            Choose room 519
          </button>
        </div>
        <h1>Chat Here</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            value={this.state.message}
            onChange={e => this.handleTextChange(e)}
            required
          />
          <input type="submit" value="Send" />
        </form>
        <h1>Here are the messages</h1>
        <div style={{ padding: 50, backgroundColor: "lightgray" }}>
          <ol>
            {this.state.messages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
