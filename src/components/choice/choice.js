import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  updateIsCorrect,
  updateScore,
  updateIsQuestionActive,
  updateHighScore,
} from "./../../actions/gameActions";
import "./choice.scss";

function Choice(props) {
  const {
    hasGameStarted,
    isQuestionActive,
    score,
    highScore,
    updateIsCorrect,
    updateScore,
    updateIsQuestionActive,
    updateHighScore,
  } = props;

  const clickHandle = () => {
    if (isQuestionActive) {
      if (props.correct) {
        updateIsCorrect(true);
        updateScore(score + 1);
      } else {
        updateIsCorrect(false);
      }
      updateIsQuestionActive(false);
    }
  };

  useEffect(() => {
    if (score > highScore) {
      updateHighScore(score);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  return (
    <div className="choice" onClick={clickHandle} data-test="choice-component">
      <p className={!isQuestionActive ? "choice-disable" : "choice-active"}>
        {hasGameStarted && props.choice}
      </p>
    </div>
  );
}

Choice.propTypes = {
  correct: PropTypes.bool,
  choice: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    hasGameStarted:
      state.gameReducer.hasGameStarted && state.gameReducer.hasGameStarted,
    isQuestionActive:
      state.gameReducer.isQuestionActive && state.gameReducer.isQuestionActive,
    score: state.gameReducer.score && state.gameReducer.score,
    highScore: state.gameReducer.highScore && state.gameReducer.highScore,
  };
};

const actions = {
  updateIsCorrect,
  updateScore,
  updateIsQuestionActive,
  updateHighScore,
};

export default connect(mapStateToProps, { ...actions })(Choice);
