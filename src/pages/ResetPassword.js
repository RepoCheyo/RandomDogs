import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../FirebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import "../styles/ResetPassword.css";

function ResetPassword() {
  const [email, setEmail] = useState();
  const [send, setSend] = useState(false);

  const submitEmail = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSend(true);
        alert("Reset Email send!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      {send ? (
        <div className="reset_cont">
          <form className="mail_sent_container">
            <img
              src="https://i.imgur.com/cSJK94C.gif"
              alt="dog_mail"
              className="mail_dog_image"
            ></img>
            <h1 className="headers">Check your Mail</h1>
            <div className="back_login_cont">
              <h5 className="text">
                On password reseted go back to{" "}
                <Link to="/login" className="back-login-link">
                  login
                </Link>
              </h5>
            </div>
          </form>
        </div>
      ) : (
        <div className="reset_cont">
          <form className="form_container_reset">
            <img
              src="https://i.pinimg.com/originals/f4/b2/93/f4b293a32db0415d378080badfd6db7f.gif"
              alt="image-send"
            ></img>
            <h1 className="headers">Send Reset Email</h1>
            <h5 className="text">E-mail</h5>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>

            <button onClick={submitEmail} className="submit_email">
              Send
            </button>

            <div className="back_login_cont">
              <h5 className="text">
                Go back to{" "}
                <Link to="/login" className="back-login-link">
                  login
                </Link>
              </h5>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ResetPassword;
