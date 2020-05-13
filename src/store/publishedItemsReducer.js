const initialState = {
  publishedItems: null,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_PUBLISHED_IDS":
      return { publishedItems: action.payload };
    case "CLEAR_PUBLISHED_IDS":
      return { publishedItems: null };
    default:
      return state;
  }
}

export default Reducer;
