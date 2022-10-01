import React, { useEffect, useState } from "react";
import "../styles/SignUp.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [load, setLoading] = useState(false);
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
    setLoading(true);
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setDoc(
          doc(
            db,
            "users",
            user.uid,
            "signupdata",
            user.metadata.lastSignInTime
          ),
          {
            name,
            ip,
          }
        );
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert(error.message);
      });
  };

  return (
    <div className="signup-main-container">
      <div className="su_form_container">
        <div className="signup_form_container">
          <h1 className="signup_letter">Random Dogs</h1>

          <h5 className="signup_h5">Name or user name</h5>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            maxlength="20"
          ></input>

          <h5 className="signup_h5">E-mail</h5>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>

          <h5 className="signup_h5">Password</h5>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
          {load ? (
            <button
              disabled
              className="signup_btn"
              style={{ backgroundColor: "#db385e" }}
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
            <button onClick={createUser} className="signup_btn">
              Create Account
            </button>
          )}
        </div>
      </div>

      <div className="logo_letter_container">
        <h1 className="logo_signup_letter">Welcome</h1>
        <h3 className="logo_signup_name">{name}</h3>
        <img
          src="https://cdn.dribbble.com/users/4978497/screenshots/14371515/media/05a0e1c418c87d73d66e50990ff27c8c.gif"
          alt="sign_up_gif_dog"
          className="sign_up_gif_dog"
        ></img>
      </div>
    </div>
  );
}

export default SignUp;
