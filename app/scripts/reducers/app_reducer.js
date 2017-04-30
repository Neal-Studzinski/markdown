let initialState = {
    savedPosts: [],
    draft: ''
};

export default function AppReducer(currentState, action) {
  if (currentState === undefined) {
    return initialState;
  }

  switch (action.type) {
    case "UPDATE_DRAFT":
        var newState = {
            draft:action.rawText
        };
      // DELETE OR CHANGE ME: I AM JUST AN EXAMPLE
      return Object.assign({}, currentState, newState);
  }

  
  return currenState;
}
