import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./nav_button.scss";

function Nav_Button(props) {
  const { hasGameStarted } = props;
  return (
    <div
      className={
        props.classType === "control"
          ? "nav_button__normal nav_button__control"
          : "nav_button__normal"
      } data-test="nav-buttton-component" >
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

export default connect((state) => ({hasGameStarted: state.gameReducer.hasGameStarted}))(Nav_Button);
