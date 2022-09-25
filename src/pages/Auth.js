import React, { useState } from "react";
import "../styles/Auth.css";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Sign In Function
  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/"); // Once the user signs in redirects to the Home page
      })
      .catch((error) => {
        alert(error.message);
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
          <h1>Welcome Back</h1>
        </div>
      </div>

      <form className="form_container">
        <h5>E-mail</h5>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>

        <h5>Password</h5>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>

        <button onClick={signIn} className="sign-up_button">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Auth;
