import React, { useState } from "react";
import "../styles/Auth.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth, app } from "../FirebaseConfig";

function Auth() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <form className="form_container">
        <div className="gif_container">
          <img
            alt="dog"
            src="https://i.pinimg.com/originals/fb/1c/0c/fb1c0c48488b0ff156ac373505f5433a.gif"
            className="dog_gif"
          />
          <h1>Welcome to Random Dogs</h1>
        </div>
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

        <button onClick={signUp} className="sign-up_button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Auth;
