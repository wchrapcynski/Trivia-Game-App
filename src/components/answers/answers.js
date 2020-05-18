import React from "react";
import { useSelector } from "react-redux";
import Choice from "../choice/choice";
import "./answers.scss";

function Answers() {
  const choiceData = useSelector((state) => state.questionReducer.choices);

  return (
    <div className="answers">
      <Choice
        choice={choiceData && choiceData[0].choice}
        correct={choiceData && choiceData[0].correct}
      />
      <Choice
        choice={choiceData && choiceData[1].choice}
        correct={choiceData && choiceData[1].correct}
      />
      <Choice
        choice={choiceData && choiceData[2].choice}
        correct={choiceData && choiceData[2].correct}
      />
      <Choice
        choice={choiceData && choiceData[3].choice}
        correct={choiceData && choiceData[3].correct}
      />
    </div>
  );
}

export default Answers;
