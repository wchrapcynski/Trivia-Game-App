import React from "react";
import "./nav_button.scss";

function Nav_Button(props) {
  return (
    <div
      className={
        props.classType === "control"
          ? "nav_button__normal nav_button__control"
          : "nav_button__normal"
      }>
      <p
        className={
          props.isCorrect === null
            ? ""
            : props.isCorrect
            ? "flashing-green"
            : "flashing-red"
        }>
        {props.label}
      </p>
    </div>
  );
}

export default Nav_Button;
