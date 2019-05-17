import React, { Component } from "react";
import "./AgentsList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default class AgentsList extends Component {
  render() {
    return (
      <div className="container">
        {this.props.agentsList.map(x => {
          return (
            <div key={x.username} className="agent-card row my-2">
              <div className="col-md-2">
                <img
                  src={x.imgurl}
                  className="avatar-img rounded-circle"
                  alt="avatar"
                  height="130"
                  width="130"
                />
              </div>
              <div className="col-md-2">
                <ul className="list-unstyled">
                  <li>
                    <b style={{ color: "purple" }}>{x.username}</b>
                  </li>
                  <li>(+84) 3969696969</li>
                  <li style={{ color: "green" }}>♥ ♥ ♥ ♥ ♥</li>
                  <li>sadsa</li>
                  <li>150 reviews</li>
                </ul>
              </div>
              <div className="col-md-4 text-center">
                <ul className="list-unstyled">
                  <li>Agent's records:</li>
                  <li>126 local reviews</li>
                  <li>16 recent salés</li>
                  <li>2 listing</li>
                </ul>
              </div>
              <div className="col-md-3 text-end">
                <ul className="list-unstyled">
                  <li>Last review 06/09/2019</li>
                  <li>
                    "Man this guy is goooddddddddddddd dsa ddsa das das dsad sad
                    das dasd asd asdas dassd as ....."
                  </li>
                </ul>
              </div>
              <div className="col-md-1 text-end">
                <Link
                  to={{
                    pathname: `/profile/${x.user_id}`
                  }}
                  className="nav-link"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size="5x"
                    style={{ color: "purple", cursor: "pointer" }}
                  />
                </Link>
              </div>
              <div className="col-md-1" />
            </div>
          );
        })}
      </div>
    );
  }
}
