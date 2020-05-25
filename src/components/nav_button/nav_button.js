import React from "react";
import { useSelector } from "react-redux";
import "./nav_button.scss";

function Nav_Button(props) {
  const { hasGameStarted } = useSelector((state) => state.gameReducer);
  return (
    <div
      className={
        props.classType === "control"
          ? "nav_button__normal nav_button__control"
          : "nav_button__normal"
      }>
      <p
        className={
          (props.isCorrect === null
            ? ""
            : props.isCorrect
            ? "flashing-green "
            : "flashing-red ") +
          (hasGameStarted && props.disabled ? "button-disabled" : "button-enabled")
        }>
        {props.label}
      </p>
    </div>
  );
}

export default Nav_Button;
