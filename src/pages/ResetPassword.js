import React, { useState } from "react";
import { Link } from "react-router-dom";

function ResetPassword() {
  const [email, setEmail] = useState();

  return (
    <div>
      <form className="form_container">
        <h5>E-mail</h5>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>

        <div className="password-container">
          <h5>
            Once you reset the password comeback to the{" "}
            <Link to="/login" className="reset-pass">
              login
            </Link>
          </h5>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
