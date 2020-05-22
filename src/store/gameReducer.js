const baseApiUrl = "http://localhost:8000";
const initialState = {
  hasGameStarted: false,
  hasGameEnded: false,
  isQuestionActive: true,
  isCorrect: null,
  score: 0,
  highScore: 0,
  apiEndPoints: {
    questionList: baseApiUrl + "/trivia/",
    question: baseApiUrl + "/question/",
    categorySearch: baseApiUrl + "/categorysearch/",
    leaderboard: baseApiUrl + "/leaderboard/",
    published: baseApiUrl + "/published/",
  },
  apiAccessOptions: {
    method: "GET",
    headers: { Authorization: "Token " + process.env.REACT_APP_TRIVIA_API_KEY },
  },
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case "UDPATE_HAS_GAME_STARTED":
      return { ...state, hasGameStarted: action.payload };
    case "UDPATE_HAS_GAME_ENDED":
      return { ...state, hasGameEnded: action.payload };
    case "UPDATE_IS_QUESTION_ACTIVE":
      return { ...state, isQuestionActive: action.payload };
    case "UPDATE_IS_CORRECT":
      return { ...state, isCorrect: action.payload };
    case "UDPATE_SCORE":
      return { ...state, score: action.payload };
    case "UDPATE_HIGH_SCORE":
      return { ...state, highScore: action.payload };
    case "RESET_GAME":
      return {
        ...state,
        hasGameStarted: true,
        hasGameEnded: false,
        score: 0,
        isQuestionActive: true,
      };
    default:
      return state;
  }
}

export default Reducer;
