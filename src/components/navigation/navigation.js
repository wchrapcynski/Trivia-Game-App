import React from "react";
import { useDispatch, connect } from "react-redux";
import {
  nextQuestion,
  fetchPublishedIds,
  resetQuestionData,
} from "./../../actions/questionActions";
import * as gameActions from "./../../actions/gameActions";
import * as leaderboardActions from "./../../actions/leaderboarActions";
import NavButton from "./../nav_button/nav_button";
import "./navigation.scss";

function Navigation(props) {
  const dispatch = useDispatch();
  const { currentQuestion, publishedItemsLength } = props.data.questionReducer;
  const {
    hasGameStarted,
    hasGameEnded,
    isQuestionActive,
    isCorrect,
    score,
    apiEndPoints,
    apiAccessOptions,
  } = props.data.gameReducer;
  const { leaderboardDisplay } = props.data.leaderboardReducer;
  const { nextQuestion, fetchPublishedIds, resetQuestionData } = props;

  const checkStartGame = () => {
    if (!hasGameStarted) {
      dispatch(gameActions.updateGameStarted(true));
    }
  };

  const checkNextQuestion = () => {
    if (
      currentQuestion + 1 < publishedItemsLength &&
      !isQuestionActive &&
      hasGameStarted
    ) {
      nextQuestion(currentQuestion);
      dispatch(gameActions.setIsQuestionActive(true));
      dispatch(gameActions.updateIsCorrect(null));
    }
  };

  const checkIfEndOfQuestions = () => {
    if (currentQuestion + 1 === publishedItemsLength) {
      dispatch(gameActions.updateGameStarted(false));
      dispatch(gameActions.updateGameEnded(true));
      dispatch(gameActions.updateIsCorrect(null));
      fetchPublishedIds(apiEndPoints.published, apiAccessOptions);
    }
  };

  const checkResetGame = () => {
    if (hasGameEnded) {
      dispatch(gameActions.resetGame());
      resetQuestionData();
    }
  };

  const onclickHandlerLeaderBoard = () => {
    dispatch(leaderboardActions.updateLeaderboardDisplay(!leaderboardDisplay));
  };

  const onClickHandlerNext = () => {
    checkStartGame();
    checkNextQuestion();
    checkIfEndOfQuestions();
    checkResetGame();
  };

  return (
    <div className="navigation">
      {console.log(props.nextQuestion)}
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

const actions = { nextQuestion, fetchPublishedIds, resetQuestionData };

export default connect((state) => ({ data: state }), { ...actions })(
  Navigation
);
