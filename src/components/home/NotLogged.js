import React from "react";
import { Link } from "react-router-dom";
import "../../styles/NotLoged.css";

function NotLogged() {
  return (
    <div className="notLogged_container">
      <div className="message_container">
        <div className="notLoggedmsj_container">
          <h1>Sorry!</h1>
          <img
            src="https://img1.picmix.com/output/stamp/normal/3/2/0/9/449023_ba0e5.gif"
            alt="notLogged_gif"
            style={{ height: 250 }}
          ></img>
          <p className="">Looks you are not a registered</p>
          <p>
            <Link to="/login" className="notLogged_link">
              Log in {""}
            </Link>
            or{" "}
            <Link to="/signup" className="notLogged_link">
              Sign Up
            </Link>{" "}
            to get your dog
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotLogged;
