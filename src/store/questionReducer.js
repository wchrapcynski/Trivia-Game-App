const initialState = {
  questionData: {},
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_QUESTION_DATA":
      return { questionData: action.payload };
    case "CLEAR_QUESTION_DATA":
      return { questionData: null };
    default:
      return state;
  }
}

export default Reducer;
