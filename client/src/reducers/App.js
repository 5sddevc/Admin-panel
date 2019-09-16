import { TOGGLE_THEME } from "../configurations/Types"

const INITIAL_STATE = {
  theme: "light"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      return Object.assign({}, state, {theme: state.theme === "light" ? "dark" : "light"});
    }
    default: {
      return INITIAL_STATE;
    }
  }
}