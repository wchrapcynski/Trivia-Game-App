export function setHasGameStarted(data) {
  return { type: "UDPATE_HAS_GAME_STARTED", payload: data };
}

export function updateGameStarted(bool) {
  return (dispatch) => {
    dispatch(setHasGameStarted(bool));
  };
}

export function setHasGameEnded(data) {
  return { type: "UDPATE_HAS_GAME_ENDED", payload: data };
}

export function updateGameEnded(bool) {
  return (dispatch) => {
    dispatch(setHasGameEnded(bool));
  };
}

export function setIsQuestionActive(data) {
  return { type: "UPDATE_IS_QUESTION_ACTIVE", payload: data };
}

export function updateIsQuestionActive(bool) {
  return (dispatch) => {
    dispatch(setIsQuestionActive(bool));
  };
}

export function isCorrect(data) {
  return { type: "UPDATE_IS_CORRECT", payload: data };
}

export function updateIsCorrect(bool) {
  return (dispatch) => {
    dispatch(isCorrect(bool));
  };
}

export function setScore(data) {
  return { type: "UDPATE_SCORE", payload: data };
}

export function updateScore(score) {
  return (dispatch) => {
    dispatch(setScore(score));
  };
}

export function setHighScore(data) {
  return { type: "UDPATE_HIGH_SCORE", payload: data };
}

export function updateHighScore(score) {
  return (dispatch) => {
    dispatch(setHighScore(score))
  }
}

export function setRestGame() {
  return { type: "RESET_GAME"};
}

export function resetGame() {
  return(dispatch) => {
    dispatch(setRestGame())
  }
}