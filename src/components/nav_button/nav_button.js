import React from 'react';
import './nav_button.scss';

function Nav_Button(props) {
  return(
    <div>
      <button>{props.label}</button>
    </div>
  )
}

export default Nav_Button;