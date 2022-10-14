import React from "react";
import "../../styles/Dog.css";
import { RiHeart3Line } from "react-icons/ri";

function Dog(props) {
  return (
    // En la img el src es la prop la cual será = al primer valor del Hook useState [x, setX] dentro de {}
    <div className="img_container">
      <img className="img" src={props.dogImage} alt="Dog"></img>
    </div>
  );

  //<RiHeart3Line style={{ background: "red", marginLeft: "870px" }} />
}

export default Dog;
