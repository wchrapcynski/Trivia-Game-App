const initialState = {
  questionData: {}
};

function Reducer(state = initialState, action) {
  switch(action.type) {
    case "UPDATE" : 
      return { questionData: action.payload};
    case "CLEAR":
      return {questionData: null};
    default: return state; 
  }
}

export default Reducer