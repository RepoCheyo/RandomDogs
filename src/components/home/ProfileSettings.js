import React, { useState } from "react";

function ProfileSettings() {
  const [profileP, setProfileP] = useState();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProfileP(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="notLogged_container">
      <div className="message_container">
        <div className="notLoggedmsj_container">
          <h1>Profile</h1>
          <input
            style={{
              border: "none",
              backgroundColor: "white",
            }}
            type="file"
            onChange={onImageChange}
            accept="image/png, image/gif, image/jpeg"
          ></input>
          {profileP ? (
            <img
              alt="profile"
              src={profileP}
              style={{ height: "150px", width: "150px", borderRadius: 100 }}
            ></img>
          ) : (
            <img
              alt="profile"
              style={{ height: "50px", width: "50px" }}
              src={
                "https://freepngimg.com/download/dog/163170-photos-puppy-dog-face-png-image-high-quality.png"
              }
            ></img>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;
