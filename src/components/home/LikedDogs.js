import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

import { auth, db } from "../../FirebaseConfig";
import "../../styles/LikedDogs.css";

function LikedDogs(props) {
  const user = auth.currentUser;
  let randomString = (Math.random() + 1).toString(36).substring(7);

  const [likedDogs, setLikedDogs] = useState([]);

  useEffect(() => {
    const loadLiked = onSnapshot(
      collection(db, "users", user.uid, "likes"),
      (querySnapshot) => {
        const documents = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        console.log(documents);
        setLikedDogs(documents);
      }
    );
  }, []);

  return (
    <div className="notLogged_container" style={{ zIndex: 999 }}>
      <div className="message_container">
        <div className="notLoggedmsj_container">
          <button
            onClick={props.closeModal}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              marginRight: -600,
            }}
          >
            <IoClose
              style={{
                background: "#E5E5E5",
                fontSize: 20,
                borderRadius: "100%",
                color: "gray",
                padding: 2,
              }}
            />
          </button>
          <h1
            style={{
              textAlign: "left",
              fontWeight: 1000,
              marginLeft: "10px",
              fontSize: 30,
            }}
          >
            Liked Dogs
          </h1>

          <div className="liked-dogs-cont">
            {likedDogs?.map((likedDogs) => (
              <img
                id={likedDogs}
                alt="liked_dog"
                src={likedDogs.dog}
                className="liked-dog-img"
              ></img>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LikedDogs;
