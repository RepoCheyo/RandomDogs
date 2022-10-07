import React from "react";
import "../../styles/ProfileModal.css";
import { signOut } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import { useNavigate } from "react-router-dom";

function ProfileModal() {
  const navigate = useNavigate();

  const handleSignOut = (e) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        navigate("login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="menu-container">
      <ul className="list-container">
        <li
          style={{
            borderBottom: "1.5px solid #f5f5f5",
            paddingTop: "7px",
            paddingBottom: "7px",
            paddingLeft: "10px",
          }}
        >
          Profile
        </li>
        <li
          style={{
            borderBottom: "1.5px solid #f5f5f5",
            paddingTop: "7px",
            paddingBottom: "7px",
            paddingLeft: "10px",
          }}
        >
          Liked Dogs
        </li>
        <li style={{ paddingTop: "7px", paddingBottom: "7px" }}>
          <button className="logout_btn" onClick={handleSignOut}>
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ProfileModal;
