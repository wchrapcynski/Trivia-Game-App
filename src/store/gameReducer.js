const initialState = {
  hasGameStarted: false,
  hasGameEnded: false,
  isCorrect: null,
  score: 0
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case "UDPATE_HAS_GAME_STARTED":
      return { ...state, hasGameStarted: action.payload };
    case "UDPATE_HAS_GAME_ENDED":
      return { ...state, hasGameEnded: action.payload };
    case "UDPATE_IS_CORRECT":
      return { ...state, isCorrect: action.payload };
    case "UDPATE_SCORE":
      return { ...state, score: action.payload };
    default:
      return state;
  }
}

export default Reducer
