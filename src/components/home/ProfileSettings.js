import React, { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, auth } from "../../FirebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import { IoClose } from "react-icons/io5";
import ProfilePicture from "./ProfilePicture";

function ProfileSettings(props) {
  const [profileP, setProfileP] = useState(null);
  const [url, setUrl] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );

  const user = auth.currentUser;
  const imgRef = ref(storage, `users_imgs/${user.uid}/ pfp`);

  const loadPfp = async () => {
    const pfpUrl = await getDownloadURL(imgRef);
    setUrl(pfpUrl);
  };

  const uploadImg = () => {
    if (profileP) {
      uploadBytes(imgRef, profileP, getDownloadURL).then((snapshot) => {
        getDownloadURL(imgRef).then((url) => {
          setUrl(url);
        });

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

  useEffect(() => {
    loadPfp();
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
            <ProfilePicture
              src={url}
              style={{
                height: "200px",
                width: "200px",
                borderRadius: 100,
                margin: "30px",
              }}
            />

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
