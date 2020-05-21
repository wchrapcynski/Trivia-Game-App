import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as questionActions from "./../../actions/questionActions";
import * as gameActions from "./../../actions/gameActions";
import NavButton from "./../nav_button/nav_button";
import "./navigation.scss";

function Navigation() {
  const dispatch = useDispatch();
  const message = ["Good Luck!", "Pick One!", "That's Wrong!", "That's Right!"];
  const { currentQuestion, publishedItemsLength } = useSelector(
    (state) => state.questionReducer
  );
  const { hasGameStarted, isQuestionActive, isCorrect } = useSelector(
    (state) => state.gameReducer
  );
  const onClickHandler = () => {
    if (!hasGameStarted) {
      dispatch(gameActions.updateGameStarted(true));
    }
    if (currentQuestion + 1 < publishedItemsLength) {
      dispatch(questionActions.nextQuestion(currentQuestion));
    }
  };

  return (
    <div className="navigation">
      <NavButton label="Score 0/10" classType="normal" />
      <NavButton
        label={
          !hasGameStarted
            ? message[0]
            : isCorrect === null
            ? message[1]
            : isCorrect === false
            ? message[2]
            : message[3]
        }
        classType="normal"
      />
      <div onClick={onClickHandler}>
        <NavButton label={!hasGameStarted ? "Start Game" : isQuestionActive ? "Next" : "Next"} classType="control" />
      </div>
    </div>
  );
}

export default Navigation;
