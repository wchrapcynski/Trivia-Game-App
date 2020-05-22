import React from "react";
import { useSelector } from "react-redux";
import Choice from "../choice/choice";
import "./answers.scss";

function Answers() {
  const { choices } = useSelector((state) => state.questionReducer);

  return (
    <div className="answers">
      <Choice
        choice={choices && choices[0].choice}
        correct={choices && choices[0].correct}
      />
      <Choice
        choice={choices && choices[1].choice}
        correct={choices && choices[1].correct}
      />
      <Choice
        choice={choices && choices[2].choice}
        correct={choices && choices[2].correct}
      />
      <Choice
        choice={choices && choices[3].choice}
        correct={choices && choices[3].correct}
      />
    </div>
  );
}

export default Answers;
