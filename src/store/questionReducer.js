import { types } from "./../actions/types";

const initialState = {
  question: "",
  choices: null,
  publishedItems: null,
  publishedItemsLength: 0,
  currentQuestion: 0,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_QUESTION_DATA:
      return {
        ...state,
        question: action.payload.question,
        choices: action.payload.choices,
      };
    case types.UPDATE_PUBLISHED_IDS:
      return {
        ...state,
        publishedItems: action.payload,
        publishedItemsLength: action.payload.length,
      };
    case types.SET_NEXT_QUESTION:
      return { ...state, currentQuestion: action.payload };
    case types.RESET_GAME_Q:
      return {
        ...state,
        question: "",
        choices: null,
        publishedItems: null,
        publishedItemsLength: 0,
        currentQuestion: 0,
      };
    default:
      return state;
  }
}

export default Reducer;
