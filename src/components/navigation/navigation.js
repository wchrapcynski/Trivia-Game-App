import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as questionActions from "./../../actions/questionActions";
import NavButton from "./../nav_button/nav_button";
import "./navigation.scss";

function Navigation() {
  const dispatch = useDispatch();
  const { currentQuestion, publishedItemsLength } = useSelector(
    (state) => state.questionReducer
  );

  const nextQuestion = () => {
    if (currentQuestion + 1 < publishedItemsLength) {
      dispatch(questionActions.nextQuestion(currentQuestion));
    }
  };

  return (
    <div className="navigation">
      <NavButton label="Score 0/10" classType="normal" />
      <NavButton label="Good Luck!" classType="normal" />
      <div onClick={nextQuestion}>
        <NavButton label="Start Game" classType="control" />
      </div>
    </div>
  );
}

export default Navigation;
