import React from 'react';
import './nav_button.scss';

function Nav_Button(props) {
  return(
    <div className="nav_button">
      {props.label}
    </div>
  )
}

export default Nav_Button;