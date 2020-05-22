import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./images/logo2.png";
import "./App.scss";
import * as questionActions from "./actions/questionActions";
import { Question, Answers, Navigation } from "./components/appComponents";

function App() {
  const dispatch = useDispatch();
  const { publishedItems, currentQuestion } = useSelector(
    (state) => state.questionReducer
  );
  const { apiAccessOptions, apiEndPoints } = useSelector(
    (state) => state.gameReducer
  );

  const setPublishedIds = () => {
    dispatch(
      questionActions.fetchPublishedIds(
        apiEndPoints.published,
        apiAccessOptions
      )
    );
  };

  const setQuestionData = () => {
    dispatch(
      questionActions.fetchQuestionData(
        apiEndPoints.question,
        apiAccessOptions,
        publishedItems[currentQuestion]
      )
    );
  };

  useEffect(() => {
    setPublishedIds();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  useEffect(() => {
    if (publishedItems) {
      setQuestionData();
    }
  }, [publishedItems, currentQuestion]);

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
