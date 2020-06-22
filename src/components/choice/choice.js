import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import * as gameActions from "./../../actions/gameActions";
import "./choice.scss";

function Choice(props) {
  const dispatch = useDispatch();
  const { hasGameStarted, isQuestionActive, score, highScore } = useSelector(
    (state) => state.gameReducer
  );

  const clickHandle = () => {
    if (isQuestionActive) {
      if (props.correct) {
        dispatch(gameActions.updateIsCorrect(true));
        dispatch(gameActions.updateScore(score + 1));
      } else {
        dispatch(gameActions.updateIsCorrect(false));
      }
      dispatch(gameActions.updateIsQuestionActive(false));
    }
  };

  useEffect(() => {
    if (score > highScore) {
      dispatch(gameActions.updateHighScore(score));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  return (
    <div className="choice" onClick={clickHandle}>
      <p className={!isQuestionActive ? "choice-disable" : "choice-active"}>
        {hasGameStarted && props.choice}
      </p>
    </div>
  );
}

Choice.propTypes = {
  correct: PropTypes.bool,
  choice: PropTypes.string
}

export default Choice;
