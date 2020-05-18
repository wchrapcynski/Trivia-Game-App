import React from "react";
import { useSelector } from 'react-redux';
import './question.scss'

function Question() {
  const questionData = useSelector(state => state.questionReducer.question)
  return <div className="question-box">
    <div>{questionData}</div>
  </div>;
}

export default Question;
