import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as questionActions from "./../../actions/questionActions";
import * as gameActions from "./../../actions/gameActions";
import NavButton from "./../nav_button/nav_button";
import "./navigation.scss";

function Navigation() {
  const dispatch = useDispatch();
  const { currentQuestion, publishedItemsLength } = useSelector(
    (state) => state.questionReducer
  );
  const {
    hasGameStarted,
    hasGameEnded,
    isQuestionActive,
    isCorrect,
    score,
    apiEndPoints,
    apiAccessOptions,
  } = useSelector((state) => state.gameReducer);

  const onClickHandler = () => {
    // Starts game
    if (!hasGameStarted) {
      dispatch(gameActions.updateGameStarted(true));
    }
    // Takes player to the next question after current question has been answered
    if (
      currentQuestion + 1 < publishedItemsLength &&
      !isQuestionActive &&
      hasGameStarted
    ) {
      dispatch(questionActions.nextQuestion(currentQuestion));
      dispatch(gameActions.setIsQuestionActive(true));
      dispatch(gameActions.updateIsCorrect(null));
    }
    // Checks to see if all questions have been answered to end the game
    if (currentQuestion + 1 === publishedItemsLength) {
      dispatch(gameActions.updateGameStarted(false));
      dispatch(gameActions.updateGameEnded(true));
      dispatch(gameActions.updateIsCorrect(null));
      dispatch(
        questionActions.fetchPublishedIds(
          apiEndPoints.published,
          apiAccessOptions
        )
      );
    }
    // Resets the game
    if (hasGameEnded) {
      dispatch(gameActions.resetGame());
      dispatch(questionActions.resetQuestionData());
    }
  };

  return (
    <div className="navigation">
      <NavButton
        label={`Score ${score}/10`}
        classType="normal"
        isCorrect={null}
        disabled={false}
      />
      <NavButton
        label={
          hasGameEnded
            ? "Game Over!"
            : !hasGameStarted
            ? "Good Luck!"
            : isCorrect === null
            ? "Pick One!"
            : isCorrect === true
            ? "That's Right!"
            : "That's Wrong!"
        }
        classType="normal"
        isCorrect={isCorrect}
        disabled={false}
      />
      <div onClick={onClickHandler}>
        <NavButton
          label={
            !hasGameStarted ? "Start Game" : isQuestionActive ? "Next" : "Next"
          }
          classType="control"
          isCorrect={null}
          disabled={isQuestionActive}
        />
      </div>
    </div>
  );
}

export default Navigation;
