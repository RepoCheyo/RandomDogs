import { async } from "@firebase/util";
import { collection, doc, onSnapshot, snapshotEqual } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { auth, db } from "../../FirebaseConfig";

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
      }
    );
  }, []);

  return (
    <div className="notLogged_container">
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

          <div></div>
        </div>
      </div>
    </div>
  );
}

//{likedDogs?.map((likedDogs) => (
//            <img alt="liked_dog" src={likedDogs}></img>
//        ))}

export default LikedDogs;
