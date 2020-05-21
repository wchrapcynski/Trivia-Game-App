import React from "react";
import { useSelector } from "react-redux";
import "./question.scss";

function Question() {
  const questionData = useSelector((state) => state.questionReducer.question);
  const { hasGameStarted, hasGameEnded } = useSelector(
    (state) => state.gameReducer
  );
  return (
    <div className="question-box">
      {!hasGameStarted && (
        <p className="question-box__high_score">The Current High Score is</p>
      )}
      <p className="question-box__question">
        {!hasGameStarted
          ? "Welcome to Mouse Fan Trivia! How many questions can you answer?"
          : hasGameEnded
          ? "Game Over!"
          : questionData}
      </p>
    </div>
  );
}

export default Question;
