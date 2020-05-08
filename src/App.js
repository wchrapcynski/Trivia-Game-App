import React, { useState, useEffect} from "react";
import Logo from "./images/logo2.png";
import "./App.scss";
import Question from "./components/question/question";
import Answers from "./components/answers/answers";
import Navigation from "./components/navigation/navigation";

function App() {
  const apiAccessOptions = {method: "GET", headers: {"Authorization": "Token " + process.env.REACT_APP_TRIVIA_API_KEY}}
  const baseUrl = "http://localhost:8000";
  const questionListUrl = baseUrl + "/trivia/";
  const questionUrl = baseUrl + "/question/";
  const categorysearch = baseUrl + "/categorysearch/"
  const leaderboardUrl = baseUrl + "/leaderboard/";
  const publishedUrl = baseUrl + "/published/";

  const [questions, setQuestions] = useState(null)
  const [leaderboard, setLeaderboard] = useState(null)
  const [published, setPublished] = useState(null)

  const fetchData = (url, setData) => {
    fetch(url, apiAccessOptions)
    .then(response => response.json())
    .then(response => setData(response))
    .catch(error => console.log("Data was not received"))
  }

  // useEffect(() => {
  //   fetchData(questionUrl + "/3", setQuestions)
  //   /* eslint-disable react-hooks/exhaustive-deps */
  // }, [])

  // useEffect(() => {
  //   fetchData(publishedUrl, setPublished)
    
  // }, [])

  useEffect(() => {
    fetchData('http://localhost:8000/categorysearch/?category=movies', setQuestions)
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [])

  // useEffect(() => {
  //   fetchData(leaderboardUrl, setLeaderboard)
  //   /* eslint-disable react-hooks/exhaustive-deps */
  // }, [])

  useEffect(() => {
    if(questions) {
      console.log(questions)
    }
    if(leaderboard) {
      console.log(leaderboard)
    }
    if(published) {
      console.log(published)
    }
  }, [questions, leaderboard, published])
  
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
