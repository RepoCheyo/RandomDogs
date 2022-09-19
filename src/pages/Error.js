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
        className="dog_gif"
        src="https://c.tenor.com/TUmjIWdiLIcAAAAd/dog-door-dog-dance.gif"
      />
      <div>
        <Link className="link_home" to="/">
          Get your dog
        </Link>
      </div>
    </div>
  );
}
