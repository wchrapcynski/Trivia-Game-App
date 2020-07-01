import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./nav_button.scss";

function Nav_Button(props) {
  const { hasGameStarted, label, classType, isCorrect, disabled } = props;

  const buttonClassLogic = () => {
    let classString = "";
    if (classType === "normal") {
      if (hasGameStarted) {
        if (isCorrect === null) {
          classString = "button-enabled nav_button__nocursor ";
        } else if (isCorrect) {
          classString = "flashing-green button-enabled nav_button__nocursor ";
        } else if (!isCorrect) {
          classString = "flashing-red button-enabled nav_button__nocursor ";
        }
      }
    } else {
      if (!hasGameStarted) {
        classString = "flashing-green button-enabled nav_button__cursor ";
      } else {
        if (disabled) {
          classString = "button-disabled nav_button__nocursor ";
        } else if (!disabled) {
          classString = "button-enabled nav_button__cursor ";
        }
      }
    }
    return classString;
  };
  return (
    <div
      data-test="nav-buttton-component"
      className={
        classType === "control"
          ? "nav_button__normal nav_button__control"
          : "nav_button__normal"
      }>
      <p data-test="nav-button-text" className={buttonClassLogic()}>
        {label}
      </p>
    </div>
  );
}

Nav_Button.propTypes = {
  hasGameStarted: PropTypes.bool,
  label: PropTypes.string,
  classType: PropTypes.string,
  isCorrect: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default connect((state) => ({
  hasGameStarted: state.gameReducer.hasGameStarted,
}))(Nav_Button);
