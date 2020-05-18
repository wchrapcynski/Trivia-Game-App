const initialState = {
  question: "",
  choices: null,
  publishedItems: null,
  publishedItemsLength: 0,
  currentQuestion: 0
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_QUESTION_DATA":
      return {
        ...state,
        question: action.payload.question,
        choices: action.payload.choices,
      };
    case "UPDATE_PUBLISHED_IDS":
      return { ...state, publishedItems: action.payload, publishedItemsLength: action.payload.length };
    case "SET_NEXT_QUESTION":
      return { ...state, currentQuestion: action.payload }
    default:
      return state;
  }
}

export default Reducer;
