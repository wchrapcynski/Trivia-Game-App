const initialState = {
  leaderboardData: null,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_LEADERBOARD_DATA":
      return { leaderboardData: action.payload };
    default:
      return state;
  }
}

export default Reducer;
