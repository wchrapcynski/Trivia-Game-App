import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./nav_button.scss";

function Nav_Button(props) {
  const { hasGameStarted, label, classType, isCorrect, disabled } = props;
  console.log(isCorrect, classType);
  return (
    <div
      data-test="nav-buttton-component"
      className={
        classType === "control"
          ? "nav_button__normal nav_button__control"
          : "nav_button__normal"
      }>
      <p
        data-test="nav-button-text"
        className={
          classType === "normal" &&
          "button-enabled nav_button__nocursor " +
            (isCorrect === null
              ? ""
              : isCorrect
              ? "flashing-green "
              : "flashing-red ") +
            (hasGameStarted && disabled
              ? "button-disabled nav_button__nocursor"
              : "button-enabled nav_button__cursor")
        }>
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
