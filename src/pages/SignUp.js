import React, { useEffect, useState } from "react";
import "../styles/SignUp.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [ip, setIP] = useState();

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const createUser = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setDoc(doc(db, "users", user.uid, "signupdata", user.accessToken), {
          name,
          ip,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signup-main-container">
      <div className="signup_form_container">
        <h5>Name or user name</h5>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>

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
        <button onClick={createUser}>Create Acoount</button>
      </div>
      <div className="logo_letter_container">
        <h1>Hi {name}, </h1>
        <h3>welcome to dog heaven</h3>
      </div>
    </div>
  );
}

export default SignUp;
