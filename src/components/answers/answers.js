import React from "react";
import { connect } from "react-redux";
import Choice from "../choice/choice";
import "./answers.scss";

function Answers(props) {
  const { choices } = props;

  return (
    <div className="answers" data-test="answers-component">
      <div data-test="choice">
        <Choice
          choice={choices && choices[0].choice}
          correct={choices && choices[0].correct}
          data-test="choice-component"
        />
      </div>
      <div data-test="choice">
        <Choice
          choice={choices && choices[1].choice}
          correct={choices && choices[1].correct}
          data-test="choice-component"
        />
      </div>
      <div data-test="choice">
        <Choice
          choice={choices && choices[2].choice}
          correct={choices && choices[2].correct}
          data-test="choice-component"
        />
      </div>
      <div data-test="choice">
        <Choice
          choice={choices && choices[3].choice}
          correct={choices && choices[3].correct}
          data-test="choice-component"
        />
      </div>
    </div>
  );
}

export default connect((state) => ({
  choices: state.questionReducer.choices,
}))(Answers);
