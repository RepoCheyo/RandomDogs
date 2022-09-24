import React, { useState, useEffect } from "react";
import "../styles/Auth.css";
import { signOut, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { Navigate } from "react-router-dom";

function Auth() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState(null);

  // Sign In Function
  const signIn = (e) => {
    e.prevenDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Hook once the page loads to redirect the user from the form to the main page
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // User logged in
        setUser(userAuth);
      } else {
        // User logged out
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="login">
      {// Condition to redirect the user
      user && <Navigate to="/" replace={true} />}
      <form className="form_container">
        <div className="gif_container">
          <img
            alt="dog"
            src="https://i.pinimg.com/originals/fb/1c/0c/fb1c0c48488b0ff156ac373505f5433a.gif"
            className="dog_gif"
          />
          <h1>Welcome Back</h1>
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

        <button onClick={signIn} className="sign-up_button">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Auth;
