import { types } from "./../actions/types";

const initialState = {
  leaderboardData: null,
  leaderboardDisplay: false,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_LEADERBOARD_DATA:
      return { ...state, leaderboardData: action.payload };
    case types.UPDATE_LEADERBOARD_DISPLAY:
      return { ...state, leaderboardDisplay: action.payload };
    default:
      return state;
  }
}

export default Reducer;
