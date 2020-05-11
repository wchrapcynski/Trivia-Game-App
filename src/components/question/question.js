import React from "react";
import { useSelector } from 'react-redux';
import './question.scss'

function Question() {
  const questionData = useSelector(state => state.questionReducer.questionData)
  return <div className="question-box">
    <div>{questionData.question}</div>
  </div>;
}

export default Question;
