import React from 'react';
import { connect } from "react-redux";

//import { Modal } from 'antd';

import BasicModal from "./basic"

class RootModal extends React.Component {
 
  modalComponent = {
    basic_modal: BasicModal
  }

  render() {
    if (!this.props.modals.length > 0) {
      return null;
    }
    const ModalsToRender = this.props.modals.map((val) => {
      let ModalToRender = this.modalComponent[val.modalType];
      return <ModalToRender {...val.modalProps} />
    })
    return (
      <div>
        {ModalsToRender.map((val) => val)}
      </div>
    );
  }
}

export default connect((state) => state.Modal)(RootModal);