const initialState = {
  leaderboardData: null
};

function Reducer(state = initialState, action) {
  switch(action.type) {
    case "UPDATE" : 
      return { leaderboardData: action.payload  };
    case "CLEAR":
      return {leaderboardData: null};
    default: return state; 
  }
}

export default Reducer