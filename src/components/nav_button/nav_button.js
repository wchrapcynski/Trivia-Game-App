import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
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
          props.classType === "normal"
            ? "button-enabled nav_button__nocursor"
            : (props.isCorrect === null
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

Nav_Button.propTypes = {
  label: PropTypes.string,
  clasType: PropTypes.string,
  isCorrect: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Nav_Button;
