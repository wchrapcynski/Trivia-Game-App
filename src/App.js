import React, { useEffect } from "react";
import { connect } from "react-redux";
import Logo from "./images/logo.svg";
import "./App.scss";
import {
  fetchPublishedIds,
  fetchQuestionData,
} from "./actions/questionActions";
import { Question, Answers, Navigation } from "./components/appComponents";

function App(props) {
  const {
    publishedItems,
    currentQuestion,
    apiAccessOptions,
    apiEndPoints,
    fetchPublishedIds,
    fetchQuestionData,
  } = props;

  const setPublishedIds = () => {
    fetchPublishedIds(apiEndPoints.published, apiAccessOptions);
  };

  const setQuestionData = () => {
    fetchQuestionData(
      apiEndPoints.question,
      apiAccessOptions,
      publishedItems[currentQuestion]
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
      {console.log(props)}
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
const mapStateToProps = (state) => {
  return {
    publishedItems:
      state.questionReducer.publishedItems &&
      state.questionReducer.publishedItems,
    currentQuestion:
      state.questionReducer.currentQuestion &&
      state.questionReducer.currentQuestion,
    apiAccessOptions:
      state.gameReducer.apiAccessOptions && 
      state.gameReducer.apiAccessOptions,
    apiEndPoints:
      state.gameReducer.apiEndPoints && 
      state.gameReducer.apiEndPoints,
  };
};
const actions = { fetchPublishedIds, fetchQuestionData };

export default connect((state) => mapStateToProps, { ...actions })(App);
