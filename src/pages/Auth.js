import React, { useState } from "react";
import "../styles/Auth.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

function Auth() {
  const navigate = useNavigate();

  const [load, setLoading] = useState(false); // Se declara el state inicial del loader

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Sign In Function
  const signIn = (e) => {
    setLoading(true);
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/"); // Once the user signs in redirects to the Home page
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="login">
      <div className="hero_container">
        <div className="gif_container">
          <img
            alt="dog"
            src="https://i.pinimg.com/originals/fb/1c/0c/fb1c0c48488b0ff156ac373505f5433a.gif"
            className="dog_gif"
          />
          <h1>Welcome back</h1>
        </div>
      </div>

      <form className="form_container">
        <h5>E-mail</h5>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>

        <div className="password-container">
          <h5>Password</h5>
          <Link to="/resetpassword" className="reset-pass">
            Forgot password?
          </Link>
        </div>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>

        {load ? (
          <button
            disabled
            className="sign-up_button"
            style={{ backgroundColor: "rgb(0, 188, 100)" }}
          >
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.6"
              width="17"
              visible={true}
            />
          </button>
        ) : (
          <button onClick={signIn} className="sign-up_button">
            Sign in
          </button>
        )}
      </form>
    </div>
  );
}

export default Auth;
