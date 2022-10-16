import React from "react";

function ProfilePicture(props) {
  return (
    <div>
      <img src={props.src} alt="profile-p" style={props.style}></img>
    </div>
  );
}

export default ProfilePicture;
