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
        // ...
      })
      .catch((error) => {
        alert(error.message);
        // ..
      });
  };

  return (
    <div className="login">
      <p>Sign Up</p>
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

        <button onClick={signUp} className="sign-up_button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Auth;
