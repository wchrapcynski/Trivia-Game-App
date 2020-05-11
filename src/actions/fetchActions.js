export function setQuestionData(data) {
  return { type: "UPDATE", payload: data };
}

export function fetchQuestionData(url, apiOptions, id = "") {
  return (dispatch) => {
    fetch(url + id, apiOptions)
      .then((response) => response.json())
      .then((response) => dispatch(setQuestionData(response)))
      .catch((error) => console.log("Data was not received"));
  };
}
