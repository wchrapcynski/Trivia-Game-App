import React, { useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import Logo from "./images/logo2.png";
import "./App.scss";
import * as questionActions from './actions/fetchActions'
import Question from "./components/question/question";
import Answers from "./components/answers/answers";
import Navigation from "./components/navigation/navigation";

function App() {
  const dispatch = useDispatch();
  const apiAccessOptions = {method: "GET", headers: {"Authorization": "Token " + process.env.REACT_APP_TRIVIA_API_KEY}}
  const baseApiUrl = "http://localhost:8000";

  const apiEndPoints = {
    questionList: baseApiUrl + "/trivia/",
    question: baseApiUrl + "/question/",
    categorySearch: baseApiUrl + "/categorysearch/",
    leaderboard: baseApiUrl + "/leaderboard/",
    published: baseApiUrl + "/published/"
  }

  const [published, setPublished] = useState(null)

  function setQuestionData() {
    dispatch(questionActions.fetchQuestionData(apiEndPoints.question, apiAccessOptions, "3"));
  }

  useEffect(() => {
    // fetchData(questionUrl + "3", setQuestionData)
    setQuestionData()
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [])

  // useEffect(() => {
  //   fetchData(publishedUrl, setPublished)
  //   /* eslint-disable react-hooks/exhaustive-deps */  
  // }, [])

  // useEffect(() => {
  //   fetchData('http://localhost:8000/categorysearch/?category=parks', setQuestions)
  //   /* eslint-disable react-hooks/exhaustive-deps */
  // }, [])
  
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
