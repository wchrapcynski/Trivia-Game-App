import React from 'react';
import { useSelector } from 'react-redux';
import Choice from '../choice/choice'
import './answers.scss';

function Answers() {
  const questionData = useSelector(state => state.questionReducer.questionData)

  return(
    <div className="answers">
      <Choice question={questionData && questionData.choice1}/>
      <Choice question={questionData && questionData.choice2}/>
      <Choice question={questionData && questionData.choice3}/>
      <Choice question={questionData && questionData.choice4}/>
    </div>
  )
}

export default Answers;