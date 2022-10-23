import React from "react";
import "../../styles/Dog.css";
import { RiHeart3Line } from "react-icons/ri";

function Dog(props) {
  return (
    // En la img el src es la prop la cual será = al primer valor del Hook useState [x, setX] dentro de {}
    <div className="img_container">
      <RiHeart3Line
        style={{
          cursor: "pointer",
          background: "#FF0033",
          padding: 3,
          fontSize: 20,
          color: "white",
          marginLeft: 390,
          marginTop: 5,
          borderRadius: 100,
        }}
        onClick={props.addLike}
      />
      <img className="img" src={props.dogImage} alt="Dog"></img>
    </div>
  );
}

export default Dog;
