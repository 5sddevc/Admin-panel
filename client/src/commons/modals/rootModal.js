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
    if (!this.props.modalType && !this.props.modalProps) {
      return null;
    }
    const ModalToRender = this.modalComponent[this.props.modalType];
    return (
      <div>
        {/* <Modal
          title="Basic Modal"
          visible={this.props.isOpen}
          onOk={this.props.closeModal}
          onCancel={this.props.closeModal}
        >
          {this.props.content}
        </Modal> */}
        <ModalToRender {...this.props.modalProps} />
      </div>
    );
  }
}

export default connect((state) => state.Modal)(RootModal);