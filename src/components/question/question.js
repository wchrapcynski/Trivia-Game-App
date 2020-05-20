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
      <div>
      <p>{!hasGameStarted ? "The Current High Score is: " : "" }</p>
        {!hasGameStarted
          ? "Welcome to Mouse Fan Trivia! How many questions can you answer?"
          : hasGameEnded
          ? "Game Over!"
          : questionData}
      </div>
    </div>
  );
}

export default Question;
