import React from 'react';
import './choice.scss';

function Choice(props) {

  const clickHandle = () => {
    if(props.correct === true) {
      console.log("You are correct!")
    } else {
      console.log("You are wrong!")
    }
  }

  return(
    <div className="choice" onClick={clickHandle}>
      {props.choice}
    </div>
  )
}

export default Choice;