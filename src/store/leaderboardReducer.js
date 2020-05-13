const initialState = {
  leaderboardData: null,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_LEADERBOARD_DATA":
      return { leaderboardData: action.payload };
    case "CLEAR_LEADERBOARD_DATA":
      return { leaderboardData: null };
    default:
      return state;
  }
}

export default Reducer;
