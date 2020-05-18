import React from "react";
import { useSelector } from "react-redux";
import Choice from "../choice/choice";
import "./answers.scss";

function Answers() {
  const choiceData = useSelector(
    (state) => state.questionReducer.choices
  );

  return (
    <div className="answers">
      <Choice question={choiceData && choiceData[0].choice} />
      <Choice question={choiceData && choiceData[1].choice} />
      <Choice question={choiceData && choiceData[2].choice} />
      <Choice question={choiceData && choiceData[3].choice} />
    </div>
  );
}

export default Answers;
