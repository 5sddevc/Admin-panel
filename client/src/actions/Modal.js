import { OPEN_MODAL, CLOSE_MODAL } from '../configurations/Types';
//import rootModal from '../commons/modals/rootModal';

export function openModal(title, content, okText, cancelText) {
  return {
    type: OPEN_MODAL,
    modalType: "basic_modal",
    modalProps: {
      title: title,
      visible: true,
      content: content,
      okText: okText || "Ok",
      cancelText:cancelText || "Cancel"    }
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}
