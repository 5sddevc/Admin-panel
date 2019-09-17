import { TOGGLE_MODE } from "../configurations/Types"

const INITIAL_STATE = {
  mode: "light"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_MODE: {
      return Object.assign({}, state, {mode: state.mode === "light" ? "dark" : "light"});
    }
    default: {
      return INITIAL_STATE;
    }
  }
}