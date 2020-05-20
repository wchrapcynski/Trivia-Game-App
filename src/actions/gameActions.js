export function setHasGameStarted(data) {
  return {type: "UDPATE_HAS_GAME_STARTED", payload: data}
}

export function getHasGameStarted(bool) {
  return (dispatch) => {
    dispatch(setHasGameStarted(bool))
  }
}

export function setHasGameEnded(data) {
  return {type: "UDPATE_HAS_GAME_STARTED", payload: data}
}

export function getIsGameEnded(bool) {
  return (dispatch) => {
    dispatch(setHasGameEnded(bool))
  }
}

export function isCorrect(data) {
  return {type: "UPDATE_IS_CORRECT", payload: data}
}

export function updateIsCorrect(bool) {
  return(dispatch) => {
    dispatch(isCorrect(bool))
  }
}

export function setScore(data) {
  return {type: "UDPATE_SCORE", payload: data}
}

export function updateScore(score) {
  return (dispatch) => {
    dispatch(setScore(score))
  }
}
