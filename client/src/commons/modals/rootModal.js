import React from 'react';
import { connect } from "react-redux";

//import { Modal } from 'antd';

import BasicModal from "./basicModal"

class RootModal extends React.Component {
  // state = { visible: false };

  // showModal = () => {
  //   this.setState({
  //     visible: true,
  //   });
  // };

  // handleOk = e => {
  //   console.log(e);
  //   this.setState({
  //     visible: false,
  //   });
  // };

  // handleCancel = e => {
  //   console.log(e);
  //   this.setState({
  //     visible: false,
  //   });
  // };

  modalComponent = {
    basic_modal: BasicModal
  }

  render() {
    if (!this.props.modals.length > 0) {
      return null;
    }
    const ModalsToRender = this.props.modals.map((val) => {
      let ModalToRender = this.modalComponent[val.modalType];
      console.log("MODAL", ModalToRender, this.modalComponent[val.modalType])
      return <ModalToRender {...val.modalProps} />
    })
    console.log("MODALS", ModalsToRender);
    return (
      <div>
        {ModalsToRender.map((val) => val)}
      </div>
    );
  }
}

export default connect((state) => state.Modal)(RootModal);