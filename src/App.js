import React from "react";
import Logo from "./images/logo2.png";
import "./App.scss";
import Question from "./components/question/question";
import Answers from "./components/answers/answers";
import Navigation from "./components/navigation/navigation";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img className="header__logo" src={Logo} alt="Disney Trivia Logo" />
      </header>
      <div className="top">
        <Question />
      </div>
      <div className="bottom">
        <Answers />
        <Navigation />
      </div>
    </div>
  );
}

export default App;
