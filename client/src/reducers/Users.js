import { RECEIVED_USERS } from "../configurations/Types"

const INITIAL_STATE = {
  users: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVED_USERS: {
        return Object.assign({}, state, { users: action.payload });
    }
    default: {
        return state;
    }
  }
}