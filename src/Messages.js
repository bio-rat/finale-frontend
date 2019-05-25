import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import "./Messages.css";

export default class Messages extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      messages: [],
      room_id: null
    };
    this.socket = socketIOClient("https://realtorland.herokuapp.com/");
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

    this.scrollToBottom();
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

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    // const user1img = this.props.user1img;
    const user2img = this.props.location.state.user2img;

    return (
      <>
        <div className="chat-container col-md-6">
          <h6>Room {this.props.match.params.id}</h6>
          <div>
            {this.state.messages.map((message, index) => (
              <div key={index}>
                {message.username === this.props.username ? (
                  <div className="text-right">
                    <span
                      className="message-box"
                      style={{ backgroundColor: "#FF4D79", color: "white" }}
                    >
                      {message.message}
                    </span>
                  </div>
                ) : (
                  <div className="text-left">
                    <img
                      src={user2img}
                      className="fit-cover"
                      alt="avatar image"
                      height="30"
                      width="30"
                    />
                    <span
                      className="message-box"
                      style={{ backgroundColor: "#F1F0F0", color: "black" }}
                    >
                      {message.message}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div
            style={{ float: "left", clear: "both" }}
            ref={el => {
              this.messagesEnd = el;
            }}
          />
        </div>
        <form
          className="chat-box col-md-6 mt-3"
          onSubmit={e => this.handleSubmit(e)}
        >
          <input
            type="text"
            value={this.state.message}
            onChange={e => this.handleTextChange(e)}
            required
            autoFocus
            placeholder="Input your message..."
            className="chat-input"
          />
        </form>
      </>
    );
  }
}
