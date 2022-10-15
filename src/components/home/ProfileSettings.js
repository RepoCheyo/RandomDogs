import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../FirebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import { IoClose } from "react-icons/io5";

function ProfileSettings(props) {
  const [profileP, setProfileP] = useState(null);

  const uploadImg = () => {
    if (profileP) {
      const imgRef = ref(
        storage,
        `users_imgs/${(new Date() * Math.random())
          .toString(36)
          .substring(0, 6)}`
      );

      uploadBytes(imgRef, profileP, getDownloadURL).then((snapshot) => {
        const getImage = async () => {
          const ImageURL = await getDownloadURL(imgRef);
          setProfileP(ImageURL);
        };

        getImage();

        toast.success("Image Uploaded", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      });
    } else {
      toast.error("Image not selected", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  };

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
            Profile
          </h1>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              margin: "auto",
              marginLeft: "135px",
              marginTop: "-30px",
              width: "50%",
              justifyContent: "center",
            }}
          >
            {profileP ? (
              <img
                alt="profile"
                src={profileP}
                style={{
                  height: "200px",
                  width: "200px",
                  borderRadius: 100,
                  margin: "30px",
                }}
              ></img>
            ) : (
              <img
                alt="profile"
                style={{
                  height: "200px",
                  width: "200px",
                  borderRadius: 100,
                  margin: "30px",
                }}
                src={
                  "https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
                }
              ></img>
            )}

            <div
              style={{
                height: "40px",
                width: "170px",
                marginLeft: "-215px",
                marginTop: "200px",
                cursor: "pointer",
                background: "#4900ff",
              }}
              className="submit_email"
            >
              <input
                style={{
                  border: "none",
                  color: "transparent",
                  cursor: "pointer",
                  width: "150px",
                  opacity: 0,
                  zIndex: 100,
                }}
                type="file"
                onChange={(event) => {
                  setProfileP(event.target.files[0]);
                }}
                accept="image/png, image/gif, image/jpeg"
              />
              <p style={{ marginTop: "-22px" }}>Select Photo</p>
            </div>
          </div>
          <button className="submit_email" onClick={uploadImg}>
            Save Changes
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProfileSettings;
