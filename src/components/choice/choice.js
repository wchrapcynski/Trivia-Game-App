import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as gameActions from "./../../actions/gameActions";
import "./choice.scss";

function Choice(props) {
  const dispatch = useDispatch();
  const { hasGameStarted, isQuestionActive, score, highScore } = useSelector(
    (state) => state.gameReducer
  );
  const [clicked, setClicked] = useState(false);

  const clickHandle = () => {
    if (isQuestionActive) {
      setClicked(true);
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

  useEffect(() => {
    if (isQuestionActive === true) {
      setClicked(false);
    }
  }, [isQuestionActive]);

  return (
    <div className="choice" onClick={clickHandle}>
      <p className={!isQuestionActive && !clicked ? "choice-disable" : "choice-active"}>
        {hasGameStarted && props.choice}
      </p>
    </div>
  );
}

export default Choice;
