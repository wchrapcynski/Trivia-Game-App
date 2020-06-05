import React from "react";
import { useSelector } from "react-redux";
import right from "./../../images/right.svg";
import wrong from "./../../images/wrong.svg";
import LeaderBoard from "./../leaderboard/leaderboard";
import "./question.scss";

function Question() {
  const questionData = useSelector((state) => state.questionReducer.question);
  const {
    hasGameStarted,
    hasGameEnded,
    highScore,
    isQuestionActive,
    isCorrect,
  } = useSelector((state) => state.gameReducer);
  const { leaderboardDisplay } = useSelector(
    (state) => state.leaderboardReducer
  );

  return (
    <div className="question-box">
      {!hasGameStarted && leaderboardDisplay ? (
        <div className="question-box__leaderboard active">
          Top 3 Players:
          <hr />
          <LeaderBoard />
        </div>
      ) : (
        <div className="question-box__normal">
          {!hasGameStarted ? (
            <div className="active">
              <p>Your Current High Score is: {highScore ? highScore : "0"}</p>
              <p>
                Welcome to Mouse Fan Trivia! How many questions can you answer?
              </p>
            </div>
          ) : hasGameEnded ? (
            <p>Game Over! Click on Start Game to try again!</p>
          ) : isCorrect === null ? (
            <p className={isQuestionActive && "active"}>{questionData}</p>
          ) : isCorrect ? (
            <div className="iscorrect">
              <img className="iscorrect__img" src={right} alt="right" />
            </div>
          ) : (
            <div className="iscorrect">
              <img className="iscorrect__img" src={wrong} alt="wrong" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Question;
