import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as questionActions from "./../../actions/questionActions";
import "./choice.scss";

function Choice(props) {
  const dispatch = useDispatch();
  const { hasGameStarted } = useSelector((state) => state.gameReducer);
  const clickHandle = () => {
    if (props.correct === true) {
      dispatch(questionActions.CurrentQuestionCorrect(true))
    } else {
      dispatch(questionActions.CurrentQuestionCorrect(false))
    }
  };

  return (
    <div className="choice" onClick={clickHandle}>
      {hasGameStarted ? props.choice : ""}
    </div>
  );
}

export default Choice;
