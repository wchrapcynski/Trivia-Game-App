const initialState = {
  publishedItems: null
};

function Reducer(state = initialState, action) {
  switch(action.type) {
    case "UPDATE" : 
      return { publishedItems: action.payload  };
    case "CLEAR":
      return {publishedItems: null};
    default: return state; 
  }
}

export default Reducer