import shuffleArray from "../helpers/shuffleArray";
import { types } from "./../actions/types";

function setUpQuestionData(data) {
  let questionData = {
    question: data.question,
    choices: shuffleArray([
      { choice: data.choice1, correct: true },
      { choice: data.choice2, correct: false },
      { choice: data.choice3, correct: false },
      { choice: data.choice4, correct: false },
    ]),
  };
  return questionData;
}

export function setQuestionData(data) {
  return { type: types.UPDATE_QUESTION_DATA, payload: data };
}
export function fetchQuestionData(url, apiOptions, id = "") {
  return (dispatch) => {
    fetch(url + id, apiOptions)
      .then((response) => response.json())
      .then((response) => setUpQuestionData(response))
      .then((response) => dispatch(setQuestionData(response)))
      .catch((error) => console.log("Data was not received"));
  };
}

export function setPublishedIds(data) {
  return { type: types.UPDATE_PUBLISHED_IDS, payload: data };
}
export function fetchPublishedIds(url, apiOptions) {
  return (dispatch) => {
    fetch(url, apiOptions)
      .then((response) => response.json())
      .then((response) => dispatch(setPublishedIds(shuffleArray(response))))
      .catch((error) => console.log("Data was not received"));
  };
}

export function setNextQuestion(data) {
  return { type: types.SET_NEXT_QUESTION, payload: data };
}
export function nextQuestion(currentQuestion) {
  return (dispatch) => {
    dispatch(setNextQuestion(currentQuestion + 1));
  };
}

export function resetQuestionData() {
  return { type: types.RESET_GAME_Q};
}

export function restartGame() {
  return(dispatch) => {
    dispatch(resetQuestionData())
  }
}