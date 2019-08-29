const INITIAL_STATE = {
    data: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      default: {
          console.log("Action Run", action);
          return Object.assign({}, state, {
              data: action.payload
          });
      }
  }
}