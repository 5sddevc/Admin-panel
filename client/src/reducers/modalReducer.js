import { OPEN_MODAL, CLOSE_MODAL } from "../configurations/types"

const INITIAL_STATE = {
  modalType: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      const { type, ...data } = action;
      return Object.assign({}, state, data);
    }
    case CLOSE_MODAL: {
      return INITIAL_STATE;
    }
    default: {
      return INITIAL_STATE;
    }
  }
}