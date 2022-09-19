import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css";

export default function Error() {
  return (
    <div className="error_container">
      <p className="error_message">
        The page you are looking for does not exists
      </p>
      <img
        alt="dog_gif"
        className="dog_gif"
        src="https://c.tenor.com/TUmjIWdiLIcAAAAd/dog-door-dog-dance.gif"
      />
      <div className="link_container">
        <Link className="link_home" to="/">
          Find a dog
        </Link>
      </div>
    </div>
  );
}
