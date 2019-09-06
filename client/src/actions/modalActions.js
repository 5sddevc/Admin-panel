import { OPEN_MODAL, CLOSE_MODAL } from '../configurations/types';
//import rootModal from '../commons/modals/rootModal';

export function openModal(title, content) {
  return {
    type: OPEN_MODAL,
    modalType: "basic_modal",
    modalProps: {
      title: title,
      visible: true,
      content: content
    }
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}