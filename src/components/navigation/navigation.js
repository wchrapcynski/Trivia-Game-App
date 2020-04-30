import React from 'react';
import NavButton from './../nav_button/nav_button'
import './navigation.scss';

function Navigation() {
  return (
    <div className="navigation">
      <NavButton label="Score" />
      <NavButton label="Good Luck!" />
      <NavButton label="Start Game" />
    </div>
  )
}

export default Navigation;