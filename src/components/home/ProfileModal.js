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
        <li>Yes</li>
        <li>No</li>
        <li>
          <button className="logout_btn" onClick={handleSignOut}>
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ProfileModal;
