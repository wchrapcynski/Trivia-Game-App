import React from "react";
import { useDispatch } from "react-redux";
import * as questionActions from "./../../actions/questionActions";
import "./choice.scss";

function Choice(props) {
  const dispatch = useDispatch();

  const clickHandle = () => {
    if (props.correct === true) {
      dispatch(questionActions.CurrentQuestionCorrect(true))
    } else {
      dispatch(questionActions.CurrentQuestionCorrect(false))
    }
  };

  return (
    <div className="choice" onClick={clickHandle}>
      {props.choice}
    </div>
  );
}

export default Choice;
