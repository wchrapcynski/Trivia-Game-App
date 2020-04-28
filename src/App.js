import React from 'react';
import Logo from './images/logo2.png'
import './App.scss';
import Question from './components/question/question'

function App() {
  return (
    <div className="App">
      <header className="header">
        <img className="header__logo" src={Logo} alt="Disney Trivia Logo"/>
        <Question />
      </header>
    </div>
  );
}

export default App;
