import React from 'react';
import { connect } from "react-redux";
import { Modal } from 'antd';

import { closeModal } from "../../actions/modalActions"

const BasicModal = (props) => {
  return (
    <Modal
    title={props.title}
    visible={props.visible}
    onOk={() => props.dispatch(closeModal())}
    onCancel={() => props.dispatch(closeModal())}
    >
      {props.content}
    </Modal>
  )
}

export default connect()(BasicModal);