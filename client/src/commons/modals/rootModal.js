import React from 'react';
import { connect } from "react-redux";

//import { Modal } from 'antd';

import BasicModal from "./basicModal"

class RootModal extends React.Component {
 
  modalComponent = {
    basic_modal: BasicModal
  }

  render() {
    if (!this.props.modalType && !this.props.modalProps) {
      return null;
    }
    const ModalToRender = this.modalComponent[this.props.modalType];
    return (
      <div>
        <ModalToRender {...this.props.modalProps} />
      </div>
    );
  }
}

export default connect((state) => state.Modal)(RootModal);