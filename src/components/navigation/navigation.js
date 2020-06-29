import React from "react";
import { connect } from "react-redux";
import {
  nextQuestion,
  fetchPublishedIds,
  resetQuestionData,
} from "./../../actions/questionActions";
import {
  updateGameStarted,
  setIsQuestionActive,
  updateIsCorrect,
  updateGameEnded,
  resetGame,
} from "./../../actions/gameActions";
import { updateLeaderboardDisplay } from "./../../actions/leaderboardActions"
import NavButton from "./../nav_button/nav_button";
import "./navigation.scss";

function Navigation(props) {
  const { currentQuestion, publishedItemsLength } = props.questionReducer;
  const {
    hasGameStarted,
    hasGameEnded,
    isQuestionActive,
    isCorrect,
    score,
    apiEndPoints,
    apiAccessOptions,
  } = props.gameReducer;
  const { leaderboardDisplay } = props.leaderboardReducer;
  const {
    nextQuestion,
    fetchPublishedIds,
    resetQuestionData,
    updateGameStarted,
    setIsQuestionActive,
    updateIsCorrect,
    updateGameEnded,
    resetGame,
    updateLeaderboardDisplay
  } = props;

  const checkStartGame = () => {
    if (!hasGameStarted) {
      updateGameStarted(true);
    }
  };

  const checkNextQuestion = () => {
    if (
      currentQuestion + 1 < publishedItemsLength &&
      !isQuestionActive &&
      hasGameStarted
    ) {
      nextQuestion(currentQuestion);
      setIsQuestionActive(true);
      updateIsCorrect(null);
    }
  };

  const checkIfEndOfQuestions = () => {
    if (currentQuestion + 1 === publishedItemsLength) {
      updateGameStarted(false);
      updateGameEnded(true);
      updateIsCorrect(null);
      fetchPublishedIds(apiEndPoints.published, apiAccessOptions);
    }
  };

  const checkResetGame = () => {
    if (hasGameEnded) {
      resetGame();
      resetQuestionData();
    }
  };

  const onclickHandlerLeaderBoard = () => {
    updateLeaderboardDisplay(!leaderboardDisplay);
  };

  const onClickHandlerNext = () => {
    checkStartGame();
    checkNextQuestion();
    checkIfEndOfQuestions();
    checkResetGame();
  };

  return (
    <div className="navigation">
      {hasGameStarted ? (
        <NavButton
          label={`Score ${score}/10`}
          classType="normal"
          isCorrect={null}
          disabled={false}
        />
      ) : (
        <div onClick={onclickHandlerLeaderBoard}>
          <NavButton
            label={`Top Players`}
            classType="control"
            isCorrect={true}
            disabled={false}
          />
        </div>
      )}
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
      <div onClick={onClickHandlerNext}>
        <NavButton
          label={
            !hasGameStarted ? "Start Game" : isQuestionActive ? "Next" : "Next"
          }
          classType="control"
          isCorrect={!hasGameStarted ? true : null}
          disabled={isQuestionActive}
        />
      </div>
    </div>
  );
}

const actions = {
  nextQuestion,
  fetchPublishedIds,
  resetQuestionData,
  updateGameStarted,
  setIsQuestionActive,
  updateIsCorrect,
  updateGameEnded,
  resetGame,
  updateLeaderboardDisplay
};

export default connect((state) => ({ ...state }), { ...actions })(
  Navigation
);
