import { OPEN_MODAL, CLOSE_MODAL } from "../configurations/Types"

const INITIAL_STATE = {
  modals: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      const { type, ...data } = action;
      let newModals = [...state.modals];
      newModals.push(data);
      return Object.assign({}, state, {modals: newModals});
    }
    case CLOSE_MODAL: {
      let newModals = [...state.modals];
      newModals.pop();
      return Object.assign({}, state, {modals: newModals});
    }
    default: {
      return INITIAL_STATE;
    }
  }
}
