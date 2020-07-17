import { types } from "./../actions/types";

export const baseApiUrl = "http://localhost:8000";
export const initialState = {
  hasGameStarted: false,
  hasGameEnded: false,
  isQuestionActive: true,
  isCorrect: null,
  score: 0,
  highScore: localStorage.getItem("highscore"),
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

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UDPATE_HAS_GAME_STARTED:
      return { ...state, hasGameStarted: action.payload };
    case types.UDPATE_HAS_GAME_ENDED:
      return { ...state, hasGameEnded: action.payload };
    case types.UPDATE_IS_QUESTION_ACTIVE:
      return { ...state, isQuestionActive: action.payload };
    case types.UPDATE_IS_CORRECT:
      return { ...state, isCorrect: action.payload };
    case types.UDPATE_SCORE:
      return { ...state, score: action.payload };
    case types.UDPATE_HIGH_SCORE:
      return { ...state, highScore: action.payload };
    case types.RESET_GAME:
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
};
