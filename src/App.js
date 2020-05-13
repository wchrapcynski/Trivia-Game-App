import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./images/logo2.png";
import "./App.scss";
import * as fetchActions from "./actions/fetchActions";
import { Question, Answers, Navigation } from "./components/appComponents";

function App() {
  const dispatch = useDispatch();
  const apiAccessOptions = {
    method: "GET",
    headers: { Authorization: "Token " + process.env.REACT_APP_TRIVIA_API_KEY },
  };
  const baseApiUrl = "http://localhost:8000";
  const publishedIDList = useSelector(
    (state) => state.publishedItemsReducer.publishedItems
  );
  const apiEndPoints = {
    questionList: baseApiUrl + "/trivia/",
    question: baseApiUrl + "/question/",
    categorySearch: baseApiUrl + "/categorysearch/",
    leaderboard: baseApiUrl + "/leaderboard/",
    published: baseApiUrl + "/published/",
  };

  const [questionNumber, setQuestionNumber] = useState(0)

  const setPublishedIds = () => {
    dispatch(
      fetchActions.fetchPublishedIds(apiEndPoints.published, apiAccessOptions)
    );
  }

  const setQuestionData = () =>  {
    dispatch(fetchActions.fetchQuestionData(apiEndPoints.question, apiAccessOptions, publishedIDList[questionNumber]));
  }

  const nextQuestion = () => {
    setQuestionNumber(questionNumber + 1)
  }

  useEffect(() => {
    setPublishedIds();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  useEffect(() => {
    if(publishedIDList) {
      setQuestionData();
    }
  }, [publishedIDList])

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
