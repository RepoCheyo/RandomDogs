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
    <div>
      <p>Auth</p>
      <input
        placeholder="Email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      ></input>
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
}

export default Auth;
