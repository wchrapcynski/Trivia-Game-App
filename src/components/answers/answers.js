import React from "react";
import { useSelector } from "react-redux";
import shuffleArray from "./../../helpers/shuffleArray";
import Choice from "../choice/choice";
import "./answers.scss";

function Answers() {
  const questionData = useSelector(
    (state) => state.questionReducer.questionData
  );
  let choicesArray = shuffleArray([
    { choice: questionData.choice1, correct: true },
    { choice: questionData.choice2, correct: false },
    { choice: questionData.choice3, correct: false },
    { choice: questionData.choice4, correct: false },
  ]);

  return (
    <div className="answers">
      <Choice question={choicesArray[0].choice} />
      <Choice question={choicesArray[1].choice} />
      <Choice question={choicesArray[2].choice} />
      <Choice question={choicesArray[3].choice} />
    </div>
  );
}

export default Answers;
