import React from "react";
import { Link } from "react-router-dom";
import "../../styles/NotLoged.css";

function NotLogged() {
  return (
    <div className="notLogged_container">
      <img
        src={require("../../assets/backgroundpage.JPG")}
        alt="background"
        className="bg_img"
      ></img>
      <div className="message_container">
        <h1>Woof</h1>
        <h5>Looks you are not a dog lover</h5>
        <p>
          <Link to="/login" className="notLogged_link">
            Log in
          </Link>
          or <Link>Sign Up</Link> to get your dog
        </p>
      </div>
    </div>
  );
}

export default NotLogged;
