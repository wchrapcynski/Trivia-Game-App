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
          props.classType === "normal" ? "button-enabled nav_button__nocursor" :
          (props.isCorrect === null
            ? ""
            : props.isCorrect
            ? "flashing-green "
            : "flashing-red ") +
          (hasGameStarted && props.disabled
            ? "button-disabled nav_button__nocursor"
            : "button-enabled nav_button__cursor")
        }>
        {props.label}
      </p>
    </div>
  );
}

export default Nav_Button;
