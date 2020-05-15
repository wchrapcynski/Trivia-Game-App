import shuffleArray from "../helpers/shuffleArray";

export function setQuestionData(data) {
  return { type: "UPDATE_QUESTION_DATA", payload: data };
}

export function fetchQuestionData(url, apiOptions, id = "") {
  return (dispatch) => {
    fetch(url + id, apiOptions)
      .then((response) => response.json())
      .then((response) => dispatch(setQuestionData(response)))
      .catch((error) => console.log("Data was not received"));
  };
}

export function setPublishedIds(data) {
  return { type: "UPDATE_PUBLISHED_IDS", payload: data };
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
  return { type: "SET_NEXT_QUESTION", payload: data };
}

export function nextQuestion(currentQuestion) {
  return (dispatch) => {
    dispatch(setNextQuestion(currentQuestion + 1))
  }
}