import React from 'react';
import './choice.scss';

function Choice(props) {
  return(
    <div className="choice">
      {props.question}
    </div>
  )
}

export default Choice;